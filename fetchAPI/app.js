document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText(){
    fetch('text.txt')
    .then(res => res.text()
    )
    .then(data => {
        document.getElementById('output').innerHTML = data})
    .catch(function(err){
    })
}

//
function getJson(){
    fetch('posts.json')
    .then(res =>  res.json())
    .then(data => {
       let output = '';
        data.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;

    })
    .catch(err =>  console.log(err)
    );
}

//
function getExternal(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
       let output = '';
        data.forEach(user => {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;

    })
    .catch(err =>  console.log(err));
}