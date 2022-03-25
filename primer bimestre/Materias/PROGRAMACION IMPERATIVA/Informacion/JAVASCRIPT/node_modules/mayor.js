function mayor2(a, b) {
    return a > b ? a : b;
  }
  function mayor3(a, b, c) {
    return mayor2(mayor2(a, b), c);
  }
  function mayor4(a, b, c, d) {
    return Math.min(Math.min(a, b), Math.min(c, d));
  }
  
  //console.log(mayor2(10, 50));
  ///console.log(mayor3(43, 23, 64));
  //console.log(mayor4(73, 43, 23, 64));
  //console.log(Math.max(74, 43, 23, 64));
  
  const lista = [-34, -56, -32, -5, -23, -65, -25];
  
  function elMayor(array) {
    let maxi = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[maxi]) {
        maxi = i;
      }
    }
    return array[maxi];
  }
  
  function otroMayor(array) {
    let maximo = array[0];
    for (let i = 1; i < array.length; i++) {
      maximo = Math.max(maximo, array[i]);
    }
    return maximo;
  }
  
  console.log(elMayor(lista));
  console.log(otroMayor(lista));
  