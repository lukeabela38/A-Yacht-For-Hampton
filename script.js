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

// Sail Away button animation
function sailAway() {
    const button = document.querySelector('.cta-button');
    const yacht = document.querySelector('.yacht');
    
    // Button animation
    button.textContent = 'Sailing Away...';
    button.style.background = '#4682B4';
    button.disabled = true;
    
    // Yacht sailing animation
    yacht.style.animation = 'sailAway 3s ease-in-out forwards';
    
    // Reset after animation
    setTimeout(() => {
        button.textContent = 'Set Sail';
        button.style.background = '#D4AF37';
        button.disabled = false;
        yacht.style.animation = 'float 3s ease-in-out infinite';
    }, 3000);
}

// Add sail away animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sailAway {
        0% {
            transform: translateX(0) translateY(0);
        }
        50% {
            transform: translateX(200px) translateY(-50px);
        }
        100% {
            transform: translateX(400px) translateY(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        button.textContent = 'Message Sent! ✓';
        button.style.background = '#27AE60';
        form.reset();
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#4682B4';
            button.disabled = false;
        }, 2000);
    }, 1500);
}

// Add parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const yacht = document.querySelector('.yacht');
    if (yacht && scrolled < window.innerHeight) {
        yacht.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add floating animation to feature cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Add fade in animation
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    .feature-card {
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeStyle);

// Easter egg: Click on Hampton's egg head
document.addEventListener('DOMContentLoaded', () => {
    const eggHead = document.querySelector('.egg-head');
    if (eggHead) {
        eggHead.addEventListener('click', () => {
            eggHead.style.animation = 'eggSpin 0.5s ease-in-out';
            setTimeout(() => {
                eggHead.style.animation = '';
            }, 500);
        });
    }
    
    const portraitEgg = document.querySelector('.portrait-egg');
    if (portraitEgg) {
        portraitEgg.addEventListener('click', () => {
            alert("Hampton says: 'Welcome to my yacht! Enjoy your stay!' 🥚⚓");
        });
    }
});

// Add egg spin animation
const eggSpinStyle = document.createElement('style');
eggSpinStyle.textContent = `
    @keyframes eggSpin {
        0%, 100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(eggSpinStyle);

