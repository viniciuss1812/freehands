public class tamagoshi {
    String nome;
    int fome;
    int saude;
    int idade;
    public tamagoshi(String nome, int fome, int idade, int saude){
        this.nome = nome;
        this.fome = fome;
        this.idade = idade;
        this.saude = saude;
    }

    public String getNome(){
        return nome;
    }
    public int getSaude(){
        return saude;
    }
    public int getIdade(){return idade;}
    public int getFome(){
        return fome;
    }
    public void getAtributos (){
        System.out.println("Nome:"+nome +" Idade:" +idade+ " Saúde:" +saude+ " Fome:" +fome);
    }

    public String setNome(String nome){
        this.nome = nome;
        return nome;
    }
    public int setSaude(int saude){
        this.saude = saude;
        return saude;
    }
    public int setIdade(int idade){
        this.idade = idade;
        return idade;
    }
    public int setFome(int fome){
        this.fome = fome;
        return fome;
    }


}

