const key = "f137acd456dba999e22326a3af2a9d9f";

function colocarDadosNaTela(dados){
    console.log(dados)
}

async function buscarCidade(cidade) {

    const dados = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade) 
}
