const http = new easyHTTP;

//getposts
//http.get('https://jsonplaceholder.typicode.com/posts',
//
//function(err, posts){
// if(err){
//     console.log(err);
// } else{
//     console.log(posts);
//     
// }
//});
//
////get single posts
//http.get('https://jsonplaceholder.typicode.com/posts/1',
//
//function(err, post){
// if(err){
//     console.log(err);
// } else{
//     console.log(post);
//     
// }

//create data
const data = {
    title: 'custom post',
    body: 'this is a post'
};

//creat post
//http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//     console.log(err);
// } else{
//     console.log(post);
//     
// }
//});

//put post
//http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//    if(err){
//     console.log(err);
// } else{
//     console.log(post);
// }
//})

//delete posts
http.delete('https://jsonplaceholder.typicode.com/posts/1',

function(err, response){
 if(err){
     console.log(err);
 } else{
     console.log(response);
     
 }
});

