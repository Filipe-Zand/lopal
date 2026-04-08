function conjunto(){
    const letras = new Set();
    letras.add("a");
    letras.add("b");
    letras.add("c");

    //delete() é um método para remover um elemento do conjunto
    letras.delete("c")
    console.log(letras);

    //como no conjunto a chave é igual ao valor, os métodos

    for (const x of letras.keys()){
        console.log(x)
    }
}
conjunto();