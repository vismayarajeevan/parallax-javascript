// Scroll to top after reload
window.onload = function() {
    window.scrollTo(0, 0);
};





// Parallax Effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-section');
    const parallax2 = document.querySelector('.parallax-section-2');
    const scrolled = window.pageYOffset;
    
    parallax.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    if(parallax2) {
        parallax2.style.backgroundPositionY = ((scrolled - parallax2.offsetTop) * 0.5) + 'px';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animate Package Cards on Scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.package-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Header Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Form Submission Prevention
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing!');
        this.reset();
    }
});