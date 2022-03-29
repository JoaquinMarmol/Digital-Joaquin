SELECT * FROM cliente;


-- WHERE
SELECT * FROM cliente WHERE apellido = 'flores';
SELECT * FROM cliente WHERE apellido != 'flores';


-- LIKE
SELECT * FROM cliente WHERE apellido LIKE 'me%';
SELECT * FROM cliente WHERE apellido LIKE '%a';
SELECT * FROM cliente WHERE apellido LIKE '%a%';

-- LIKE NEGADO
SELECT * FROM cliente WHERE apellido NOT LIKE '%a%';
SELECT * FROM cliente WHERE !(apellido LIKE '%a%');

-- LIMIT & OFFSET
SELECT * FROM cliente LIMIT 3;
SELECT * FROM cliente LIMIT 3 OFFSET 3;


-- ORDER BY
SELECT * FROM cliente ORDER BY apellido ASC;
SELECT * FROM cliente ORDER BY apellido DESC;


--  AND/OR
SELECT * FROM cliente WHERE apellido = 'medina' AND nombre = 'Daniel';
SELECT * FROM cliente WHERE apellido = 'medina' OR nombre = 'Daniel';
SELECT * FROM cliente WHERE (apellido = 'medina' AND nombre LIKE 'Daniel%') OR documento_nro = '110223412';
SELECT * FROM producto WHERE id > 2 AND id <=5;


--  BETWEEN
SELECT * FROM producto WHERE id >= 2 AND id <=5;
SELECT * FROM producto WHERE id BETWEEN 2 AND 5;
SELECT * FROM producto WHERE precio BETWEEN 100.00 AND 195.50;


-- IN
SELECT * FROM cliente WHERE nombre = 'Daniel' OR nombre = 'Pablo' OR nombre = 'Antonio';
SELECT * FROM cliente WHERE nombre IN ('Daniel', 'Pablo', 'Antonio');


-- ALIAS
SELECT id AS codigo_cliente, apellido, nombre FROM cliente;
SELECT c.apellido, c.nombre FROM cliente AS c;