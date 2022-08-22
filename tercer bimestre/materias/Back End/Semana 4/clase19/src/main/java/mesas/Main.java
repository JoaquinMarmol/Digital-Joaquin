package mesas;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // preparar nuestra colección de contactos
        List<Contacto> contactos= new ArrayList<>();
        contactos.add(new Contacto("Segu Del Litto","segudellitto@gmail.com", 732424872));
        contactos.add(new Contacto("Sergio Regalado","sergioregalado@gmail.com", 549117682));
        contactos.add(new Contacto("Joquin Marmol","joaquinmarmol@gmail.com", 549124356));
        contactos.add(new Contacto("Gonzalo Regalado","gonzaregalado@gmail.com", 439167683));
        contactos.add(new Contacto("Nacho Mosca","nachomosca@gmail.com", 543427023));
        contactos.add(new Contacto("Clara lopez","claralopez@gmail.com", 549447688));
        contactos.add(new Contacto("Serafin Quesada","serafindelfin@gmail.com", 541174323));
        // guardar la colección de contactos en un archivo
        try{
            FileOutputStream fos= new FileOutputStream("OutputFile.txt");
            ObjectOutputStream oos= new ObjectOutputStream(fos);
            oos.writeObject(contactos);
            oos.close();
        }
        catch (Exception exception){
            exception.printStackTrace();
        }
        // vamos a recuperar la colección del archivo a una nueva colección
        List<Contacto> contactosRecuperados=null;
        try{
            FileInputStream fis= new FileInputStream("OutputFile.txt");
            ObjectInputStream ois= new ObjectInputStream(fis);
            contactosRecuperados=(ArrayList)ois.readObject();
            ois.close();
        }
        catch (Exception e){
            e.printStackTrace();
        }
        //mostrando la información recuperada
        for (Contacto contacto:contactosRecuperados) {
            System.out.println(contacto.toString());
        }
    }
}