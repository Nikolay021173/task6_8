const textInput = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const butSubmit = document.querySelector('button');

textInput.focus();

textInput.addEventListener('keyup', () => {
    duplicateField.textContent = textInput.value;
});

butSubmit.addEventListener('click', (event) => {
    console.log(textInput.value);
    textInput.value = '';
    duplicateField.textContent = '';
    event.preventDefault();
});