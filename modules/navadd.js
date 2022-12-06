import {
  formWrapper,
  contactSection,
  bookCollection,
} from './declarations.js';

const addNew = () => {
  formWrapper.style.display = 'flex';
  contactSection.style.display = 'none';
  bookCollection.style.display = 'none';
};

export default addNew;