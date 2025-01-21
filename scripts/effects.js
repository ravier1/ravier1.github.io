let clickCount = 0;
let clickTimeout;

document.querySelector('.profile-image').addEventListener('click', () => {
    clickCount++;
    clearTimeout(clickTimeout);
    
    clickTimeout = setTimeout(() => {
        if (clickCount >= 30) {
            fireworksEffect();
        } else if (clickCount >= 20) {
            createFireworks();
        } else if (clickCount >= 10) {
            basicConfetti();
        }
        clickCount = 0;
    }, 2000);
});

function createFireworks() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const fireworks = [];
    const duration = 4000;
    const startTime = Date.now();

    function Particle(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 8
        };
        this.alpha = 1;
        this.decay = 0.015;
    }

    Particle.prototype.update = function() {
        this.velocity.y += 0.1;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
        return this.alpha > 0;
    };

    function createExplosion(x, y) {
        const colors = ['#ff0000', '#ffa500', '#ffff00', '#00ff00', '#0000ff', '#ff00ff'];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    function animate() {
        if (Date.now() - startTime > duration) {
            document.body.removeChild(canvas);
            return;
        }

        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.1) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height / 2;
            createExplosion(x, y);
        }

        for (let i = particles.length - 1; i >= 0; i--) {
            ctx.beginPath();
            ctx.arc(particles[i].x, particles[i].y, 2, 0, Math.PI * 2);
            ctx.fillStyle = particles[i].color;
            ctx.globalAlpha = particles[i].alpha;
            ctx.fill();

            if (!particles[i].update()) {
                particles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

function basicConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        
        confetti({
            ...defaults,
            particleCount: 50,
            origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

function fireworksEffect() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 45, spread: 180, ticks: 100, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 100;
        
        // Launch from multiple points
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.2, 0.8), y: randomInRange(0.2, 0.8) },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
        });
    }, 200);
}

function ultimateEffect() {
    const duration = 8000;
    const animationEnd = Date.now() + duration;
    
    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        
        // Spiral effect
        const angle = timeLeft / duration * 2 * Math.PI;
        const x = 0.5 + Math.cos(angle) * 0.5;
        const y = 0.5 + Math.sin(angle) * 0.5;
        
        confetti({
            particleCount: 2,
            angle: angle * 180 / Math.PI,
            spread: 0,
            origin: { x, y },
            colors: ['#ff0000', '#00ff00', '#0000ff'],
            ticks: 300,
            startVelocity: 10,
            scalar: 0.8
        });
    }, 10);
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}