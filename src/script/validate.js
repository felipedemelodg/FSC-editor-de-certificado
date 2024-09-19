import { campos, entradas, erroCpfAluno, erroNomeAluno, erroNomeTreinamento, errosEntrada, listaErros, textoComplementar, valores } from "./elements.js";
import { tamanhoDoTexto, temLetras, tratamentoBasico, tratamentoEspecifico, verSeEstaVazio, verSetTemNumeros } from "./functions.js";
import { elementosTradados, tratarCargaHoraria, tratarCertificacaoDoInstrutor, tratarCPFDoAluno, tratarData, tratarNomeDoAluno, tratarNomeInstrutor, tratarNRs, tratarPromovidoPor, tratarRgInstrutor, tratarTextoComplementar, tratarTreinamento } from "./tratamentos.js";




export function validate() {
    elementosTradados.forEach(element => {
        if(element() === true){
            gerarCertificado()
        }

    });
}



function gerarCertificado() {
    entradas.forEach((el, i, entrada) => {
        const arr = valores[5].value.split('-')
        const arrPosicoes = [arr[0], arr[1], arr[2]] = [arr[2], arr[1], arr[0]]
        const arrComBarras = arrPosicoes.join().replace(/,/g, '/')

        entrada[1].innerHTML = 'CPF: ' + valores[1].value
        entrada[5].innerHTML = arrComBarras
        entrada[i].innerHTML = valores[i].value
    })
}

