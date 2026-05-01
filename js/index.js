function dataLoad(){
    fetch('http://127.0.0.1:5500/json.txt')
    .then(res => res.text())
    .then(data =>getData(data))
}
function getData(data){
document.getElementById('click-me').addEventListener('click', function(){
const showData = document.getElementById('show-data')
const p = document.createElement('p');
p.classList.add('style')
p.innerHTML= data;
showData.append(p)

})}
dataLoad()