function loadAPIData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>displayData(data))
}
function displayData(data){
    const nameDiv =document.getElementById('name-div')
    data.map(user =>{
        const p =document.createElement('p');
        p.innerText=user.name;
        nameDiv.append(p)
    })
}

