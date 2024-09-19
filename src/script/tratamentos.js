import { cargaHoraria, certificacaoDoInstrutor, cpfAluno, data, erroCargaHoraria, erroCertificacaoDoInstrutor, erroCpfAluno, erroData, erroNomeAluno, erroNomeInstrutor, erroNomeTreinamento, erroNr, erroPromovidoPor, erroRgDoInstrutor, errotextoComplementar, listaErros, nomeAluno, nomeInstrutor, nomeTreinamento, nr, promovidoPor, rgDoInstrutor, textoComplementar } from "./elements.js"
import { fabricaDeObjetos, tratamentoBasico, tratamentoEspecifico, tratar } from "./functions.js"


const objNomeDoAluno = fabricaDeObjetos(nomeAluno, 'nomeAluno', erroNomeAluno, 3, false, true)

const objCPFDoAluno = fabricaDeObjetos(cpfAluno, 'cpfAluno', erroCpfAluno, 11, true, false)

const objTreinamento = fabricaDeObjetos(nomeTreinamento, 'nomeTreinamento', erroNomeTreinamento, 5, false, true)

const objTextoComplementar = fabricaDeObjetos(textoComplementar, 'textoComplementar', errotextoComplementar, 5, false, false)

const objTratarDatar = fabricaDeObjetos(data, 'data', erroData, 5, false, false)
const objPromovidoPor = fabricaDeObjetos(promovidoPor, 'promovidoPor', erroPromovidoPor, 5, false, false)

const objCargaHoraria = fabricaDeObjetos(cargaHoraria, 'cargaHoraria', erroCargaHoraria, 0, false, false)

const objNRs = fabricaDeObjetos(nr, 'nr', erroNr, 3, false, false)

const objNomeInstrutor = fabricaDeObjetos(nomeInstrutor, 'nomeInstrutor', erroNomeInstrutor, 3, false, true)

const objRgInstrutor = fabricaDeObjetos(rgDoInstrutor, 'rgDoInstrutor', erroRgDoInstrutor, 12, true, false)

const objCertificacaoDoInstrutor = fabricaDeObjetos(certificacaoDoInstrutor, 'certificacaoDoInstrutor', erroCertificacaoDoInstrutor, 5, false, false)



export const tratarNomeDoAluno = () => tratar(objNomeDoAluno)
export const tratarCPFDoAluno = () => tratar(objCPFDoAluno)
export const tratarTreinamento = () => tratar(objTreinamento)
export const tratarTextoComplementar = () => tratar(objTextoComplementar)
export const tratarData = () => tratar(objTratarDatar)
export const tratarPromovidoPor = () => tratar(objPromovidoPor)
export const tratarCargaHoraria = () => tratar(objCargaHoraria)
export const tratarNRs = () => tratar(objNRs)
export const tratarNomeInstrutor = () => tratar(objNomeInstrutor)
export const tratarRgInstrutor = () => tratar(objRgInstrutor)
export const tratarCertificacaoDoInstrutor = () => tratar(objCertificacaoDoInstrutor)

export const elementosTradados = [
    tratarNomeDoAluno,
    tratarCPFDoAluno,
    tratarTreinamento,
    tratarTextoComplementar,
    tratarData,
    tratarPromovidoPor,
    tratarCargaHoraria,
    tratarNRs,
    tratarNomeInstrutor,
    tratarRgInstrutor,
    tratarCertificacaoDoInstrutor]


