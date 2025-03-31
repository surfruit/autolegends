// Плавна прокрутка до секцій
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// Перемикання мови
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        document.querySelectorAll('[data-uk]').forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
        document.querySelectorAll('input, textarea').forEach(element => {
            if (element.hasAttribute(`data-${lang}-placeholder`)) {
                element.placeholder = element.getAttribute(`data-${lang}-placeholder`);
            }
        });
        document.documentElement.lang = lang;
    });
});

// Розкриття FAQ
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Hamburger menu
function toggleMenu() {
    const nav = document.querySelector('.nav-menu');
    nav.classList.toggle('active');
}

// Слайдер для головної секції
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
showSlide(currentSlide);

// Слайдер для "Featured Cars"
let featuredSlides = document.querySelectorAll('.featured-slide');
let currentFeaturedSlide = 0;

function showFeaturedSlide(index) {
    featuredSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextFeaturedSlide() {
    currentFeaturedSlide = (currentFeaturedSlide + 1) % featuredSlides.length;
    showFeaturedSlide(currentFeaturedSlide);
}

setInterval(nextFeaturedSlide, 5000);
showFeaturedSlide(currentFeaturedSlide);

// EmailJS для відправки форми
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('Error:', error);
        });
});