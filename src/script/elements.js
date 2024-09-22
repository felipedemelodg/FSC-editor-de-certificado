export const formulario = document.querySelector('#formularioTreinamento');

export const nomeInstrutor = formulario.querySelector('#nomeInstrutor');
export const rgDoInstrutor = formulario.querySelector('#rgDoInstrutor');
export const certificacaoDoInstrutor = formulario.querySelector('#certificacaoDoInstrutor');
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
export const dadosDoInstrutorEntrada = document.querySelector('.dados-do-instrutor')
export const NRsNoTexto = document.querySelector('.NRsNoTexto')

export const nomeDoAlunoNoTexto = document.querySelector('.nome-do-aluno-no-texto')
export const textoComplementar = document.querySelector('#textoComplementar')
export const textoComplementarEntrada = document.querySelector('.textoComplementarEntrada')
export const dataNoTexto = document.querySelector('.dataNoTexto')
export const promovidoProEntrada = document.querySelector('.promovidoProEntrada')
export const cargaHorariaEntrada = document.querySelector('.cargaHorariaEntrada')
export const rgDoIntrutorNoTexto = document.querySelector('.rgDoIntrutorNoTexto')
export const certificacaoDoInstrutorNoTexto = document.querySelector('.certificacaoDoInstrutorNoTexto')
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
export const erroNomeInstrutor = document.querySelector('#erroNomeInstrutor')
export const erroCertificacaoDoInstrutor = document.querySelector('#erroCertificacaoDoInstrutor')
export const erroRgDoInstrutor = document.querySelector('#erroRgDoInstrutor')


export const carregarDados = document.querySelector('#carregarDados')


export const campos = [
    nomeAluno,
    cpfAluno,
    nomeTreinamento,
    textoComplementar,
    data,
    promovidoPor,
    cargaHoraria,
    nr,
    nomeInstrutor,
    rgDoInstrutor,
    certificacaoDoInstrutor,
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
    nomeInstrutorEntrada,
    rgDoIntrutorNoTexto,
    certificacaoDoInstrutorNoTexto,
    NRsNoTexto
]

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
    rgDoInstrutor,
    certificacaoDoInstrutor,
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
        erroNomeInstrutor,
        erroRgDoInstrutor,
        erroCertificacaoDoInstrutor
    ]
export const listaErros = { campoCorreto: '', campoVazio: 'Vazio', textoPequeno: 'texto curto', contemNumeros:'contem numeros',contemLetras:'contem letras' }
