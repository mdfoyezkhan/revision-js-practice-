
document.getElementById('check-post').addEventListener('click', function (){
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data =>displayPost(data))
}
function displayPost(data){
    const boxWraper =document.getElementById('box-wraper');
    boxWraper.classList.add('primery-style');
    const posts=data;
    for(let post of posts){
        const p = document.createElement('p');
        p.classList.add('text')
        p.innerText=post.title;
        boxWraper.append(p)
    }
}
loadPost()
})
