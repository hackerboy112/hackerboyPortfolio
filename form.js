function toggleContactForm() {
    const contactForm = document.getElementById('contactForm');
    const contactButton = document.getElementById('contactButton');
    const isHidden = contactForm.style.display === 'none' || !contactForm.style.display;
    
    contactForm.style.display = isHidden ? 'block' : 'none';
    contactButton.style.display = isHidden ? 'none' : 'block';
    document.getElementById('thankYouMessage').style.display = 'none';
}

function handleSubmit(event) {
    event.preventDefault();
    ['contactForm', 'contactButton'].forEach(id => document.getElementById(id).style.display = 'none');
    document.getElementById('thankYouMessage').style.display = 'block';
}
