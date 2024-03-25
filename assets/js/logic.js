const body = document.querySelector('body');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.button');
const footer = document.querySelector('footer');
const themeButton = document.querySelector('#theme');


themeButton.addEventListener('click', function (event) {
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }

    if (header.style.borderColor === 'white') {
        header.style.borderColor = 'black';
    } else {
        header.style.borderColor = 'white';
    }

    if (footer != null) {
        if (footer.style.borderColor === 'white') {
            footer.style.borderColor = 'black';
        } else {
            footer.style.borderColor = 'white';
        }
    }

    if (sections != null) {
        for (let i=0; i<sections.length; ++i) {
            if (sections[i].style.borderColor === 'white') {
                sections[i].style.borderColor = 'black';
            } else {
                sections[i].style.borderColor = 'white';
            }
        }
    }

    if (buttons != null) {
        for (let i=0; i<buttons.length; ++i) {
            if (buttons[i].style.backgroundColor === 'white') {
                buttons[i].style.backgroundColor = 'black';
                buttons[i].style.color = 'white';
            }
            else {
                buttons[i].style.backgroundColor = 'white';
                buttons[i].style.color = 'black';
            }
        }
    }

    if (themeButton.textContent === '☀️') {
        themeButton.textContent = '🌒';
    } else {
        themeButton.textContent = '☀️';
    }
})