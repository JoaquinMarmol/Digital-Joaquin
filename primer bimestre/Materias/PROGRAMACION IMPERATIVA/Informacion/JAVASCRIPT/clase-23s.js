let personas = [
    {
      id: 1,
      nombre: "Ale",
      edad: 15
    },
    {
      id: 2,
      nombre: "Javi",
      edad: 83
    },
    {
      id: 3,
      nombre: "Luis",
      edad: 26
    },
    {
      id: 4,
      nombre: "Dan",
      edad: 16
    },
    {
      id: 5,
      nombre: "Tito",
      edad: 22
    },
    {
      id: 6,
      nombre: "Marina",
      edad: 76
    },
    {
      id: 7,
      nombre: "Susy",
      edad: 35
    },
    {
      id: 8,
      nombre: "John",
      edad: 25
    },
]

function busquedaSecuencial(list, num){
    let i = 0;
    for(i; i < list.length - 1 && list[i].edad !== num;i++){}

    if(list[i].edad !== num){
        return 'No hay coincidencias';
    }
    return i;
}
   
console.log(busquedaSecuencial(personas, 25));

function ordernar(list){
    for (let i =0;i<list.length;i++){
        for (let j =0;j<list.length - 1;j++){
            if(list[j].edad > list[j+1].edad){
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    return list;
}

console.log(ordernar(personas));

const binarySearch = (list, item) => {
	let resultado = [];
    for (let i = 0; i < item.length;i++){
        let low = 0;
	    let high = list.length - 1;
        while (low <= high){
            const mid = Math.floor((low + high) / 2);
            const guess = list[mid];
            if (guess.edad === item[i]) {
                resultado.push(guess.nombre);
                break;
            }
            if (guess.edad > item[i]) {

                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    if (resultado[0] === undefined){
        return 'No hay coincidencias';
    }
    return resultado;
};

let edades = [25, 76, 16, 15];
console.log(binarySearch(personas, edades));
