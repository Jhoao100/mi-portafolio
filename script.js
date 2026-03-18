AOS.init({ duration: 800, once: true });

particlesJS('particles-js', {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#00f2ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3 },
        "size": { "value": 2 },
        "line_linked": { "enable": true, "distance": 120, "color": "#00f2ff", "opacity": 0.1, "width": 1 },
        "move": { "enable": true, "speed": 1 }
    }
});

const overlay = document.getElementById('cyber-overlay');
const icons = ['fa-robot', 'fa-code', 'fa-database', 'fa-microchip', 'fa-server', 'fa-network-wired'];

function createFallingIcon() {
    const iconEl = document.createElement('i');
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const startPos = Math.random() * 100; 
    const duration = 10 + Math.random() * 15; 
    const size = 1 + Math.random() * 1.5; 

    iconEl.classList.add('fas', randomIcon, 'falling-icon');
    iconEl.style.left = startPos + '%';
    iconEl.style.top = '-50px';
    iconEl.style.fontSize = size + 'rem';
    iconEl.style.animation = `fall ${duration}s linear infinite`;

    overlay.appendChild(iconEl);

    setTimeout(() => {
        iconEl.remove();
    }, duration * 1000);
}

const isMobile = window.innerWidth < 768;
setInterval(createFallingIcon, isMobile ? 3000 : 1500);

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    10% { opacity: 0.15; }
    90% { opacity: 0.15; }
    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);

document.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('falling-icon')) {
        e.target.style.pointerEvents = 'none'; 
        e.target.style.transform = 'scale(0)';
        e.target.style.opacity = '0';
    }
});