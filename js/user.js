function loadAPIData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>{
        displayData(data)
        forLoop(data)
    })
}
function displayData(data){
    const nameDiv =document.getElementById('name-div')
    data.map(user =>{
        const p =document.createElement('p');
        p.innerText=user.name;
        nameDiv.append(p)
    })
}

function forLoop(data){
    const nameDiv=document.getElementById('name-div')
    const users =data;
for(const user of users){
    const p =document.createElement('p');
    p.innerText=user.phone;
    nameDiv.append(p)

}
}

