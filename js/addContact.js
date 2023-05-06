  import { phonebook } from "./phonebook.js";
	import { render } from "./render.js";

	export function addСontact(name, number, category, isFavorite) {
	if (name === undefined || name === '') {
		console.log('Контакт без имени создать нельзя');
		return;
	}else if (phonebook.find((contact) => contact.name === name)) {
		console.log('Контакт с таким именем уже существует');
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
	render();
};