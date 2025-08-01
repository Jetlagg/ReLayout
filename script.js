// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing! You will receive our latest updates at ' + email);
    this.reset();
});

// Mobile menu toggle (if needed)
const mobileMenuToggle = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
};

// Add click event to search icon
document.querySelector('.fa-search').addEventListener('click', () => {
    alert('Search functionality would be implemented here');
});

// Add click event to user icon
document.querySelector('.fa-user').addEventListener('click', () => {
    alert('User account functionality would be implemented here');
});

// Add click event to shopping bag icon
document.querySelector('.fa-shopping-bag').addEventListener('click', () => {
    alert('Shopping cart functionality would be implemented here');
});

// Loading animation
window.addEventListener('load', () => {
    document.querySelector('.loading').style.opacity = '1';
});