import { modal } from "./view.js";
import { renderModal } from "./renderModal.js";

export function openModal(event) {
  const currentElement = event.target;
  const isCurrentElement = currentElement.className === 'contacts__avatar' || currentElement.className === 'contacts__name' || currentElement.className === 'contacts__number' || currentElement.className === 'contacts__contact';

  if (isCurrentElement) {
    const contact = currentElement.closest('.contacts__contact');
    const contactName = contact.querySelector('.contacts__name');
    const contactNumber = contact.querySelector('.contacts__number');

    modal.classList.add('open-modal');
    renderModal(contactName.textContent, contactNumber.textContent);
  };
};