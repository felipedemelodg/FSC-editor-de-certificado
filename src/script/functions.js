import { cargaHoraria, cpfAluno, dados, data, imgAssinatura, instrutoresLista, listaErros, nomeAluno, nomeInstrutor, nomeInstrutorEntrada, nomesQualificacoes, nomeTreinamento, nr, promovidoPor, textoComplementar } from "./elements.js";

export function model() {
    nomeAluno.value = 'Fabio Sampaio'
    cpfAluno.value = '00000000000'
    nomeTreinamento.value = 'Gestão em sst'
    data.value = '2024-03-01'
    promovidoPor.value = "FSC segurança do trabalho"
    cargaHoraria.value = '100'
    nr.value = 'NR 35'
    nomeInstrutorEntrada.value = nomeInstrutor
    // instrutoresLista.value = 'Marcos Andre'
    // rgDoInstrutor.value = '111.111.111-1'
    // certificacaoDoInstrutor.value = 'SIBOCIPE 0019/ APEBC B-10096'
    textoComplementar.value = 'participou do Treinamento de Segurança do Trabalho em Altura, em conformidade com a'
    // console.log(nomeInstrutorEntrada.value)
}

export function salvarPdf() {
    const { jsPDF } = window.jspdf;

    // Remova temporariamente o 'scale' da classe 'certificado'
    const certificadoElement = document.querySelector('.certificado');
    certificadoElement.style.transform = 'none';  // Remove o scale temporariamente

    const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4'
    });

    const options = {
        margin: 1,
        filename: nomeAluno.value + '_' + nr.value + '.pdf',
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'landscape' },
        html2canvas: {
            scale: 1.5,  // Ajuste de escala do canvas
            logging: true
        }
    };

    // Gera o PDF
    html2pdf().set(options).from(certificadoElement).save().then(() => {
        // Restaure o 'scale' após salvar o PDF
        certificadoElement.style.transform = 'scale(0.8)';
    });
}





export function verSeEstaVazio(elemento) {
    return !elemento.value
}
export function verSetTemNumeros(elemento) {
    const regex = /\d/
    return regex.test(elemento.value)
}
export function tamanhoDoTexto(elemento, numero) {
    return elemento.value.length < numero
}
export function temLetras(str) {
    return /[a-zA-Z]/.test(str.value.trim());
}

export function cpfMask() {
    cpfAluno.addEventListener('input', function () {
        let value = cpfAluno.value;
        value = value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
        cpfAluno.value = value;
    });
}

// export function rgMasck(){
//     rgDoInstrutor.addEventListener('input', function() {
//         let value = rgDoInstrutor.value;

//         // Remove tudo que não for número
//         value = value.replace(/\D/g, '');

//         // Aplica a máscara
//         if (value.length <= 9) {
//             value = value.replace(/(\d{2})(\d)/, '$1.$2');
//             value = value.replace(/(\d{3})(\d)/, '$1.$2');
//             value = value.replace(/(\d{3})(\d{1})$/, '$1-$2');
//         }

//         rgDoInstrutor.value = value;
//     });
// }

export function tratamentoEspecifico(elemento, letras, numeros, entradaDeErros) {
    if (letras) {
        if (temLetras(elemento)) {
            entradaDeErros.innerHTML = listaErros.contemLetras
            return false
        } else {
            return true
        }
    }
    if (numeros) {
        if (verSetTemNumeros(elemento)) {
            // console.log(entradaDeErros)
            entradaDeErros.innerHTML = listaErros.contemNumeros
            return false
        } else {
            return true
        }
    }
    if (!numeros && !letras) {
        return true
    }
}
export function tratamentoBasico(elemento, entradaDeErros, tamanho) {

    if (verSeEstaVazio(elemento)) {
        entradaDeErros.innerHTML = listaErros.campoVazio
        return false
    } else if (tamanhoDoTexto(elemento, tamanho)) {
        entradaDeErros.innerHTML = listaErros.textoPequeno
        return false
    } else {
        return true
    }
}


export function fabricaDeObjetos(elemento, campoNome, entradaDeErros, tamamho, letras, numeros) {
    return {
        elemento,
        nome: elemento.name,
        campoNome,
        entradaDeErros,
        tamamho,
        letras,
        numeros
    }
}
export function tratar(obj) {
    if (obj.nome === obj.campoNome) {
        if (tratamentoBasico
            (
                obj.elemento,
                obj.entradaDeErros,
                obj.tamamho)
        ) {
            if (tratamentoEspecifico(
                obj.elemento,
                obj.letras,
                obj.numeros,
                obj.entradaDeErros,
            )) {

                obj.entradaDeErros.innerHTML = listaErros.campoCorreto
                return true
            }
        }
    }
}


//função que observa a lista de instrutores
export function atualizaListaInstrutores(campo, lista) {
    const opcaoSelecioanda = lista.value
    const textoSelecionado = lista.options[lista.selectedIndex].text
    if (opcaoSelecioanda === '') {
        campo.textContent = 'nenhum'
    } else {
        campo.textContent = textoSelecionado
    }
    return textoSelecionado
}
export function buscaQualificaoesPorNome(nomeCompleto) {
    const qualificacao = nomesQualificacoes[nomeCompleto]
    return (qualificacao)
}

export function blocoDeDados(nome) {
    if (isRivaldo(nome)) {
        apagarDados()
        carregarQualificacao(nome)
        carregarAssinaturaRivaldo()
    } else if (isLuiz(nome)) {
        apagarDados()
        carregarQualificacao(nome)
        carregarAssinaturaLuiz()
    } else {
        apagarDados()
        carregarQualificacao(nome)
        carregarAssinaturaUmberto()
    }
}
function apagarDados() {
    dados.innerHTML = ''
}
function isRivaldo(nome) {
    return nome === 'Rivaldo Fernandes da Fonseca';
}
function isLuiz(nome) {
    return nome === 'Luiz Alves';
}
function isUmberto(nome) {
    return nome === 'Umberto Alves';
}
function carregarQualificacao(nome) {
    const qualificacao = nomesQualificacoes[nome]
    qualificacao.map((el) => {
        const paragrafo = document.createElement('p')
        paragrafo.innerText = el
        dados.appendChild(paragrafo)
    })

}
function carregarAssinaturaRivaldo() {
    imgAssinatura.style='position:relative;top:40px;overflow:visible';
    imgAssinatura.src = '/img/assinatura-rivaldo-fernandes.webp'
}
function carregarAssinaturaLuiz() {
    imgAssinatura.style='position:relative;top:0px;overflow:visible';
    imgAssinatura.src = '/img/assinatura-luiz-alves.webp'
}
function carregarAssinaturaUmberto() {
    imgAssinatura.style='position:relative;top:0px;overflow:visible';
    imgAssinatura.src = '/img/assinatura-umberto-alves.webp'
}