



window.onload = function(){
//const container = document.querySelector('.gatitos');
//const boton = document.querySelector('#btn-gato');
    let data={
        image_id:"asf2",
        sub_id:"my-user-1234",
        value:1
   }
    let settings = {
        "method":"POST",
        "headers": {
          "content-type":"application/json",
          "x-api-key":"89d0ffa5-5d01-42d0-b830-ab273474edad"
        },
        "body": JSON.stringify(data)
    }
    //boton.addEventListener('click', function () {
    fetch("https://api.thecatapi.com/v1/votes", settings)
    .then(function(response){
        return response.json();
    })
    
    //array func
    //.then( response => response.json())

    .then(function(info){
        console.log(info);
        //for(let i = 0; i< 10; i++){
        //    container.innerHTML += `<img src=${data.message[i]}>`
        //}
    })
    .catch(function(e){
        console.log("Error!" + e);
    })
}//)}

