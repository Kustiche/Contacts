import { formName, formNumber, form, list, modal, modalName, modalCategory } from "./view.js";
import { addСontact } from "./addContact.js";
import { openModal } from "./openModal.js";
import { changeFavorite } from "./changeFavorite.js";
import { changeDataContact } from "./changeDataContact.js";
import { changeCategory } from "./changeCategory.js";
import { phonebook } from "./phonebook.js";
import { render } from "./render.js";

let name = '';
render();

formNumber.addEventListener('click', () => {
  const isFormNumberOperator = formNumber.value.includes('+');
  if (!isFormNumberOperator) {
    formNumber.value = '+';
  };
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addСontact(formName.value, formNumber.value);
  localStorage.setItem('phonebook', JSON.stringify(phonebook));
});

list.addEventListener('click', () => {
  openModal(event);
  changeFavorite(event);
});

modalName.addEventListener('click', () => {
  name = modalName.value;
});

modalCategory.addEventListener('click', () => {
  name = modalName.value;
});

modal.addEventListener('submit', (event) => {
  event.preventDefault();

  changeDataContact(name);
  changeCategory(name);
})