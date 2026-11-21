import { seriesCollection } from './link.js';

// #region (function) to add book
let seriesArray = [];
function addBook(title, author, genre, status, coverImage, rating) {
  class Series {
    constructor(title, author, genre, status, coverImage, rating) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.status = status;
      this.coverImage = coverImage;
      this.rating = rating;
    }
  }
  const newBook = new Series(title, author, genre, status, coverImage, rating);
  seriesArray.push(newBook);
}
// #endregion (function) to add book

// #region (function) - display book in list
function displayBook(item) {
  const ol = document.getElementById('series-list');
  ol.innerHTML = ''; // clears the previous book list
  for (const book of item) {
    const li = document.createElement('li');
    const card = document.createElement('div');
    card.className = 'card-container';
    card.innerHTML = `<img src="${book.coverImage}" alt="Cover Image of ${book.title}" width=100px/>
                      <h3>${book.title}</h3>
                      <p>Author: ${book.author}</p>
                      <p>Genre: ${book.genre}</p>
                      <p>${book.status ? 'Completed' : 'Ongoing'}</p>
                      <p>Rating: ${book.rating}</p>`;
    li.appendChild(card);
    ol.appendChild(li);
  }
}
// #endregion (function) - display book in list

// #region (preset) initialise array for books objects
for (const seriesData of seriesCollection) {
  addBook( seriesData.title, seriesData.author, seriesData.genre, seriesData.status, seriesData.coverImage, seriesData.rating);
}
displayBook(seriesCollection);
// #endregion (preset) initialise array for books objects

// #region (eventListener) - add book from form inputs
const form = document.getElementById('add-series-form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // stop page reload
  const title = form['title-input'].value.trim();
  const author = form['author-input'].value.trim();
  const genre = form['genre-input'].value.trim();
  const status = form['status-input'].checked;
  const rating = form['rating-input'].value;
  const input = document.getElementById('cover-image-file-input');
  const file = input.files[0];
  let cover = '';
  if (file) {
    cover = URL.createObjectURL(file);
  } else {
    cover = form['cover-image-url-input'].value.trim();
    if (cover === '') {
      cover = 'https://i.pinimg.com/736x/ba/ee/e4/baeee4abd6d5bbce4d5718b56e05e9b2.jpg';
    }
  }
  addBook(title, author, genre, status, cover, rating); // create new book object here
  displayBook(seriesArray); // add book to your books array and update the display
  form.reset(); // clear the form inputs
});
// #endregion (eventListener) - add book from form inputs

// #region (eventListener) - filter button
const filterBtn = document.getElementById('filter-btn');
let filtered = false;
filterBtn.addEventListener('click', () => {
  if (!filtered) {
    const filteredArray = seriesCollection.filter((book) => book.status === true);
    displayBook(filteredArray);
    filterBtn.textContent = 'Show All Series';
    filtered = true;
  } else {
    displayBook(seriesCollection);
    filterBtn.textContent = 'Show Completed Series';
    filtered = false;
  }
});
// #endregion eventListener - filter button