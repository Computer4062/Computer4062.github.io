import java.io.*;

public class Main{
    public static void main(String[] args){
        try{
            Runtime rt  = Runtime.getRuntime();
            rt.exec("cmd.exe /c start npm run devstart");
        }catch(IOException e){
            System.out.println("something went wrong");
        }
    }
}