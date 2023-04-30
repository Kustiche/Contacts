import { addСontact } from "./addContact.js";
import { render } from "./render.js";
import { name, number } from "./view.js";

export function getDataForm() {

  addСontact(name.value, number.value)

  render()
}