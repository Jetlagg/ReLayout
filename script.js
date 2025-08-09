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

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing! You will receive our latest updates at ' + email);
    this.reset();
});

const mobileMenuToggle = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
};

document.querySelector('.fa-search').addEventListener('click', () => {
    alert('Search functionality would be implemented here');
});

document.querySelector('.fa-user').addEventListener('click', () => {
    alert('User account functionality would be implemented here');
});

document.querySelector('.fa-shopping-bag').addEventListener('click', () => {
    alert('Shopping cart functionality would be implemented here');
});

window.addEventListener('load', () => {
    document.querySelector('.loading').style.opacity = '1';
});

// function toggleFavorite(button) {
//     button.classList.toggle('active');
//     if (button.classList.contains('active')) {
//         button.textContent = '♥';
//         button.style.color = '#ff6b6b';
//     } else {
//         button.textContent = '♡';
//         button.style.color = '#ccc';
//     }
// }

// function scrollProducts() {
//     const grid = document.querySelector('.bestseller-grid');
//     grid.scrollLeft += 320;
// }

// document.querySelector('.bestseller-grid').addEventListener('wheel', (e) => {
//     if (e.deltaY !== 0) {
//         e.preventDefault();
//         e.currentTarget.scrollLeft += e.deltaY;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.bestseller-card');
    
//     cards.forEach((card, index) => {
//         card.style.opacity = '0';
//         card.style.transform = 'translateY(20px)';
        
//         setTimeout(() => {
//             card.style.transition = 'all 0.6s ease';
//             card.style.opacity = '1';
//             card.style.transform = 'translateY(0)';
//         }, index * 100);
//     });
// });