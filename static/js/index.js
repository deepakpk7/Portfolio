function openPDF() {
    const pdfUrl = '../static/images/CV.pdf'; // Replace with your PDF file path
    window.open(pdfUrl, '_blank');
  }

  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
});
