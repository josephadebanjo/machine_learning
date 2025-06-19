// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for CTA button
const ctaButton = document.querySelector('.cta');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = ctaButton.href;
    });
}