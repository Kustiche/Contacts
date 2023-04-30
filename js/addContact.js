  import { phonebook } from "./main.js";

	export function addСontact(name, number, category, isFavorite) {
	if (name === undefined || name === '') {
		alert('Контакт без имени создать нельзя');
		return;
	}else if (phonebook.find((contact) => contact.name === name)) {
		alert('Контакт с таким именем уже существует');
		return;
	};
	const categoryContact = category || 'Без категории';
	const isFavoriteContact = isFavorite || false;
  phonebook.push({
		name,
		number,
		category: categoryContact,
		isFavorite: isFavoriteContact
	});
};