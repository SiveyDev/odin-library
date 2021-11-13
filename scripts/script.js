let myLibrary = [];
const bookList = document.querySelector('.book-list');
console.log(bookList);
// addBookToLibrary();

function Book (title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    let title = prompt("Enter book title: ");
    let author = prompt("Enter book author");
    let pages = Number(prompt("Enter number of paages in the book"));
    let readCheck = prompt("Have you read this book?");
    console.log(readCheck);
    let hasRead;
    if (readCheck.toLowerCase() === 'yes') {
        hasRead = true;
    } else if (readCheck.toLowerCase() === 'no') {
        hasRead = false;
    } else {
        prompt("Invalid answer. Have you read this book?");
    }

    let myBook = new Book(title, author, pages, hasRead);
    myLibrary.push(myBook);
    console.log(myLibrary);
}

function displayLibrary() {
    let bookItem = document.createElement('p');
}