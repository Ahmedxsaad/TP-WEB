
const textElement = document.querySelector('#text');
const colorInput = document.querySelector('#color');
const sizeInput = document.querySelector('#taille');
const fontSelect = document.querySelector('#font');


colorInput.addEventListener('input', function() {
    textElement.style.color = this.value;
});

sizeInput.addEventListener('input', function() {
    textElement.style.fontSize = this.value + 'px';
});

fontSelect.addEventListener('change', function() {
    textElement.style.fontFamily = this.value;
});
textElement.style.color = colorInput.value;
textElement.style.fontSize = sizeInput.value + 'px';
textElement.style.fontFamily = fontSelect.value;