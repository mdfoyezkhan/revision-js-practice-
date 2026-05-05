function loadApiData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}
function displayData(data){
    const contener=document.getElementById('contener');
    contener.classList.add('primery-style')
    for(const user of data){
        const cardWraper =document.createElement('div');
        cardWraper.classList.add('text')
        cardWraper.innerHTML=`
        <div>
            <h3>${user.name}</h3>
            <h4>${user.company.name}</h4>
            <p>${user.company.bs}</p>
            <div>
                <p>Street:${user.address.street}</p>
                <p>City:${user.address.city}</p>
                <p>ZipCode:${user.address.zipcode}</p>
            </div>
        </div>

        <div>
            <h4>Contact Us</h4>
            <p>Phone:${user.phone}</p>
            <p>Email:${user.email}</p>
            <p>Website:${user.website}</p>
        </div>
        `;
        contener.append(cardWraper)
    }
}
loadApiData()