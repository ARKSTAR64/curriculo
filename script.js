document.getElementById('download-pdf').addEventListener('click', () => {
    const element = document.getElementById('cv-content');
    
    // Configurações do PDF
    const options = {
        margin: 0,
        filename: 'Curriculo_Erik_Melado.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#0f0f0f' },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Gera o PDF
    html2pdf().set(options).from(element).save();
});