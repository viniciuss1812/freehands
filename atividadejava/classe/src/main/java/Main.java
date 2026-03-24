import java.util.Scanner;
public class Main {
    public static void main (String [] args){

        tamagoshi tamagoshi = new tamagoshi();
        String teste = tamagoshi.getNome();

        System.out.println( "Nome do tamagoshi:" +teste );
        System.out.println("Deseja alterar o nome do tamagoshi?");
        Scanner scanner = new Scanner();

        System.out.print("Digite seu nome: ");
        String nome = scanner.nextLine(); //

    }

}
