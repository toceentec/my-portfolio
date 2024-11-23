// Menu Toggle Logic
const menuBar = document.querySelector('.menu-bar');
const navigation = document.querySelector('.navbar ul');

menuBar.addEventListener('click', () => {
  const isOpened = menuBar.getAttribute('aria-expanded') === 'true';

  menuBar.setAttribute('aria-expanded', !isOpened);
  navigation.classList.toggle('opened', !isOpened);
});

// Typing/Deleting Animation Logic
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".subtitle span"); // Target the span inside the subtitle
  let lastScrollTop = window.scrollY; // Use scrollY to track scroll position

  // Start typing immediately on page load
  subtitle.classList.add("typing");

  window.addEventListener("scroll", () => {
    const currentScrollTop = window.scrollY; // Get the current scroll position

    if (currentScrollTop > lastScrollTop) {
      // Scrolling Down
      subtitle.classList.remove("typing");
      subtitle.classList.add("deleting");
    } else {
      // Scrolling Up
      subtitle.classList.remove("deleting");
      subtitle.classList.add("typing");
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll
  });
});
