export function showContactAvatar(name) {
  const avatar = name.slice(0, 1);
  const temporaryClass = document.querySelector('.temporary-class');

  temporaryClass.textContent = avatar;
  temporaryClass.classList.remove('temporary-class');
}