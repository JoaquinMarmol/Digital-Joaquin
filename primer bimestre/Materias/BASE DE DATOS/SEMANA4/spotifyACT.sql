-- 1. Listar las canciones que poseen la letra “z” en su título.
SELECT titulo FROM cancion  WHERE
titulo LIKE '%z%';
-- 2. Listar las canciones que poseen como segundo carácter la letra “a” y como último, la letra “s”.
SELECT titulo from cancion WHERE 
titulo LIKE '_a%s';
-- 3. Mostrar la playlist que tiene más canciones, renombrando las columnas poniendo mayúsculas en la primera letra, los tildes correspondientes y agregar
-- los espacios entre palabras.
SELECT titulo as Título, cantcanciones AS CantCanciones FROM playlist ORDER BY
cantcanciones DESC LIMIT 1;
-- 4. En otro momento se obtuvo un listado con los 5 usuarios más jóvenes, obtener un listado de los 10 siguientes.
SELECT * FROM usuario 
ORDER BY fecha_nac DESC LIMIT 10 OFFSET 5;
-- 5. Listar las 5 canciones con más reproducciones, ordenadas descendentemente.
SELECT * FROM cancion 
ORDER BY cantreproduccion DESC LIMIT 5;
-- 6. Generar un reporte de todos los álbumes ordenados alfabéticamente.
SELECT * FROM album 
ORDER BY titulo;
-- 7. Listar todos los álbumes que no tengan imagen, ordenados alfabéticamente
SELECT * FROM album WHERE imagenportada
IS null ORDER BY titulo;
-- 8. Insertar un usuario nuevo con los siguientes datos (tener en cuenta las relaciones):
-- a. nombreusuario: nuevousuariodespotify@gmail.com
-- b. Nombre y apellido: Elmer Gomez
-- c. password: S4321m
-- d. Fecha de nacimiento: 15/11/1991
-- e. Sexo: Masculino
-- f. Código Postal: B4129ATF
-- g. País: Colombia
 INSERT INTO usuario (idUsuario,nombreusuario, nyap, fecha_nac, sexo , CP, password, Pais_idPais) 
 VALUES ('default','nuevousuariodespotify@gmail.com', 'Elmer Gomez' , '1991/11/15' , 'M', 'B4129ATF', 'S4321m' , '2');
