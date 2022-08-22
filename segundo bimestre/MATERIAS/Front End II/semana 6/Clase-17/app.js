const container = document.querySelector('.container');
const boton = document.querySelector('#btn-dog');

const endpoint = 'https://dog.ceo/api/breed/bulldog/images'

boton.addEventListener('click', function () {
    console.log("Llamando a la API");
    // llamamos a la API
    fetch(endpoint)
        .then(objetoRespuesta => objetoRespuesta.json()) //aca caputarmos el objeto de tipo Response
        .then(data => {
            // aca ya contamos con la data de la respueta gracias al trabajo de .json()
            console.log(data);
            // consumimos las primeras 10 y mostramos dinamicamente
            for(let i = 0; i< 10; i++){
                container.innerHTML += `<img src=${data.message[i]}>`
            }
        })
        .catch(error => console.log(error))

})