// Incluindo bibliotecas externas

// Incluir a biblioteca jsPDF
const jsPDFScript = document.createElement('script');
jsPDFScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
document.head.appendChild(jsPDFScript);

// Incluir a biblioteca html2canvas
const html2CanvasScript = document.createElement('script');
html2CanvasScript.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
document.head.appendChild(html2CanvasScript);

// Incluir a biblioteca html2pdf
const html2PdfScript = document.createElement('script');
html2PdfScript.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js";
document.head.appendChild(html2PdfScript);
