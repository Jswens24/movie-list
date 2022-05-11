// console.log('Hello World');

const inputField = document.querySelector('input');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const message = document.querySelector('#message')


const addMovie = (event) => {
    event.preventDefault();
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    ul.appendChild(movie);
    movie.appendChild(deleteBtn);
    inputField.value = '';
}

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}


form.addEventListener('submit', addMovie);


