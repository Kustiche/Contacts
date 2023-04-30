import { phonebook } from "./view.js";

export function sortingContacts() {
	function comparePhonebook(firstContact, secondContact) {
		if (firstContact.name > secondContact.name) return 1;
		if (firstContact.name == secondContact.name) return 0;
		if (firstContact.name < secondContact.name) return -1;
	};
	phonebook.sort(comparePhonebook);
};