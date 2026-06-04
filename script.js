"use strict";

const bookForm = document.querySelector(".book-form");
const bookFormTitle = document.querySelector(".book-form__title");
const bookFormAuthor = document.querySelector(".book-form__author");
const bookFormPages = document.querySelector(".book-form__pages");
const bookFormSubmit = document.querySelector(".book-form__submit");

const id = document.querySelector(".book-card__id");
const title = document.querySelector(".book-card__title");
const author = document.querySelector(".book-card__author");
const pages = document.querySelector(".book-card__pages");

const myLibrary = [];

function Book(title, author, pages) {
  if (!new.target) throw Error("Please use the 'new' keyword to call the function");
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Creates a Book instance and adds it to myLibrary
function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages));
}

const myLibraryBook = function (library) {
  library.forEach(function (el, i, arr) {
    console.log(el);

    id.textContent = el.id;
    title.textContent = el.title;
    author.textContent = el.author;
    pages.textContent = el.pages;
  });
};

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleInput = bookFormTitle.value;
  const authorInput = bookFormAuthor.value;
  const pagesInput = bookFormPages.value;

  addBookToLibrary(titleInput, authorInput, pagesInput);

  myLibraryBook(myLibrary);
});
