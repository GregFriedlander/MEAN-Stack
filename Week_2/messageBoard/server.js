var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/messageBoard_database');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3},
    message: { type: String, required: true, },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]},{timestamps: true})

mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');

var CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    text: {type: String, required: true},
    _post: {type: Schema.Types.ObjectId, ref:'Post'}
}, {timestamps: true})

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

app.get('/', function(req,res){
    Post.find().populate('comments').exec(function(err,allPosts){
        if(err){
            console.log('something went wrong');
            console.log(err);
            res.send(err);
        }else{
            console.log('got all posts', allPosts);
            res.render('index', {posts: allPosts});
        }
    })  
})

app.post('/new_post', function(req,res){
    var newPost = new Post(req.body);
    newPost.save(function(err){
        if(err){
            console.log("something went wrong trying to save new Post");
            res.send(err);
        }else{
            console.log("added a new post");
            res.redirect('/');
        }
    })
})

app.post('/new_comment', function(req,res){
    var newComment = new Comment(req.body);
    Post.findOne({_id: req.body._post}, function(err, foundPost){
        if(err){
            console.log('something went wrong');
            res.send(err);
        }else{
            console.log('found Post, adding comment');
            newComment.save(function(err){
                if(err){
                    console.log("something went wrong");
					console.log(err);
					res.send(err);
                }else{
                    foundPost.comments.push(newComment._id);
                    console.log('saved comment, saving post now');
                    foundPost.save(function(err){
                        if(err){
                            console.log("something went wrong");
                            console.log(err);
                            res.send(err);
                        }else{
                            console.log('we made it');
                            res.redirect('/');
                        }
                    })
                }
            })
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})