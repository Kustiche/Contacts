import { phonebook } from "./phonebook.js";

export function changeFavorite(event) {
  const currentElement = event.target;

  if (currentElement.className === 'contacts__not-elected' || currentElement.className === 'contacts__not-elected elected') {
    const contact = currentElement.closest('.contacts__contact');
    const contactName = contact.querySelector('.contacts__name');
    const contactNotElected = contact.querySelector('.contacts__not-elected');
    const contactElected = contact.querySelector('.contacts__not-elected elected');
    const desiredContact = phonebook.find((contact) => contact.name === contactName.textContent);
    
    if (desiredContact.isFavorite) {
      desiredContact.isFavorite = false;
      console.log(32);
      console.log(phonebook);
    }else {
      desiredContact.isFavorite = true;
      console.log(42);
      console.log(phonebook);
    };

    // if (desiredContact.isFavorite) {
    //   contactNotElected.classList.add('elected');
    // }else {
    //   contactElected.classList.remove('elected');
    // };
  };
};