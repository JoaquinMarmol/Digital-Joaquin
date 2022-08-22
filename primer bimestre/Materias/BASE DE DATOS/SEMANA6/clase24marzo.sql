create view clientesResumen as 
select ClienteID ID, Contacto, case
when Fax = "" or Fax is null then concat("TEL", Telefono)
else Fax end Fax
from clientes;
select * from clientesResumen;

select * from clientesResumen
where Fax like "T%";

select * from clientes 
where Fax = "" or Fax is null;

create view datosProveedores as 
select ProveedorID ID, Contacto, Compania, concat (Direccion, ", ", Ciudad, ", " , CodigoPostal, ", " , Pais) DireccionReal
from proveedores;

select * from datosProveedores
where DireccionReal like "%Americanas%Brazil";
select * from proveedores
where Direccion like "%Americanas%";

create view resumenProductos as
select ProductoID ID, ProductoNombre Nombre, PrecioUnitario, UnidadesStock, UnidadesPedidas, case when UnidadesPedidas = 0 then "Baja" when UnidadesPedidas < UnidadesStock then "Media" when UnidadesPedidas <= (UnidadesStock * 2) then "Urgente" when UnidadesPedidas >= (UnidadesStock * 2) then "SuperUrgente" end Prioridad 
from productos;
select Prioridad, UnidadesStock, avg(PrecioUnitario) from resumenProductos
where UnidadesStock >= 5
group by Prioridad;
