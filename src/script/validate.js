import { entradas, valores } from "./elements.js";
import { elementosTradados } from "./tratamentos.js";




export function validate() {
    elementosTradados.forEach(element => {
        if (element() === true) {
            gerarCertificado()
        }

    });
}



function gerarCertificado() {
    entradas.forEach((el, i, entrada) => {
        const arr = valores[5].value.split('-')
        const arrPosicoes = [arr[0], arr[1], arr[2]] = [arr[2], arr[1], arr[0]]
        const arrComBarras = arrPosicoes.join().replace(/,/g, '/')
        entrada[9].innerHTML = 'RG: ' + valores[9].value
        entrada[1].innerHTML = 'CPF: ' + valores[1].value
        entrada[5].innerHTML = arrComBarras
        entrada[i].innerHTML = valores[i].value
    })
}

