import {  modalName, modal } from "./view.js";
import { render } from "./render.js";
import { phonebook } from "./main.js";

export function deleteContact() {
	const contactIndex = phonebook.findIndex((contact) => contact.name === modalName.textContent);
	phonebook.splice(contactIndex, 1);

	modal.classList.remove('open-modal');

	render()
};