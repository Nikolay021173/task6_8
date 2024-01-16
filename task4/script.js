const linkText = document.querySelector('a');

linkText.addEventListener('click', (event) => {
    event.preventDefault();
    const newLinkText = prompt('Введите новый текст для ссылки:');
    linkText.textContent = newLinkText;
});