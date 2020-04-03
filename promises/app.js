const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];



function createPost(post){
    return new Promise(function(resolve, reject){
    setTimeout(()=>{
        posts.push(post);
        const error = false;
        
        if(!error){
           resolve();
           }
            reject('Error: something');
    },2000);
    });   
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

createPost({title: 'Post three', body: 'post three'}).then(getPosts).catch(function(err){
    console.log(err);
});
