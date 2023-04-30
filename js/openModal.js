import { modal } from "./view.js";
import { renderModal } from "./renderModal.js";

export function openModal() {
  const contacts = document.querySelectorAll('.contacts__contact');

  contacts.forEach((contact) => {
    contact.addEventListener('click', (event) => {
      const classElement = event.target.className;
      if (classElement === 'contacts__not-elected' || classElement === 'contacts__not-elected elected') {
        return;
      }else {
        modal.classList.add('open-modal');
        renderModal(contact);
      };
    });
  });
};