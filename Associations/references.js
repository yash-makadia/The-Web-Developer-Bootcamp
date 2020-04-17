var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true });



var Post = require("./models/posts");
var User = require("./models/users");


// Post.create({
//   title: "How to cook the best burger pt. 2",
//   content: "AKLSJDLAKSJD gksgxkksgcss"
// }, function(err, post){
//     User.findOne({email: "aashay@gmail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

// Find user
// find all posts for that user

User.findOne({email: "aashay@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

// User.create({
// 	email: "aashay@gmail.com",
// 	name: "Aashay"
// });
