import { formName, formNumber, form } from "./view.js";
import { addСontact } from "./addContact.js";
import { createElement } from "./createElement.js";

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addСontact(formName.value, formNumber.value);
  createElement(formName.value, formNumber.value)
})