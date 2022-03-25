const prompt = require("prompt-sync")({ sigint: true });

const alicia = [10, 80, 10];
const bob = [90, 20, 25];
let resultadoParcial = [0, 0];
let nombre;

let concurso = {
    etapas: resultadoParcial,
    ganador: nombre,
    encontrarGanador: function (a, b){
        for (let i=0; i<alicia.length; i++){
            if (a[i] > b[i]){
                this.etapas[0]++;
            }else if(a[i] < b[i]){
                this.etapas[1]++;
            }
        }
        if (this.etapas[0]>this.etapas[1]){
            return this.ganador = 'Alicia'
        }
        return this.ganador = 'Bob'
    },
    exportarResultados: function (){
        return JSON.stringify(this.etapas);
    }
}

console.log(concurso.encontrarGanador(alicia, bob));
console.log(concurso.exportarResultados());

function digitalHouse(a, b){
    for(let i = 1; i<=100; i++){
        if(i%a==0 && i%b==0){
            console.log('Digital House');
        }else if(i%a==0){
            console.log('Digital');
        }else if(i%b==0){
            console.log('House');
        }else{
            console.log(i);
        }
    }
}

//digitalHouse(3, 9);

function sumaArray(arrayNum){
    let suma = 0;
    for(let elemento of arrayNum){
        suma += elemento;
    }
    return suma;
}

console.log(sumaArray([10,-20,30]));

