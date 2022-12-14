const titulo = document.querySelector('h1')
const lista = document.querySelector('ul')

fetch('http://localhost:3000')
    .then(result => result.json())
    .then(data => {
        console.log(data);
        titulo.textContent = data.message[0];
        data.message.forEach(element=>{
            const item = document.createElement('li');
            item.innerText = element;
            lista.appendChild(item);
        })
    })