//seed data
const books = [

    {
        title: "Power of Habits",
        author: "unknown",
        pages: 120,
        status: true
    },
    {
        title: "Hell of A Book",
        author: "Jason Mott",
        pages: 336,
        status: false
    },
    {
        title: "I Am enough",
        author: "Grace Byers",
        pages: 32,
        status: false
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 320,
        status: true
    }

]

const library = document.querySelector(".books");
const addBtn = document.querySelector(".add_book_btn");
const bookForm = document.querySelector(".book_form");
const content = document.querySelector(".content");
const closeBtn = document.querySelector('button.close')
const addBookBtn = document.querySelector("button.add");
const readCheckBox = document.querySelector("#status");

let myLibrary = [...books];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    displayBooks() {
        library.innerHTML = ''
        myLibrary.forEach((book, index) => {
            let newBook = document.createElement('div');
            let title = document.createElement('h2');
            let author = document.createElement('p');
            let pages = document.createElement('p');
            let status = document.createElement('p');
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Del";
            removeBtn.addEventListener('click', (e) => this.removeBook(e, index));
            removeBtn.classList = 'delete';
            title.textContent = book.title;
            author.textContent = `Author: ${book.author}`;
            pages.textContent = `No. of pages: ${book.pages}`;
            if (book.status) {
                status.textContent = "Status: have read";
            } else {
                status.textContent = "Status: not read";
            }
            newBook.append(title, author, pages, status, removeBtn);
            newBook.classList = 'book';
            library.append(newBook);
        });
    }
    removeBook(e, i) {
        e.target.parentNode.remove();
        myLibrary.splice(i, 1);
        this.displayBooks();
        // console.log(myLibrary);
    }

}

function addBookToLibrary(e) {
    // const newBook = new Book("test", "me", 69420, true);
    e.preventDefault();
    const newBook = new Book(bookForm.elements[0].value,
        bookForm.elements[1].value,
        bookForm.elements[2].value,
        readCheckBox.checked);
    myLibrary.push(newBook);
    closeForm();
    book.displayBooks();
}


function toggleForm() {
    bookForm.style.display = 'block';
    content.classList.toggle('active');
    addBtn.disabled = true;
}

function closeForm() {
    bookForm.style.display = 'none';
    content.classList.toggle('active');
    bookForm.reset();
    addBtn.disabled = false;
}

addBtn.addEventListener('click', toggleForm);
closeBtn.addEventListener('click', closeForm);
bookForm.addEventListener('submit', addBookToLibrary);


let book = new Book();

book.displayBooks();
