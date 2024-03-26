const mainEl = document.querySelector('main');
const backButton = document.querySelector('#back');
const allEntries = JSON.parse(localStorage.getItem('post-list'));

function renderPosts() {
    for (let i = 0; i < allEntries.length; ++i) {
        let entry = JSON.parse(allEntries[i]);
        let post = document.createElement('article');
        
        let username = document.createElement('h3');
        let location = document.createElement('p');
        let route = document.createElement('p');
        let grade = document.createElement('p');
        let content = document.createElement('p');
        username.textContent = entry.username;
        location.textContent = entry.location;
        route.textContent = entry.route;
        grade.textContent = entry.grade;
        content.textContent = entry.content;

        post.appendChild(username);
        post.appendChild(location);
        post.appendChild(route);
        post.appendChild(grade);
        post.appendChild(content);

        mainEl.appendChild(post);
    }
}

backButton.addEventListener('click', function (event) {
    window.location.href = './index.html';
})

renderPosts();