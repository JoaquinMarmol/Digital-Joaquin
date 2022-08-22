-- Consignas
-- Clientes
-- 1) ¿Cuántos clientes existen?
SELECT count(ClienteID) From clientes;
-- 2) ¿Cuántos clientes hay por ciudad?
SELECT Ciudad, count(ClienteID) FROM clientes GROUP BY Ciudad;
-- Facturas
-- 1) ¿Cuál es el total de transporte?
SELECT sum(transporte) from facturas;
-- 2) ¿Cuál es el total de transporte por EnvioVia (empresa de envío)?
SELECT NombreEnvio, sum(transporte) from facturas group by EnvioVia;
-- 3) Calcular la cantidad de facturas por cliente. Ordenar descendentemente por
-- cantidad de facturas.
SELECT Compania, count(facturaID) from facturas f join clientes c on f.ClienteID = c.ClienteID group by f.ClienteID order by count(FacturaID) DESC;
-- 4) Obtener el Top 5 de clientes de acuerdo a su cantidad de facturas.
SELECT Compania, count(facturaID) from facturas f join clientes c on f.ClienteID = c.ClienteID group by f.ClienteID order by count(FacturaID) DESC limit 5;
-- 5) ¿Cuál es el país de envío menos frecuente de acuerdo a la cantidad de facturas?
SELECT count(ClienteID), ciudad from facturas group by PaisEnvio ORDER BY count(ClienteID) ASC;
-- 6) Se quiere otorgar un bono al empleado con más ventas. ¿Qué ID de empleado
-- realizó más operaciones de ventas?
select EmpleadoID, count(EmpleadoID) from facturas group by EmpleadoID order by count(EmpleadoID) desc;

-- Factura detalle
-- 1) ¿Cuál es el producto que aparece en más líneas de la tabla Factura Detalle?
SELECT ProductoNombre from productos p join facturasdetalle fd on p.ProductoID = fd.ProductoID group by count(ProductoID) order by ProductoID ASC; 
-- 2) ¿Cuál es el total facturado? Considerar que el total facturado es la suma de
-- cantidad por precio unitario.
SELECT
-- 3) ¿Cuál es el total facturado para los productos ID entre 30 y 50?
SELECT
-- 4) ¿Cuál es el precio unitario promedio de cada producto?
SELECT
-- 5) ¿Cuál es el precio unitario máximo?
SELECT

