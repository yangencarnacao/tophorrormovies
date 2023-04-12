// Seleciona os elementos HTML relevantes
const form = document.querySelector('form');
const inputTitle = document.querySelector('#title');
const inputGenre = document.querySelector('#genre');
const inputYear = document.querySelector('#year');
const moviesList = document.querySelector('.movies-list');

// Define a chave para o localStorage
const storageKey = 'movies';

// Inicializa o array de filmes com os dados do localStorage
let movies = JSON.parse(localStorage.getItem(storageKey)) || [];

// Atualiza a lista de filmes na página
function updateMoviesList() {
  moviesList.innerHTML = '';

  // Percorre o array de filmes e cria um elemento HTML para cada um
  movies.forEach(function(movie, index) {
    const movieItem = document.createElement('li');
    movieItem.classList.add('movie-item');
    movieItem.innerHTML = `
      <div class="movie-info">
        <h3>${movie.title} (${movie.year})</h3>
        <p>${movie.genre}</p>
      </div>
      <div class="movie-actions">
        <button class="btn-like btn-action">Like</button>
        <button class="btn-dislike btn-action">Dislike</button>
        <button class="btn-edit btn-action">Edit</button>
        <button class="btn-delete btn-action">Delete</button>
      </div>
      <form class="edit-form">
        <input type="text" class="edit-title" value="${movie.title}" required>
        <input type="text" class="edit-genre" value="${movie.genre}" required>
        <input type="text" class="edit-year" value="${movie.year}" required>
        <button type="submit" class="btn-save">Save</button>
        <button type="button" class="btn-cancel">Cancel</button>
      </form>
    `;

    // Adiciona um listener de clique no botão de edição
    const editButton = movieItem.querySelector('.btn-edit');
    const editForm = movieItem.querySelector('.edit-form');
    editButton.addEventListener('click', function() {
      editForm.classList.toggle('active');
    });

    // Adiciona um listener de submit no formulário de edição
    const saveButton = movieItem.querySelector('.btn-save');
    editForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const newTitle = editForm.querySelector('.edit-title').value;
      const newGenre = editForm.querySelector('.edit-genre').value;
      const newYear = editForm.querySelector('.edit-year').value;
      movies[index].title = newTitle;
      movies[index].genre = newGenre;
      movies[index].year = newYear;
      localStorage.setItem(storageKey, JSON.stringify(movies));
      updateMoviesList();
    });

    // Adiciona um listener de clique no botão de cancelar
    const cancelButton = movieItem.querySelector('.btn-cancel');
    cancelButton.addEventListener('click', function() {
      editForm.classList.remove('active');
    });

    // Adiciona um listener de clique no botão de exclusão
    const deleteButton = movieItem.querySelector('.btn-delete');
    deleteButton.addEventListener('click', function() {
      movies.splice(index, 1);
      localStorage.setItem(storageKey, JSON.stringify(movies));
      updateMoviesList();
    });

    // Adiciona um listener de clique no botão "Like"
    const likeButton = movieItem.querySelector('.btn-like');
    likeButton.addEventListener('click', function() {
    likeButton.classList.add('green');
    const dislikeButton = movieItem.querySelector('.btn-dislike');
    dislikeButton.classList.remove('yellow');
    });

    // Adiciona um listener de clique no botão "Dislike"
const dislikeButton = movieItem.querySelector('.btn-dislike');
dislikeButton.addEventListener('click', function() {
  dislikeButton.classList.add('yellow');
  const likeButton = movieItem.querySelector('.btn-like');
  likeButton.classList.remove('green');
});

moviesList.appendChild(movieItem);

});
}

// Adiciona um listener de submit no formulário de adição de filme
form.addEventListener('submit', function(event) {
event.preventDefault();
const newTitle = inputTitle.value;
const newGenre = inputGenre.value;
const newYear = inputYear.value;
const newMovie = {
title: newTitle,
genre: newGenre,
year: newYear
};
movies.push(newMovie);
localStorage.setItem(storageKey, JSON.stringify(movies));
updateMoviesList();
form.reset();
});

// Atualiza a lista de filmes na página quando a página é carregada
updateMoviesList();

// Adiciona um listener de clique no botão "Delete" de cada filme da lista
moviesList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('btn-delete')) {
    const movieItem = target.closest('.movie-item');
    const movieIndex = parseInt(movieItem.dataset.index);
    movies.splice(movieIndex, 1);
    localStorage.setItem(storageKey, JSON.stringify(movies));
    updateMoviesList();
    }
    });

    //  Criar o array com os subgêneros de terror válidos

    const subgenresList = [
        "Slasher",
        "Sobrenatural",
        "Zumbi",
        "Found Footage",
        "Monstros",
        "Alienígenas",
        "Vampiro",
        "Bruxas",
        "Possessão",
        "Ficção Científica",
        "Distopia",
        "Pós-apocalíptico",
        "Canibalismo",
        "Serial Killer",
        "Psicológico",
        "Espíritos",
        "Assombração",
        "Maldição",
        "Exorcismo",
        "Sátira",
        "Comédia",
        "Terror Gótico",
        "Terror Asiático",
        "Terror Europeu",
        "Terror Australiano"
      ];
          
    subgenresList = document.getElementById("genre");
    const genresDatalist = document.getElementById("genres");
    genresList.forEach(genre => {
      const option = document.createElement("option");
      option.value = genre;
      genresDatalist.appendChild(option);
    });
    genreInput.addEventListener("input", () => {
      if (!genresList.includes(genreInput.value)) {
        genreInput.setCustomValidity("Gênero inválido.");
      } else {
        genreInput.setCustomValidity("");
        genreInput.checkValidity();
      }
    });
    