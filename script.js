"use strict";

const bookForm = document.querySelector(".book-form");
const bookFormTitle = document.querySelector(".book-form__title");
const bookFormAuthor = document.querySelector(".book-form__author");
const bookFormPages = document.querySelector(".book-form__pages");
const bookCardReadStatus = document.querySelector("#book-card__read-status");

const booksContainer = document.querySelector(".books-container");

let myLibrary = [];

function Book(title, author, pages) {
  if (!new.target) throw Error("Use 'new' keyword");
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read;

  this.setReadStatus = function (value) {
    if (value === true) {
      this.read = true;
    } else {
      this.read = false;
    }
  };
}

function userInput() {
  return {
    title: bookFormTitle.value,
    author: bookFormAuthor.value,
    pages: bookFormPages.value,
  };
}

function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages));
}

function appendBookCard(book) {
  const html = `
    <div class="book-card" data-book-card-id="${book.id}">
      <p class="book-card__field">
        <span class="book-card__label">id:</span>
        <span class="book-card__id">${book.id}</span>
      </p>

      <p class="book-card__field">
        <span class="book-card__label">Title:</span>
        <span class="book-card__title">${book.title}</span>
      </p>

      <p class="book-card__field">
        <span class="book-card__label">Author:</span>
        <span class="book-card__author">${book.author}</span>
      </p>

      <p class="book-card__field">
        <span class="book-card__label">Pages:</span>
        <span class="book-card__pages">${book.pages}</span>
      </p>

      <div class="book-card__field">
        <label class="book-card__read-label">
          Read:
            <input
              type="checkbox"
              class="book-card__read-checkbox"
              data-book-card-id=${book.id}
              ${book.read ? "checked" : ""}
            />
        </label>
      </div>

      <button class="book-card__delete">Delete card</button>
    </div>
  `;

  booksContainer.insertAdjacentHTML("beforeend", html);
}

const handleReadStatusToggle = function () {
  document.querySelectorAll(".book-card__read-checkbox").forEach(function (readCheckbox) {
    readCheckbox.addEventListener("click", function (event) {
      myLibrary.forEach(function (book) {
        if (book.id === event.target.dataset.bookCardId) {
          book.setReadStatus(event.target.checked);
        }
      });
    });
  });
};

function renderLibrary() {
  booksContainer.innerHTML = "";

  myLibrary.forEach((book) => appendBookCard(book));

  if (myLibrary.length === 0) {
    booksContainer.classList.add("hidden");
  } else {
    booksContainer.classList.remove("hidden");
  }

  handleReadStatusToggle();
}

booksContainer.addEventListener("click", function (event) {
  if (!event.target.classList.contains("book-card__delete")) return;

  const card = event.target.closest(".book-card");
  const id = card.dataset.bookCardId;

  myLibrary = myLibrary.filter((book) => book.id !== id);

  card.remove();

  if (myLibrary.length === 0) {
    booksContainer.classList.add("hidden");
  }
});

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const { title, author, pages } = userInput();

  addBookToLibrary(title, author, pages);

  booksContainer.classList.remove("hidden");

  renderLibrary();

  bookForm.reset();
});
