const saltafilaLink = document.getElementById('saltafila-link');
const contactsSection = document.getElementById('contacts');

saltafilaLink.addEventListener('click', () => {
  contactsSection.classList.add('highlight');

  const scrollOffset = contactsSection.offsetTop;
  window.scrollTo({
    top: scrollOffset,
    behavior: 'smooth'
  });

  setTimeout(() => {
    contactsSection.classList.remove('highlight');
  }, 1000);
});
