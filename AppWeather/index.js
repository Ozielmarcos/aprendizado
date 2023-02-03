
let chave = "c800977a0a8d2c756dbb8fdb3e5f4e1e";

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".nomeCidade").innerHTML = 'Tempo em ' + dados.name;
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".nuvens").innerHTML = dados.weather[0].description;
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + cidade + "&appid=" + chave
        + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json());

    colocarNaTela(dados);
}


function clickBtn() {

    let cidade = document.querySelector('input').value;

    buscarCidade(cidade);
}