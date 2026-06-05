"use strict";

const bookForm = document.querySelector(".book-form");
const bookFormTitle = document.querySelector(".book-form__title");
const bookFormAuthor = document.querySelector(".book-form__author");
const bookFormPages = document.querySelector(".book-form__pages");
const bookFormSubmit = document.querySelector(".book-form__submit");

const booksContainer = document.querySelector(".books-container");
const bookCard = document.querySelector(".book-card");
const bookCardField = document.querySelector(".book-card__field");
const bookCardLabel = document.querySelector(".book-card__label");
const bookCardId = document.querySelector(".book-card__id");
const bookCardTitle = document.querySelector(".book-card__title");
const bookCardAuthor = document.querySelector(".book-card__author");
const bookCardPages = document.querySelector(".book-card__pages");

const id = document.querySelector(".book-card__id");
const title = document.querySelector(".book-card__title");
const author = document.querySelector(".book-card__author");
const pages = document.querySelector(".book-card__pages");

booksContainer.style.opacity = "0";

const myLibrary = [];

let titleInput;
let authorInput;
let pagesInput;
let newBook;

function Book(title, author, pages) {
  if (!new.target) throw Error("Please use the 'new' keyword to call the function");
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const userInput = function () {
  titleInput = bookFormTitle.value;
  authorInput = bookFormAuthor.value;
  pagesInput = bookFormPages.value;
};

// Creates a Book instance and adds it to myLibrary array
function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages));
  console.log(myLibrary);
}

// Takes the book library array and updates the card content
const displayLibraryBook = function (library) {
  library.forEach(function (el, i, arr) {
    id.textContent = el.id;
    title.textContent = el.title;
    author.textContent = el.author;
    pages.textContent = el.pages;
  });
};

const appendBookCard = function () {
  newBook = myLibrary[myLibrary.length - 1];

  const bookCard = `
  <div class="book-card">
    <p class="book-card__field">
      <span class="book-card__label">id:</span>
      <span class="book-card__id">${newBook.id}</span>
    </p>

    <p class="book-card__field">
      <span class="book-card__label">Title:</span>
      <span class="book-card__title">${newBook.title}</span>
    </p>

    <p class="book-card__field">
      <span class="book-card__label">Author:</span>
      <span class="book-card__author">${newBook.author}</span>
    </p>

    <p class="book-card__field">
      <span class="book-card__label">Pages:</span>
      <span class="book-card__pages">${newBook.pages}</span>
    </p>
  </div>
`;

  booksContainer.insertAdjacentHTML("beforeend", bookCard);
};

// Handle book form submission
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // console.log(myLibrary, myLibrary.length);

  // Check if myLibrary array contains any book
  if (!myLibrary.length) {
    booksContainer.style.opacity = "1";

    userInput();

    // Add first book to empty myLibrary array
    addBookToLibrary(titleInput, authorInput, pagesInput);

    // Display new added book on card field
    displayLibraryBook(myLibrary);
  } else if (myLibrary.length) {
    console.log(myLibrary, myLibrary.length);

    // Takes user input
    userInput();

    // Add new book to library array
    addBookToLibrary(titleInput, authorInput, pagesInput);

    // Display new book card
    appendBookCard();
  }
});
