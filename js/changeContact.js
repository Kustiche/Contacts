import { phonebook } from "./view.js";

export function changeContact(name, newNumber) {
	const contact = phonebook.find((contact) => contact.name === name);
	if (contact === undefined) {
		console.log('Вы ввели неверное имя');
		return;
	}else if(newNumber === undefined){
		contact.number = '';
	}else {
		contact.number = newNumber;
	};
};