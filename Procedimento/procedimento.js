function procedimento(){


    function inicio(){
        mensagem(frase = "O resultadode a² + b² é: " + calcular(a = 3, b = 4));
        
    }

    function mensagem(frase){
        let linha = "-";
        let i = 0;


        do{
            linha = linha + "-"
            i++;
        }while( i < 50);
        
        alert( linha + "\n" + frase + "\n" + linha)
    }

    function calcular (a, b){
       return a * a + b * b;
    }

    inicio();
}