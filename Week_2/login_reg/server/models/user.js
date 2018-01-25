var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');

var UserSchema = mongoose.Schema({
    first_name: {type: String, minlength: [1, "Please enter a First Name"]},
    last_name: {type: String, minlength: [1, "Please enter a Last Name"]},
    email: {
        type: String, 
        unique: true,
        validate:[{
                validator: function(email){
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(email);
                },
                message: "Please enter a valid Email address"
            }
        ]
    },
    password: String,
    dob: {
        type: Date,
        validate:[{
                validator: function(date){
                    var today = new Date();
                    console.log('todays date: ', today);
                    if(date > today){
                        console.log('validator should block');
                        return false;
                    }else{
                        console.log('validator should allow');
                        return true;
                    }   
                },
                message: "You must be born in the past"
            }
        ]
    }
}, {timestamps: true});

UserSchema.pre('save', function(next){
    var user = this;
    bcrypt.hash(user.password, 10)
    .then(function(hashed_password){
        user.password = hashed_password;
        next();
    })
    .catch(function(error){
        console.log('my bcrpyt error: ', error);
    })
})

var User = mongoose.model('User', UserSchema);