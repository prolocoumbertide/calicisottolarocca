const saltafilaLink = document.getElementById('saltafila-link');
const contactsSection = document.getElementById('contacts');

saltafilaLink.addEventListener('click', () => {
  contactsSection.classList.add('highlight');
});
