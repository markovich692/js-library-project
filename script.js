"use strict";

function Book(title, author, pages, read) {
  if (!new.target) throw Error("Please use the 'new' keyword to call the function");

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`;
  };
}

const breath = new Book("Breath", "James Nestor", "235", "read");

// console.log(breath.info());

// console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);

// console.log(breath.hasOwnProperty("title"));
// console.log(Object.getPrototypeOf(Book.prototype).hasOwnProperty("valueOf"));

// PERSON

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  //   console.log(`Hello, I'm ${this.name}!`);
};

const person1 = new Person("Bill");

// PLAYER

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  //   console.log(`My marker is ${this.marker}`);
};

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);

const player1 = new Player("Boule", "X");
player1.sayName();
player1.getMarker();

// Tasks
