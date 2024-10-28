// Add event listeners for navigation links
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener for contact form submission
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    // TO DO: Implement form submission logic
    console.log('Form submitted!');
});