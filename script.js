// Sign-up Counter - Continuously Incrementing
let signupCount = 12847; // Starting number
let incrementInterval;

function formatNumber(num) {
    return num.toLocaleString('en-US');
}

function incrementSignupCounter() {
    const counterElement = document.getElementById('signupCounter');
    if (!counterElement) return;
    
    // Increment by random amount between 1-3 every 2-5 seconds
    const increment = Math.floor(Math.random() * 3) + 1;
    signupCount += increment;
    
    // Animate the number change
    counterElement.style.transform = 'scale(1.2)';
    counterElement.style.color = '#27AE60';
    
    setTimeout(() => {
        counterElement.textContent = formatNumber(signupCount);
        counterElement.style.transform = 'scale(1)';
        counterElement.style.color = '#2c3e50';
    }, 200);
}

function startSignupCounter() {
    const counterElement = document.getElementById('signupCounter');
    if (counterElement) {
        counterElement.textContent = formatNumber(signupCount);
    }
    
    // Increment at random intervals (every 2-5 seconds)
    function scheduleNextIncrement() {
        const delay = Math.random() * 3000 + 2000; // 2-5 seconds
        setTimeout(() => {
            incrementSignupCounter();
            scheduleNextIncrement();
        }, delay);
    }
    
    scheduleNextIncrement();
}

// Start counter when page loads
document.addEventListener('DOMContentLoaded', () => {
    startSignupCounter();
});

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

// Add parallax effect on scroll (will be overridden during storm)
let parallaxEnabled = true;

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

// Thunderstorm Animation Function
let stormActive = false;

function startThunderstorm() {
    if (stormActive) return;
    
    stormActive = true;
    parallaxEnabled = false;
    const stormButton = document.querySelector('.storm-button');
    const stormOverlay = document.getElementById('thunderstormOverlay');
    const yacht = document.querySelector('.yacht');
    const eggHead = document.getElementById('eggHead');
    const rainContainer = document.getElementById('rainContainer');
    const lightning = document.getElementById('lightning');
    const oceanBackground = document.querySelector('.ocean-background');
    
    // Disable button
    stormButton.disabled = true;
    stormButton.textContent = '⚡ Storm Active...';
    
    // Activate storm overlay
    stormOverlay.classList.add('active');
    
    // Create rain drops
    createRain(rainContainer);
    
    // Start yacht rocking
    yacht.classList.add('storm-mode');
    
    // Lightning sequence
    let lightningCount = 0;
    const lightningInterval = setInterval(() => {
        flashLightning(lightning);
        lightningCount++;
        if (lightningCount >= 8) {
            clearInterval(lightningInterval);
        }
    }, 1500);
    
    // Start egg cracking sequence after 3 seconds
    setTimeout(() => {
        startEggCracking(eggHead);
    }, 3000);
    
    // End storm after 12 seconds
    setTimeout(() => {
        endThunderstorm(stormOverlay, yacht, eggHead, rainContainer, stormButton);
    }, 12000);
}

function createRain(container) {
    container.innerHTML = '';
    const rainCount = 200;
    
    for (let i = 0; i < rainCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        drop.style.opacity = Math.random() * 0.5 + 0.3;
        container.appendChild(drop);
    }
}

function flashLightning(lightningElement) {
    lightningElement.classList.add('flash');
    setTimeout(() => {
        lightningElement.classList.remove('flash');
    }, 100);
    
    // Play thunder sound effect (optional - using Web Audio API for a simple rumble)
    playThunderSound();
}

function playThunderSound() {
    // Create a simple thunder-like sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(30, audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        // Fallback if Web Audio API is not available
        console.log('Thunder sound effect');
    }
}

function startEggCracking(eggHead) {
    // Add crack lines
    const cracks = eggHead.querySelectorAll('.crack-line');
    cracks.forEach((crack, index) => {
        setTimeout(() => {
            crack.classList.add('active');
        }, index * 300);
    });
    
    // Shake the egg
    eggHead.classList.add('cracked');
    
    // Break the egg after cracks appear
    setTimeout(() => {
        const eggPieces = eggHead.querySelector('.egg-pieces');
        eggPieces.classList.add('cracked');
        
        // Show broken egg pieces
        const pieces = eggPieces.querySelectorAll('.egg-piece');
        pieces.forEach(piece => {
            piece.style.opacity = '1';
        });
    }, 1000);
}

function endThunderstorm(stormOverlay, yacht, eggHead, rainContainer, stormButton) {
    // Fade out storm
    stormOverlay.classList.remove('active');
    
    // Stop yacht rocking
    yacht.classList.remove('storm-mode');
    yacht.style.animation = 'float 3s ease-in-out infinite';
    
    // Reset egg (optional - keep it cracked or reset)
    setTimeout(() => {
        // Reset egg if you want it to be reusable
        // eggHead.classList.remove('cracked');
        // const cracks = eggHead.querySelectorAll('.crack-line');
        // cracks.forEach(crack => crack.classList.remove('active'));
        // const eggPieces = eggHead.querySelector('.egg-pieces');
        // eggPieces.classList.remove('cracked');
        // const pieces = eggPieces.querySelectorAll('.egg-piece');
        // pieces.forEach(piece => piece.style.opacity = '0');
        
        // Re-enable button and parallax
        stormButton.disabled = false;
        stormButton.textContent = '⚡ Weather the Storm';
        stormActive = false;
        parallaxEnabled = true;
    }, 2000);
}

// Parallax effect on scroll (disabled during storm)
window.addEventListener('scroll', () => {
    if (parallaxEnabled && !stormActive) {
        const scrolled = window.pageYOffset;
        const yacht = document.querySelector('.yacht');
        if (yacht && scrolled < window.innerHeight && !yacht.classList.contains('storm-mode')) {
            yacht.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
});

