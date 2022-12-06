import {
  formWrapper,
  contactSection,
  bookCollection,
} from './declarations.js';

const showList = () => {
  bookCollection.style.display = 'flex';
  formWrapper.style.display = 'none';
  contactSection.style.display = 'none';
  window.location.reload();
};

export default showList;