//Book Class: represents a Book
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }

//UI Class; Handle UI Tasks 
class UI {
    static displayBooks() {
        const books = Store.getBooks();
    
        books.forEach((book) => UI.addBookToList(book));
      }
    
      static addBookToList(book) {
        const list = document.querySelector('#book-list');
    
        const row = document.createElement('tr');
    
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    
        list.appendChild(row);
      }
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'jhon doe',
                isbn: '344334'
            },
            {
                title: 'Book Two',
                author: 'Jane doe',
                isbn: '5555'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

        static addBookTolist(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="btn btn-danger btn-sm delete>X</a></td>
`;
        list.appendChild(row);
    }
}

//Store Class: Handles storage


//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book


//Event: Remove a Book