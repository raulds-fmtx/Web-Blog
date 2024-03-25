const userInput = document.querySelector('#username');
const locInput = document.querySelector('#location');
const routeInput = document.querySelector('#route-name');
const gradeInput = document.querySelector('#grade');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');

function displayMessage(message) {
    msgDiv.textContent = message;
}

function addEntry(post) {
    let allEntries;
    if (localStorage.getItem('post-list') === null) {
        allEntries = [];
    } else {
        allEntries = JSON.parse(localStorage.getItem('post-list'));
    }
    allEntries.push(post);
    localStorage.setItem('post-list',JSON.stringify(allEntries));
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    let username = userInput.value;
    let location = locInput.value;
    let route = routeInput.value;
    let grade = gradeInput.value;
    let content = contentInput.value;

    if (username === '') {
        displayMessage('Error: Username cannot be blank');
    } else if (location === '') {
        displayMessage('Error: Location cannot be blank');
    } else if (route === '') {
        displayMessage('Error: Route Name cannot be blank');
    } else if (grade === '') {
        displayMessage('Error: Grade cannot be blank');
    } else if (content === '') {
        displayMessage('Error: Content cannot be blank');
    } else {
        let post = {
            username: username,
            location: location,
            route: route,
            grade: grade,
            content: content
        };
        addEntry(JSON.stringify(post));
        window.location.href = './blog.html';
    }

})