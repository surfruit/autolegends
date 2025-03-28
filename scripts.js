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

// Слайдер
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

setInterval(nextSlide, 5000); // Зміна слайду кожні 5 секунд
showSlide(currentSlide);