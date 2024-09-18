import { cargaHoraria, cargaHorariaEntrada, certificacaoDoInstrutor, certificacaoDoInstrutorNoTexto, cpfAluno, cpfDoAlunoEntrada, data, dataNoTexto, nomeAluno, nomeDoAlunoEntrada, nomeDoAlunoNoTexto, nomeInstrutor, nomeInstrutorEntrada, nomeTreinamento, nr, NRsEntrada, NRsNoTexto, promovidoPor, promovidoProEntrada, rgDoInstrutor, rgDoIntrutorNoTexto, textoComplementar, textoComplementarEntrada } from "./elements.js";

export function model() {
    nomeAluno.value = 'Felipe Alex Souza de Melo'
    cpfAluno.value = '000.000.000.00'
    nomeTreinamento.value = 'Gestão em sst'
    data.value = '2024-03-01'
    promovidoPor.value = "FSC segurança do trabalho"
    cargaHoraria.value = '100'
    nr.value = 'NR 35'
    nomeInstrutor.value = 'Marcos Andre'
    rgDoInstrutor.value = '0000-000'
    certificacaoDoInstrutor.value = 'SIBOCIPE 0019/ APEBC B-10096'

    textoComplementar.value = 'participou do Treinamento de Segurança do Trabalho em Altura, em conformidade com a'

    nomeDoAlunoEntrada.innerHTML = nomeAluno.value
    cpfDoAlunoEntrada.innerHTML = 'CPF ' + cpfAluno.value
    nomeDoAlunoNoTexto.innerHTML = nomeAluno.value
    textoComplementarEntrada.innerHTML = textoComplementar.value
    NRsEntrada.innerHTML = nr.value
    NRsNoTexto.innerHTML = nr.value
    dataNoTexto.innerHTML = data.value.split().join().replace(/-/g, '/')
    promovidoProEntrada.innerHTML = promovidoPor.value
    cargaHorariaEntrada.innerHTML = cargaHoraria.value
    nomeInstrutorEntrada.innerHTML = nomeInstrutor.value
    rgDoIntrutorNoTexto.innerHTML = rgDoInstrutor.value
    certificacaoDoInstrutorNoTexto.innerHTML = certificacaoDoInstrutor.value
}


export function gerarCertificado(){
    
}

export function salvarPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4'
    });


    html2pdf().from(certificado).set({
        margin: 0,
        filename: 'certificado.pdf',
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'landscape' }
    }).save();
}