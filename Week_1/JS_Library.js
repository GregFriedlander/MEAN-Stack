var _ = {
    map: function(arr, callback) {
        var newArray = [];
        for(var i = 0; i < arr.length; i++){
            var result = callback(arr[i], newArray);
        };
        console.log(result);
    },
    reduce: function(arr, callback) { 
       var newNum = 0;
       for(var i = 0; i <= arr.length; i++){
           var result = callback(arr[i], newNum);
           newNum += arr[i];
       }
       console.log(result);
    },
    find: function(arr, callback) {   
        for(var i = 0; i < arr.length; i++){
            if(callback(arr[i])) {
                var result = callback(arr[i]);
            }
        }
        console.log(result);
    },
    filter: function(arr, callback) { 
        var newArray = [];
        for(var i = 0; i < arr.length; i++){
            var result = callback(arr[i], newArray);
        };
        console.log(result);
    },
    reject: function() { 
        // code here;
    }
}

var filter = _.filter([1, 2, 3, 4, 5, 6], function(num, newarr){ 
    if(num%2==0){
        newarr.push(num);
    }
    return newarr; }
)


var map = _.map([1, 2, 3, 4, 5, 6], function(num, newarr){
    num=num*3;
    newarr.push(num);
    return newarr;
    }
) 

var reduce = _.reduce([1, 2, 3, 4, 5, 6], function(num, num2){
    return num2;
    }
) 

var find = _.find([1, 2, 3, 4, 5, 6], function(num){
    if(num%2==0){
        return num;
    }
    }
) 


    

