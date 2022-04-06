//6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// .......

// for(let i = 0; i < 30; i++){
// 	let fila = ''
// 	for(let j = 0; j < i + 1; j++){
// 		fila += i
// 	}
// 	console.log(fila)
// }

// En un concurso de fotografía, donde los usuarios
// publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos
// por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la
// mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero
// y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para
// cada uno, una cantidad de likes—.
function randomN(max) {
    return Math.floor(Math.random() * max);
  }
  
  // const likes = [];
  // for (let i = 0; i < 15; i++) {
  //   likes.push(randomN(50));
  // }
  // console.log(likes);
  
  // for (let i = 0; i < likes.length; i++) {
  //   for (let j = 0; j < likes.length - 1; j++) {
  //     if (likes[j] < likes[j + 1]) {
  //       let temp = likes[j];
  //       likes[j] = likes[j + 1];
  //       likes[j + 1] = temp;
  //     }
  //   }
  // }
  
  // console.log(likes);
  // console.log(
  //   `1er lugar: ${likes[0]} | 2do lugar ${likes[1]} | 3do lugar ${
  //     likes[2]
  //   } | ultimo ${likes[likes.length - 1]}`
  // );
  
  //El servicio meteorológico, para llevar el control
  //diario de temperatura, utiliza un
  //objeto temperatura donde registra día —valor numérico del día—
  //, mes —valor
  //numérico—, temperatura máxima y temperatura mínima,
  // correspondiente a dicho
  //día. Las temperaturas —objeto temperatura— están cargados
  // en un array.
  //a) Ordenar por temperatura mínima de menor a mayor.
  //b) Ordenar por temperatura máxima de mayor a menor.
  
  let temperaturas = Array(5).fill("");
  temperaturas = temperaturas.map((i) => {
    return {
      max: randomN(55),
      min: randomN(15),
      dia: randomN(31),
      mes: randomN(12)
    };
  });
  
  // console.log(temperaturas)
  
  // for (let i = 0; i < temperaturas.length; i++) {
  //   for (let j = 0; j < temperaturas.length - 1; j++) {
  //     if (temperaturas[j].min > temperaturas[j + 1].min) {
  //       let temp = temperaturas[j].min;
  //       temperaturas[j].min = temperaturas[j + 1].min;
  //       temperaturas[j + 1].min = temp;
  //     }
  //   }
  // }
  
  // console.table(temperaturas)
  
  for (let i = 0; i < temperaturas.length; i++) {
    for (let j = 0; j < temperaturas.length - 1; j++) {
      if (temperaturas[j].max < temperaturas[j + 1].max) {
        let temp = temperaturas[j].max;
        temperaturas[j].max = temperaturas[j + 1].max;
        temperaturas[j + 1].max = temp;
      }
    }
  }
  
  console.table(temperaturas);
  