import { modalName, modalAvatar } from "./view.js";

export function showModalAvatar() {
  modalAvatar.textContent = modalName.value.slice(0, 1);
};