import { modalName, modalNumber, phonebook } from "./view.js";
import { render } from "./render.js";
import { renderModal } from "./renderModal.js";

export function getDataModalForm() {
  let desiredContact = phonebook.find((contact) => contact.name === modalName.value);
  desiredContact.number = modalNumber.value;
  desiredContact.name = modalName.value;
  render();
  console.log(phonebook);
  console.log(modalName.value);
  console.log(desiredContact.name);
};