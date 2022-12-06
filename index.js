import { BooksCls } from './modules/bookclass.js';
import addNew from './modules/navadd.js';
import showList from './modules/navshowlst.js';
import showContact from './modules/navcont.js';
import { DateTime } from './modules/luxon.js';
import {
  addBtn,
  listNav,
  addnewNav,
  contactNav,
  dateTime,
} from './modules/declarations.js';

// Showing books
const Shbooks = new BooksCls();
Shbooks.showBooks();

// Adding book
addBtn.addEventListener('click', () => {
  const Bookad = new BooksCls();
  Bookad.add();
});

// Removing book
const allBtns = document.querySelectorAll('.remove');
allBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    const Rembook = new BooksCls();
    Rembook.del(temp);
    location.reload(); //eslint-disable-line
  });
});

// Navbar functionality
addnewNav.addEventListener('click', addNew);
listNav.addEventListener('click', showList);
contactNav.addEventListener('click', showContact);

// Date time
const time = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
dateTime.innerText = time;