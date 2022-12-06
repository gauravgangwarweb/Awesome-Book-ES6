export const booksData = [];
export const getBooks = JSON.parse(localStorage.getItem('books'));

export class BooksCls {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

    add = () => {
      const title = document.querySelector('#title').value;
      const author = document.querySelector('#author').value;
      const book = {
        Title: title,
        author,
      };
      const netBooks = JSON.parse(localStorage.getItem('books'));
      if (netBooks == undefined) { //eslint-disable-line
        booksData.push(book);
        localStorage.setItem('books', JSON.stringify(booksData));
      } else {
        netBooks.push(book);
        localStorage.setItem('books', JSON.stringify(netBooks));
      }
      location.reload(); //eslint-disable-line
    }

    showBooks = () => {
      const divP = document.querySelector('#list');

      if (getBooks == undefined || !getBooks[0]) { //eslint-disable-line
        divP.innerHTML = '<p class="empty-div">Please Add Books</p>';
      } else {
        for (let i = 0; i < getBooks.length; i += 1) {
          const temp = i;
          divP.innerHTML += `
        <div class="cards" data-id="${temp}">
            <p>${getBooks[i].Title} by ${getBooks[i].author}</p>
            <button class="remove" data-id='${temp}'>Remove</button>
        </div>
        `;
        }
      }
    }

    del = (id) => {
      getBooks.splice(id, 1);
      localStorage.setItem('books', JSON.stringify(getBooks));
    }
}