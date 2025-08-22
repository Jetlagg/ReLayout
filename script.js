const imageGrid = document.querySelector('.image-grid');
const boxes = document.querySelectorAll('.image-box');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
const slidesWrapper = document.querySelector('.slides');
let index = 0;

// header
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const dropdownContainers = document.querySelectorAll('.dropdown-container');
    const allDropdownMenus = document.querySelectorAll('.dropdown-menu');

    const closeAllDropdowns = () => {
        allDropdownMenus.forEach(menu => menu.classList.remove('visible'));
    };

    dropdownContainers.forEach(container => {
        container.addEventListener('mouseenter', function () {
            closeAllDropdowns();
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                menu.classList.add('visible');
            }
        });
    });

    header.addEventListener('mouseleave', () => {
        closeAllDropdowns();
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

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

// hero
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');

function showSlide(i) {
    index = (i + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));

setInterval(() => showSlide(index + 1), 5000);

const slidesContainer = document.querySelector('.slides');
let startX = 0;
let currentX = 0;
let isDragging = false;

function startDrag(e) {
    isDragging = true;
    startX = e.touches[0].clientX;
    slidesContainer.style.transition = "none"; 
}

function onDrag(e) {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    slidesContainer.style.transform = `translateX(calc(-${index * 100}% + ${deltaX}px))`;
}

function endDrag() {
    if (!isDragging) return;
    isDragging = false;

    const deltaX = currentX - startX;
    slidesContainer.style.transition = "transform 0.3s ease"; 

    if (deltaX > 50) {
        showSlide(index - 1);
    } else if (deltaX < -50) {
        showSlide(index + 1);
    } else {
        showSlide(index);
    }
}

slidesContainer.addEventListener('touchstart', startDrag);
slidesContainer.addEventListener('touchmove', onDrag);
slidesContainer.addEventListener('touchend', endDrag);

// gallery
function changeImage(el) {
    const mainImg = document.getElementById("mainImage");
    mainImg.style.opacity = "0";
    setTimeout(() => {
        mainImg.src = el.src;
        mainImg.style.opacity = "1";
    }, 200);

    document.querySelectorAll(".thumbnails img").forEach(img => {
        img.classList.remove("active");
    });

    el.classList.add("active");
}


// image
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        boxes.forEach(b => b.style.flex = '0.8'); 
        box.style.flex = '1.2'; 
    });
    
    box.addEventListener('mouseleave', () => {
        boxes.forEach(b => b.style.flex = '1');
    });
});