const imageInput = document.getElementById('image-input');
const ocrResult = document.getElementById('ocr-result');

imageInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  ocrResult.textContent = 'Erkennung läuft...';
  try {
    // OCR ausführen: 'eng+deu' für Englisch und Deutsch
    const { data: { text } } = await Tesseract.recognize(
      file,
      'eng+deu',
      { logger: m => console.log(m) }
    );
    ocrResult.textContent = text;
  } catch (error) {
    ocrResult.textContent = 'Fehler beim Erkennen: ' + error.message;
  }
});
