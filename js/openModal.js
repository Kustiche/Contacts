import { modal } from "./view.js";

export function openModal(event) {
  const currentElement = event.target;
  const contact = currentElement.closest('.contacts__contact');
  // const nameContact = contact.querySelector('.contacts__name');

  if (currentElement.className === 'contacts__not-elected') {
    return;
  }else if (contact) {
    modal.classList.add('open-modal');
  };
};