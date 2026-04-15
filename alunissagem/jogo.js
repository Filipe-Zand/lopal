// Jogo da alunissagem
// Filipe
// 08/04/2026
//Versão 0.1.0

/** @type {HTMLCanvasElement} */

let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

let moduloLunar = {
    posicao: {
        x: 800,
        y: 100
    },
    angulo: Math.PI/2,
    largura: 20,
    altura: 20,
    cor: "lightgray",
    velocidade:{
        x: -2,
        y: 0
    },
    motorLigado: false,
    combustivel: 1000,
    rotacaoAntiHorario: false,
    rotacaoHorario: false
}

function mostrarVelocidadeVertical(){
    contexto.font = "hold 18px Arial";
    contexto.textAlign = "left";
    contexto.textBaseLine = "middle";
    contexto.fillStyle = "lightgreen";
    contexto.fillText(
        `Velocidade Vertical: ${(10 * moduloLunar.velocidade.y).toFixed(2)}`,
        50,
        60
    );
}
function mostrarVelocidadeHorizontal(){
    contexto.font = "hold 18px Arial";
    contexto.textAlign = "left";
    contexto.textBaseLine = "middle";
    contexto.fillStyle = "lightgreen";
    contexto.fillText(
        `Velocidade Horizontal: ${(10 * moduloLunar.velocidade.x).toFixed(2)}`,
        50,
        40
    );
}
function mostrarCombustivel(){
    contexto.font = "hold 18px Arial";
    contexto.textAlign = "left";
    contexto.textBaseLine = "middle";
    contexto.fillStyle = "lightgreen";
    contexto.fillText(
        `Combustível: ${(moduloLunar.combustivel / 10).toFixed(0)} %`,
        50,
        80
    );
}

function desenharFundo(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.save();
    contexto.fillStyle = "#000";
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    contexto.restore();
}

function desenharModuloLunar(){
    contexto.save();
    contexto.beginPath();
    contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y)
    contexto.rotate(moduloLunar.angulo);
    contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5,
    moduloLunar.largura, moduloLunar.altura);
    contexto.fillStyle = "lightgray"
    contexto.fill();
    contexto.closePath();

    if(moduloLunar.motorLigado){
        desenharChama();
        moduloLunar.combustivel--;
        if(moduloLunar.combustivel <= 0){
            moduloLunar.motorLigado = false
        }
       
    }
    contexto.restore();
}

function desenharChama(){
    contexto.beginPath();
    contexto.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 0.5);
    //determinar o tamanho das chamas
    contexto.lineTo(0, moduloLunar.altura * 0.5 + Math.random() * 35);
    contexto.closePath();
    contexto.fillStyle = "orange";
    contexto.fill();
 
}

function desenhar(){
   
    atracaoGravitacional();
    desenharFundo();
    desenharModuloLunar();
    mostrarVelocidadeVertical();
    mostrarVelocidadeHorizontal();
    mostrarCombustivel();

    if(moduloLunar.posicao.y > canvas.height - moduloLunar.altura * 0.5){
        if(moduloLunar.velocidade.y <= 0.5 &&
            moduloLunar.velocidade.x <= 0.5 &&
            moduloLunar.angulo <= 5){
            mostrarResultado("Você pousou com sucesso", cor = "green");
        } else {
            mostrarResultado("Você impactou o solo", cor = "red")
        }
        return
    }
    requestAnimationFrame(desenhar);
}

function mostrarResultado(mensagem, cor){
    contexto.font = "hold 400px Calibri";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.fillStyle = cor;
    contexto.fillText (mensagem, canvas.width * 0.5, canvas.height * 0.5)
}

document.addEventListener('keydown', teclaPressionada);

function teclaPressionada(evento){
    if(evento.key == "ArrowUp" && moduloLunar.combustivel > 0){
        moduloLunar.motorLigado = true;
    } else if(evento.key == "ArrowRight"){
        moduloLunar.rotacaoHorario = true;
    } else if(evento.key == "ArrowLeft"){
        moduloLunar.rotacaoAntiHorario = true;
    }
}

document.addEventListener('keyup', teclaSolta)

function teclaSolta(evento){
    if(evento.key == "ArrowUp"){
        moduloLunar.motorLigado = false;
    }else if(evento.key == "ArrowRight"){
        moduloLunar.rotacaoHorario = false;
    } else if(evento.key == "ArrowLeft"){
        moduloLunar.rotacaoAntiHorario = false;
    }
}

const gravidade = 0.01;
function atracaoGravitacional(){

    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;
    moduloLunar.velocidade.y +=gravidade;

    if(moduloLunar.rotacaoAntiHorario){
        moduloLunar.angulo += Math.PI/180
    } else if(moduloLunar.rotacaoHorario){
        moduloLunar.angulo -= Math.PI/180
    }

    if(moduloLunar.motorLigado){
        moduloLunar.velocidade.y -= 0.0121 * Math.cos(moduloLunar.angulo);
        moduloLunar.velocidade.x += 0.0121 * Math.sin(moduloLunar.angulo);
    }
}

desenhar();
