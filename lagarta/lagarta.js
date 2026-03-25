async function lagarta(){
    let lagarta = "(),(),(),(),(ô_ô)";
    let espaco = " ";

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }

    let estender = "(_),(_),(_),(_),(ô_ô)"

    for(let i = 0; i < 30; i++){
        lagarta = espaco + lagarta;
        estender = espaco + estender;
        console.log(i % 2 == 0? lagarta = espaco + lagarta:
             estender = espaco + estender);
        await sleep (700)
        console.clear();
        
    }
}