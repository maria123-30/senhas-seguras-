const numeroSenha = document. querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuitamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        // tamanhoSenha = tamnahoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if (tamanhoSenha > 20){
        // tamanhoSenha = tamnahoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}


const campoSenha = document.querySelector('#campo-senha'):

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';

campoSenha.value = letrasMaiusculas;
