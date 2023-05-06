import { formName, formNumber, form } from "./view.js";
import { addСontact } from "./addContact.js";
import { render } from "./render.js";

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addСontact(formName.value, formNumber.value);
});