const body = document.querySelector('body');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.button');
const footer = document.querySelector('footer');
const themeButton = document.querySelector('#theme');


themeButton.addEventListener('click', function (event) {
    if (body.style.getPropertyValue("--color1") === 'white') {
        body.style.setProperty("--color1",'black');
        body.style.setProperty("--color2",'white');
    } else {
        body.style.setProperty("--color1",'white');
        body.style.setProperty("--color2",'black');
    }

    if (themeButton.textContent === '☀️') {
        themeButton.textContent = '🌒';
    } else {
        themeButton.textContent = '☀️';
    }
})