function mapa(){
    const frutas = new Map();

    frutas.set("Maçã", 500);
    frutas.set("banana", 300);
    frutas.set("laranja", 200);
    
    //let preco = frutas.get("laranja");

    //console.log(frutas.size);

    //size é uma propriedade que armazena o tamanho do mapa
    //console.log(frutas.size)

    //o metodo has() retorna verdadeiro ou falso para uma determinada chave
    //console.log(frutas.has("Maçã"));
    frutas.forEach((valor, chave) => console.log(`${chave} = R$${valor},00`))

    //O método keys() retorna uma coleção comas chaves do mapa
    //A estrutura de repetição for (... x of) inter sobre os valores deuma coleção
    for (const x of frutas.keys()){
        console.log(x)
    }

    //values() é um método que retorna uma coleção contendo todos os valores de um mapa
    for (const x of frutas.values()){
        console.log(x)
    }
}
mapa(); 