const menuBar = document.querySelector('.menu-bar');
const navigation = document.querySelector('.navbar ul');

menuBar.addEventListener('click', () => {
  const isOpened = menuBar.getAttribute('aria-expanded') === 'true';

  menuBar.setAttribute('aria-expanded', !isOpened);
  navigation.classList.toggle('opened', !isOpened);
});
