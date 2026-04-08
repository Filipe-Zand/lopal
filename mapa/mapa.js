function mapa(){
    const frutas = new Map();

    frutas.set("Maçã", 500);
    frutas.set("banana", 300);
    frutas.set("laranja", 200);
    
    let preco = frutas.get("banana");

    console.log(preco);

}
mapa();