document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navbar Toggle Logic ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked on mobile
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // --- 2. Contact Form Submission Alert ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents page reload

            // Extract values from your form
            const nameInput = document.getElementById('name').value;
            const emailInput = document.getElementById('email').value;

            // Trigger details alert pop-up
            alert(`Message Sent Successfully!\n\nSubmitted Details:\nName: ${nameInput}\nEmail: ${emailInput}`);

            // Reset form input lines
            contactForm.reset();
        });
    }
});
