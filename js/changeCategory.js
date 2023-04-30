import { modalCategory, modalName } from "./view.js";
import { phonebook } from "./main.js";

export function changeCategory() {
  const contact = phonebook.find((contact) => contact.name === modalName.value);
  contact.category = modalCategory.value;
}