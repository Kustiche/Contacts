import { modal, modalDumpster } from "./view.js";
import { phonebook } from "./phonebook.js";
import { render } from "./render.js";

export function deleteContact(name) {
  modalDumpster.addEventListener('click', () => {
    const desiredContact = phonebook.findIndex((contact) => contact.name === name);

    phonebook.splice(desiredContact, 1);
    modal.classList.remove('open-modal');

    render();
    localStorage.setItem('phonebook', JSON.stringify(phonebook));
  });
};