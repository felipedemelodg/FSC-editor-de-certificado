import {  baixarPdf, dados, gerarCertificado, imgAssinatura, instrutoresLista, nomesQualificacoes } from "./elements.js";
import { blocoDeDados,  cpfMask, model, salvarPdf, } from "./functions.js";
import { validate } from "./validate.js";


model()
baixarPdf.addEventListener('click', () => { salvarPdf() })
gerarCertificado.addEventListener('click', () => { validate() })

document.addEventListener('DOMContentLoaded', () => { cpfMask() })

