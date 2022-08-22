package presencial;

import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class App {
    private static final Logger logger = Logger.getLogger(App.class);
    private List<Integer> listaEnteros;

    public App() {
        listaEnteros = new ArrayList<>();
    }

    public void agregarEntero(Integer numero) {
        listaEnteros.add(numero);
        if (listaEnteros.size() > 5 && listaEnteros.size() < 11) {
            //usamos el logger
            logger.info("La lista tiene más de 5 elementos. Elementos " +
                    "totales: " + listaEnteros.size());
        }
        if (listaEnteros.size() > 10) {
            //usamos el logger
            logger.info("La lista tiene más de 10 elementos. Elementos " +
                    "totales: " + listaEnteros.size());
        }
    }
        public void calcularPromedio(){
            Integer sumar = 0;
            for (Integer listaEntero : listaEnteros) {
                sumar += listaEntero;
            }
            Integer promedio = sumar / listaEnteros.size();

            logger.info("el promedio de " + listaEnteros.size() + " es igual a" + promedio);
        }

    }

