  import { phonebook } from "./phonebook.js";
	import { render } from "./render.js";

	function Contact(name, number, category, isFavorite) {
		this.name = name;
		this.number = number;
		this.category = category;
		this.isFavorite = isFavorite;
	};

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
	let contact = new Contact(name, number, categoryContact, isFavoriteContact);

  phonebook.push({
		name: contact.name,
		number: contact.number,
		category: contact.category,
		isFavorite: contact.isFavorite
	});

	render();
};