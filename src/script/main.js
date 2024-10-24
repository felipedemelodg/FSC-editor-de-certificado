import { baixarPdf,  cpfAluno, data, dataNoTexto, erroNomeInstrutor, gerarCertificado, nomeAluno, nomeInstrutor, nr } from "./elements.js";
import { cpfMask, model, rgMasck, salvarPdf, tamanhoDoTexto, verSeEstaVazio, verSetTemNumeros } from "./functions.js";
import { validate } from "./validate.js";

model()
baixarPdf.addEventListener('click',()=>{salvarPdf()})
gerarCertificado.addEventListener('click',()=>{validate()})
// carregarDados.addEventListener('click',()=>{model()})

document.addEventListener('DOMContentLoaded', ()=>{cpfMask()})
document.addEventListener('DOMContentLoaded', ()=>{rgMasck()})

// console.log(nr)