import {
  formWrapper,
  contactSection,
  bookCollection,
} from './declarations.js';

const showContact = () => {
  contactSection.style.display = 'flex';
  bookCollection.style.display = 'none';
  formWrapper.style.display = 'none';
};

export default showContact;