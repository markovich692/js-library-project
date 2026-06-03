"use strict";

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
