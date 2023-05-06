import { modal, list } from "./view.js";
import { renderModal } from "./renderModal.js";

export function openModal(event) {
  const currentElement = event.target;
  const contact = currentElement.closest('.contacts__contact');

  let contactName = '';
  let contactNumber = '';
  if (!currentElement === list) {
    contactName = contact.querySelector('.contacts__name');
    contactNumber = contact.querySelector('.contacts__number');
  };

  if (currentElement.className === 'contacts__not-elected') {
    return;
  }else if (contact) {
    modal.classList.add('open-modal');
    renderModal(contactName.textContent, contactNumber.textContent);
  };
};