
let colecao_signos = [
    { nome: 'Aquário', dataInicio: '01/20', dataFim: '02/18' },
    { nome: 'Peixes', dataInicio: '02/19', dataFim: '03/20' },
    { nome: 'Áries', dataInicio: '03/21', dataFim: '04/19' },
    { nome: 'Touro', dataInicio: '04/20', dataFim: '05/20' },
    { nome: 'Gêmeos', dataInicio: '05/21', dataFim: '06/21' },
    { nome: 'Câncer', dataInicio: '06/22', dataFim: '07/23' },
    { nome: 'Leão', dataInicio: '07/24', dataFim: '08/22' },
    { nome: 'Virgem', dataInicio: '08/23', dataFim: '09/22' },
    { nome: 'Libra', dataInicio: '09/23', dataFim: '10/22' },
    { nome: 'Escorpião', dataInicio: '10/23', dataFim: '11/21' },
    { nome: 'Sagitário', dataInicio: '11/22', dataFim: '12/21' },
    { nome: 'Capricórnio', dataInicio: '12/22', dataFim: '01/19' }
]

const retornaSignos = (signos, inputData) => {

    inputData = document.getElementById('recebe-data');
    let ano = inputData.getFullYear();

    for (let signo of signos) {

        let data_inicio_signo = new Date(ano + '-' + signo.dataInicio);
        let data_fim_signo = new Date(ano + '-' + signo.dataFim);

        if (data >= data_inicio_signo && data <= data_fim_signo) {
            return signo.nome;
        }
    }
}

const btn = document.getElementById('btn1');
const btn1 = document.getElementById('btn2');
const box1 = document.getElementById('requisicao');
const box2 = document.getElementById('box-card');
const inputData = document.getElementById('recebe-data');


btn.addEventListener('click', event => {

    box1.classList.toggle('ativa');
    box2.classList.toggle('ativa');
})

btn1.addEventListener('click', event => {
    box1.classList.toggle('ativa');
    box2.classList.toggle('ativa');

})


//let data_app = document.getElementById('recebe-data');
let data_app = inputData;
const nome_signo = retornaSignos(colecao_signos, data_app);

//console.log('Signo: ' + nome_signo);
let retornoSigno = nome_signo;
console.log(retornoSigno);
/*function trocaImagem(retornoSigno) {

    switch (retornoSigno) {
        case 'Aquário':
            document.getElementById('signo').innerHTML = retornoSigno;
            document.getElementById('img-signo').src = './assets/Aquario.jpg';
            document.getElementsByClassName('requisicao').style.visibility = hidden;
            break;

        case 'Peixes':
            document.getElementById('signo').innerHTML = retornoSigno;
            document.getElementById('img-signo').src = './assets/peixes.jpg';
            break;

    }

}

let resultado = trocaImagem();
console.log(resultado);
*/
