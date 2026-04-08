function arranjo(){
    let turma = ["Alessandra", "Alexandre", "Allan", "Ana"];
    console.log(turma)

    const frutas = [];

    frutas[1] = "banana"
    frutas[0] = "laranja"
    frutas[2] = "maçã"

    console.log(frutas);

    for( i = 0; i < frutas.length; i++){
        console.log(i + " " + frutas[i]);
    }
     for( i = 0; i < turma.length; i++){
        console.log(i + " " + turma[i]);
    }

    
}
arranjo();