-- 1. Listar las canciones cuya duración sea mayor a 2 minutos.
SELECT * FROM CANCIONES WHERE MILISEGUNDOS / 1000 / 60 > 2;
-- 2. Listar las canciones cuyo nombre comience con una vocal.
SELECT * FROM CANCIONES WHERE NOMBRE LIKE "a%" OR NOMBRE LIKE"e%" OR NOMBRE LIKE"i%" OR NOMBRE LIKE"o%" OR NOMBRE LIKE"u%";
-- 3. Listar las canciones ordenadas por compositor en forma descendente.
-- Luego, por nombre en forma ascendente. Incluir únicamente aquellas
-- canciones que tengan compositor.
SELECT * FROM CANCIONES WHERE COMPOSITOR IS NOT NULL ORDER BY COMPOSITOR DESC;
SELECT * FROM CANCIONES WHERE COMPOSITOR IS NOT NULL ORDER BY NOMBRE ASC;
-- 4. a) Listar la cantidad de canciones de cada compositor.
SELECT COUNT(*), COMPOSITOR FROM CANCIONES GROUP BY COMPOSITOR;
-- b) Modificar la consulta para incluir únicamente los compositores que
-- tengan más de 10 canciones.
SELECT COUNT(*), COMPOSITOR FROM CANCIONES GROUP BY COMPOSITOR HAVING COUNT(*) > 10;
-- 5. a) Listar el total facturado agrupado por ciudad.
SELECT SUM(TOTAL), CIUDAD_DE_FACTURACION FROM FACTURAS GROUP BY CIUDAD_DE_FACTURACION;
-- b) Modificar el listado del punto (a) mostrando únicamente las ciudades
-- de Canadá.
SELECT SUM(TOTAL), CIUDAD_DE_FACTURACION, PAIS_DE_FACTURACION 
FROM FACTURAS GROUP BY CIUDAD_DE_FACTURACION 
HAVING PAIS_DE_FACTURACION = 'canada';
-- c) Modificar el listado del punto (a) mostrando únicamente las ciudades
-- con una facturación mayor a 38.
SELECT SUM(TOTAL) AS `Total Facturado`, CIUDAD_DE_FACTURACION FROM FACTURAS 
GROUP BY CIUDAD_DE_FACTURACION 
HAVING `Total Facturado` > 38;
-- d) Modificar el listado del punto (a) agrupando la facturación por país, y
-- luego por ciudad.
SELECT SUM(TOTAL), CIUDAD_DE_FACTURACION, PAIS_DE_FACTURACION FROM FACTURAS GROUP BY CIUDAD_DE_FACTURACION;
SELECT SUM(TOTAL), PAIS_DE_FACTURACION FROM FACTURAS GROUP BY PAIS_DE_FACTURACION;
-- 6. a) Listar la duración mínima, máxima y promedio de las canciones.
SELECT MIN(MILISEGUNDOS), MAX(MILISEGUNDOS), AVG(MILISEGUNDOS) FROM CANCIONES;
-- b) Modificar el punto (a) mostrando la información agrupada por género.
SELECT GENEROS.NOMBRE AS GENERO, MIN(MILISEGUNDOS), MAX(MILISEGUNDOS), AVG(MILISEGUNDOS)
FROM CANCIONES 
JOIN GENEROS
ON ID_GENERO = GENEROS.ID
GROUP BY ID_GENERO;




