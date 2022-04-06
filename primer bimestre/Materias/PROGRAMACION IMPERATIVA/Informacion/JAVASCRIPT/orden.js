const edades = [33, 27, 34, 30, 34, 25];

for(let i = 0; i< edades.length-1; i++){
    for(let j = 0; j< edades.length-1; j++){
        if(edades[j]>edades[j+1]){
            let temporario = edades[j]
            edades[j]= edades[j+1]
            edades[j+1]=temporario;
        }
    }
}
for(let x = 0; x< edades.length; x++){
console.log(edades[x])
}
