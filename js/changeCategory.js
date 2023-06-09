import { modalCategory, modalName } from "./view.js";
import { phonebook } from "./phonebook.js";

export function changeCategory(name) {
  const contact = phonebook.find((contact) => contact.name === name);
  contact.category = modalCategory.value;
};