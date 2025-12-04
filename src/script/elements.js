import { atualizaListaInstrutores } from "./functions.js";

export const formulario = document.querySelector('#formularioTreinamento');

export const instrutoresLista = formulario.querySelector('#instrutoresLista');

// console.log(nomeInstrutor.select.value)
// export const rgDoInstrutor = formulario.querySelector('#rgDoInstrutor');
// export const certificacaoDoInstrutor = formulario.querySelector('#certificacaoDoInstrutor');
export const nomeInstrutor = instrutoresLista.options[instrutoresLista.selectedIndex].text

export const nomeAluno = formulario.querySelector('#nomeAluno');
export const cpfAluno = formulario.querySelector('#cpfAluno');
export const nomeTreinamento = formulario.querySelector('#nomeTreinamento');
export const data = formulario.querySelector('#data');

export const promovidoPor = formulario.querySelector('#promovidoPor');
export const cargaHoraria = formulario.querySelector('#cargaHoraria');
export const nr = formulario.querySelector('#nr');

export const gerarCertificado = formulario.querySelector('#gerarCertificado')

export const NRsEntrada = document.querySelector('.NRs')
export const nomeDoAlunoEntrada = document.querySelector('.nome-do-aluno')
export const cpfDoAlunoEntrada = document.querySelector('.cpf-do-aluno')


export const nomeInstrutorEntrada = document.querySelector('.nome-do-instrutor')


// export const dadosDoInstrutorEntrada = document.querySelector('.dados-do-instrutor')
export const NRsNoTexto = document.querySelector('.NRsNoTexto')

export const nomeDoAlunoNoTexto = document.querySelector('.nome-do-aluno-no-texto')
export const textoComplementar = document.querySelector('#textoComplementar')
export const textoComplementarEntrada = document.querySelector('.textoComplementarEntrada')
export const dataNoTexto = document.querySelector('.dataNoTexto')
export const promovidoProEntrada = document.querySelector('.promovidoProEntrada')
export const cargaHorariaEntrada = document.querySelector('.cargaHorariaEntrada')
// export const rgDoIntrutorNoTexto = document.querySelector('.rgDoIntrutorNoTexto')
// export const certificacaoDoInstrutorNoTexto = document.querySelector('.certificacaoDoInstrutorNoTexto')
export const baixarPdf = document.querySelector('#baixarPdf')
export const certificado = document.querySelector('#certificado')

export const erroNomeAluno = document.querySelector('#erroNomeAluno')
export const erroCpfAluno = document.querySelector('#erroCpfAluno')
export const erroNomeTreinamento = document.querySelector('#erroNomeTreinamento')
export const errotextoComplementar = document.querySelector('#errotextoComplementar')
export const erroData = document.querySelector('#erroData')
export const erroPromovidoPor = document.querySelector('#erroPromovidoPor')
export const erroCargaHoraria = document.querySelector('#erroCargaHoraria')
export const erroNr = document.querySelector('#erroNr')
// export const erroNomeInstrutor = document.querySelector('#erroNomeInstrutor')
// export const erroCertificacaoDoInstrutor = document.querySelector('#erroCertificacaoDoInstrutor')
// export const erroRgDoInstrutor = document.querySelector('#erroRgDoInstrutor')

export const imgAssinatura = document.querySelector('.imgAssinatura')
export const carregarDados = document.querySelector('#carregarDados')
export const dados = document.querySelector('.dados')

// const nomesInstrutores = ['Rivaldo Fernandes da Fonseca', 'Luiz Alves', 'Umberto Alves']
export const nomesQualificacoes = {
    'Rivaldo Fernandes da Fonseca': ["Téc.Seg.Trabalho 0011122/PE", "Enfermeiro - 676199", "Alpinista Industrial N1 355"],
    'Luiz Alves': ["Técnico em Eletrotécnica", "RNP CFT Nº 02122860480"],
    'Umberto Alves': ["SIBOCIPE 0019/ APEBC B-10046"]
}



export const campos = [
    nomeAluno,
    cpfAluno,
    nomeTreinamento,
    textoComplementar,
    data,
    promovidoPor,
    cargaHoraria,
    nr,
    instrutoresLista,
    // rgDoInstrutor,
    // certificacaoDoInstrutor,
]
export const entradas = [
    nomeDoAlunoEntrada,
    cpfDoAlunoEntrada,
    nomeDoAlunoNoTexto,
    textoComplementarEntrada,
    NRsEntrada,
    dataNoTexto,
    promovidoProEntrada,
    cargaHorariaEntrada,
    // rgDoIntrutorNoTexto,
    // certificacaoDoInstrutorNoTexto,
    nomeInstrutorEntrada,
    NRsNoTexto,
]
// console.log(entradas)

export const valores = [
    nomeAluno,
    cpfAluno,
    nomeAluno,
    textoComplementar,
    nr,
    data,
    promovidoPor,
    cargaHoraria,
    nomeInstrutor,
    // rgDoInstrutor,
    // certificacaoDoInstrutor,
    nr

]


export const errosEntrada =
    [
        erroNomeAluno,
        erroCpfAluno,
        erroNomeTreinamento,
        errotextoComplementar,
        erroData,
        erroPromovidoPor,
        erroCargaHoraria,
        erroNr,
        // erroNomeInstrutor,
        // erroRgDoInstrutor,
        // erroCertificacaoDoInstrutor
    ]
export const listaErros = { campoCorreto: '', campoVazio: 'Vazio', textoPequeno: 'texto curto', contemNumeros: 'contem numeros', contemLetras: 'contem letras' }
