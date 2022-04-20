const edades = [33, 27, 34, 30, 34, 25];

function ordenar(edades){
    let enOrden = edades
    for(let i=0;i<enOrden.length;i++){
        console.log(enOrden);
        for (let j= 0 ; j<enOrden.length - 1 ;j++){
            if (enOrden[j]>enOrden[j+1]){
                let temp = enOrden[j];
                console.log(" vuelta " + [i] +" Para j"+ [j] +", temp es : " + temp);
                enOrden[j] = enOrden[j+1];
                console.log(" vuelta " + [i] +" Para j"+ [j] +", posicion" + [j]+ " es : " + enOrden[j]);
                enOrden[j+1] = temp;
                console.log(" vuelta " + [i] +" Para j"+ [j] +", posicion " + [j+1] + " es : " + enOrden[j+1]);
            }
        }
    }
    return enOrden;
}

console.log(ordenar(edades))