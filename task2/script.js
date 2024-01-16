const methodConsoleLog = document.querySelector('#consoleLog');

methodConsoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщений в консоль.')
});

methodConsoleLog.addEventListener('mouseenter', () => {
    methodConsoleLog.style.cursor = 'pointer';
});

const methodAlert = document.querySelector('#alert');

methodAlert.addEventListener('click', () => {
    alert('Метод для вывода модального окна с заданным сообщением.');
});

methodAlert.addEventListener('mouseenter', () => {
    methodAlert.style.cursor = 'pointer';
});

const methodPrompt = document.querySelector('#prompt');

methodPrompt.addEventListener('click', () => {
    alert('Метод для вывода модального окна, в котором надо ввести данные (текстовые или числовые).');
});

methodPrompt.addEventListener('mouseenter', () => {
    methodPrompt.style.cursor = 'pointer';
});
