function smoothScrollToContacts() {
    const contactsSection = document.getElementById('contacts');
    if ('scrollBehavior' in document.documentElement.style) {
        // For modern browsers that support scrollBehavior
        contactsSection.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        // For older browsers and mobile browsers that don't support scrollBehavior
        const startY = window.scrollY;
        const endY = contactsSection.offsetTop;
        const distance = endY - startY;
        const duration = 500; // adjust the duration to your liking
        const startTime = performance.now();
        function animateScroll() {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const progress = elapsed / duration;
            const newY = startY + (distance * progress);
            window.scrollTo(0, newY);
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }
        animateScroll();
    }
    highlightContactsSection();
}

function highlightContactsSection() {
    const contactsSection = document.getElementById('contacts');
    contactsSection.classList.add('highlight');
    setTimeout(() => {
        contactsSection.classList.remove('highlight');
    }, 1000);
}
