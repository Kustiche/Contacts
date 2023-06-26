import { phonebook } from "./phonebook.js";
import { render } from "./render.js";

export let newPhonebook = phonebook;
export function deleteContact(name) {

  function predicatePhonebook(item) {
    if (item.name === name) {
      return false
    }else {
      return true
    }
  };

    newPhonebook = phonebook.filter(predicatePhonebook);
    render();
    localStorage.setItem('phonebook', JSON.stringify(newPhonebook));
};