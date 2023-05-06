import { modalArrow, modal } from "./view.js";

export function hiddenModal() {
  modalArrow.addEventListener('click', () => {
    modal.classList.remove('open-modal');
  });
};