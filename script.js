const saltafilaLink = document.getElementById('saltafila-link');
const contactsSection = document.getElementById('contacts');

if (saltafilaLink && contactsSection) {
  saltafilaLink.addEventListener('click', () => {
    contactsSection.classList.add('highlight');

    // Add smooth scrolling
    contactsSection.scrollIntoView({
      behavior: 'smooth'
    });

    // Remove highlight class after animation is complete
    contactsSection.addEventListener('transitionend', () => {
      contactsSection.classList.remove('highlight');
    });
  });
}
