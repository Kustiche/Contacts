export function showLetterAvatar(name) {
  const letterAvatar = name.substring(0, 1);
  const temporaryClass = document.querySelector('.temporary-class')

  temporaryClass.textContent = letterAvatar;
  temporaryClass.classList.remove('temporary-class');
};