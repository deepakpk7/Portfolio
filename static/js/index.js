function openPDF() {
    const pdfUrl = '../static/images/CV.pdf'; 
    window.open(pdfUrl, '_blank');
  }

  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
});
