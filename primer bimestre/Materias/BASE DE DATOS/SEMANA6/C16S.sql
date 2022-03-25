/* Reportes parte I - Repasamos INNER JOIN
Realizar una consulta de la facturación de e-market. Incluir la siguiente información:
● Id de la factura
● fecha de la factura
● nombre de la empresa de correo
● nombre del cliente
● categoría del producto vendido
● nombre del producto
● precio unitario
● cantidad */
SELECT F.FacturaID, F.FechaFactura, Cor.Compania, Cli.Contacto, Ca.CategoriaNombre, P.ProductoNombre, P.PrecioUnitario, FD.Cantidad FROM Facturas F
JOIN Correos Cor ON F.EnvioVia = Cor.CorreoID
JOIN Clientes Cli ON F.ClienteID = Cli.ClienteID
JOIN FacturaDetalle FD ON F.FacturaID = FD.FacturaID
JOIN Productos P ON FD.ProductoID = P.ProductoID
JOIN Categorias Ca ON P.CategoriaID = Ca.CategoriaID;



/* Reportes parte II - INNER, LEFT Y RIGHT JOIN */

/* 1. Listar todas las categorías junto con información de sus productos. Incluir todas
las categorías aunque no tengan productos. */
SELECT * FROM Categorias C
LEFT JOIN Productos P ON C.CategoriaID = P.CategoriaID;


/* 2. Listar la información de contacto de los clientes que no hayan comprado nunca
en emarket. */
SELECT Contacto FROM Clientes C
LEFT JOIN Facturas F ON C.ClienteID = F.ClienteID
WHERE F.FacturaID IS NULL;

/* 3. Realizar un listado de productos. Para cada uno indicar su nombre, categoría, y
la información de contacto de su proveedor. Tener en cuenta que puede haber
productos para los cuales no se indicó quién es el proveedor. */


/* 4. Para cada categoría listar el promedio del precio unitario de sus productos. */


/* 5. Para cada cliente, indicar la última factura de compra. Incluir a los clientes que
nunca hayan comprado en e-market. */


/* 6. Todas las facturas tienen una empresa de correo asociada (enviovia). Generar un
listado con todas las empresas de correo, y la cantidad de facturas
correspondientes. Realizar la consulta utilizando RIGHT JOIN. */