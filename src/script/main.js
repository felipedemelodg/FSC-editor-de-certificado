import { baixarPdf } from "./elements.js";
import { model, salvarPdf } from "./functions.js";

model()
baixarPdf.addEventListener('click',()=>{salvarPdf()})