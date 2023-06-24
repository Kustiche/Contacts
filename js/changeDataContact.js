import { modalName, modalNumber } from "./view.js";
import { phonebook } from "./phonebook.js";
import { render } from "./render.js";

export function changeDataContact(name) {
  const desiredContact = phonebook.find((contact) => contact.name === name);

  desiredContact.name = modalName.value;
  desiredContact.number = modalNumber.value;
  render();
};