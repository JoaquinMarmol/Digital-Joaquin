package mesas.dao;

import java.util.List;

public interface IDao <T> {

    T guardar(T t);
    T buscar(Integer id);
    List<T> buscarTodos();
    T modificar(T t);
    void eliminar(Integer id);



}
