-- MUESTRA DEL USO DE LIKE
-- BD Spotify
SELECT * FROM cancion WHERE titulo = 'Something'; -- Se busca que el contenido sea igual a 'Something'. Se utiliza al 100% los indices para la comparación (Recomendado). 
SELECT * FROM cancion WHERE titulo LIKE 'Something'; -- Se busca que el contenido sea igual a 'Something'. Recordar: en este caso LIKE no utiliza al 100% los indices para la comparación. 
SELECT * FROM cancion WHERE titulo LIKE 'pa%'; -- Se busca que una oración comience con los caracteres 'pa'.
SELECT * FROM cancion WHERE titulo LIKE '%pe'; -- Se busca que una oración termine con los caracteres 'pe'.
SELECT * FROM cancion WHERE titulo LIKE '%do%'; -- Se busca que una palabra contenga la letra 'do'.
SELECT * FROM cancion WHERE titulo LIKE '%d%e%'; -- Se busca que una palabra contenga la letra 'd' y en otra palabra contenga la letra 'e'.
SELECT * FROM cancion WHERE titulo LIKE 'a__%e'; -- Se busca que una oración comience con la letra 'a' y que termine con la letra 'e'.
SELECT * FROM cancion WHERE titulo LIKE 'p_p_ %'; -- Se busca que una palabra comience con 'p', luego, cualquier caracter, 'p', cualquier caracter y un espacio. Después de esta palabra, lo que venga es admitido.
SELECT * FROM cancion WHERE titulo LIKE '%Don\'%'; -- Se busca que una palabra contenga los caracteres "don'". La contra barra se utiliza para escapar ciertos símbolos 

