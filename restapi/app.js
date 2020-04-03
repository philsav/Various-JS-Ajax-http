const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

//function createPost(){
//    setTimeout(()=>{
//        posts.push(post);
//    },2000);
//}
//
//function getPosts(){
//    setTimeout(()=>{
//        let output = '';
//        posts.forEach(function(post){
//            output += `<li>${post.title}</li>`
//        });
//        document.body.innerHTML = output;
//    },1000)
//}
//
//createPost({title: 'Post three', body: 'post three'});
//
//getPosts();

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

createPost({title: 'Post three', body: 'post three'}, getPosts);
