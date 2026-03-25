import java.util.Scanner;
public class Main {
    public static void main (String [] args){

        tamagoshi tamagoshi = new tamagoshi("Jean grey", 50, 30, 100);
        tamagoshi tamagoshi2 = new tamagoshi("Ororo", 10, 31, 100);

        tamagoshi.setNome("Wanda");
        tamagoshi.setIdade(24);
        tamagoshi.setFome(10);
        tamagoshi.setSaude(100);

        tamagoshi.getAtributos();
        tamagoshi2.getAtributos();

    }

}

