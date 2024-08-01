const saltafilaLink = document.getElementById('saltafila-link');
const contactsSection = document.getElementById('contacts');
let highlightRemoved = false;

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

if (saltafilaLink && contactsSection) {
  saltafilaLink.addEventListener('touchstart', () => {
    contactsSection.classList.add('highlight');
    
    // Add smooth scrolling
    contactsSection.scrollIntoView({
      behavior: 'smooth'
    });

    // Remove highlight class after animation is complete
    contactsSection.addEventListener('animationend', () => {
      if (!highlightRemoved) {
        contactsSection.classList.remove('highlight');
        highlightRemoved = true;
      }
    });
  });
}
