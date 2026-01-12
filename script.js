// Create particles
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (20 + Math.random() * 15) + 's';
        container.appendChild(particle);
    }
}

// URL Parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

if (name) {
    // INVITATION MODE
    document.getElementById('cover-name').textContent = name;

    const audio = document.getElementById('bg-music');
    const cover = document.getElementById('cover');
    const musicIcon = document.getElementById('music-icon');
    const musicBtn = document.querySelector('.music-control');
    let isPlaying = false;

    window.openInvitation = function() {
        cover.classList.add('open');
        setTimeout(() => {
            audio.play().catch(e => console.log('Audio autoplay prevented'));
            isPlaying = true;
        }, 500);
    }

    window.toggleMusic = function() {
        if (isPlaying) {
            audio.pause();
            musicBtn.classList.add('paused');
            musicIcon.className = 'fas fa-pause';
        } else {
            audio.play();
            musicBtn.classList.remove('paused');
            musicIcon.className = 'fas fa-music';
        }
        isPlaying = !isPlaying;
    }

    // Countdown Timer
    const eventDate = new Date('2026-01-15T19:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

} else {
    // CREATOR MODE
    document.getElementById('cover').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.music-control').style.display = 'none';

    const creatorDiv = document.createElement('div');
    creatorDiv.className = 'creator-container';
    creatorDiv.innerHTML = `
        <h1>Buat Undangan</h1>
        <p style="color: #777; margin-bottom: 50px; font-size: 1.1rem;">Masukkan nama tamu untuk membuat link undangan personal</p>
        <div class="input-group">
            <input type="text" id="nameInput" placeholder="Contoh: Dwita Cantik">
        </div>
        <button onclick="generateLink()" class="btn-primary">
            <i class="fas fa-link"></i> Buat Link Undangan
        </button>
        <div id="linkDisplay" class="link-display" style="display:none;"></div>
    `;
    document.body.appendChild(creatorDiv);
}

window.generateLink = function() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const linkDisplay = document.getElementById('linkDisplay');

    if (nameInput) {
        const link = window.location.origin + window.location.pathname + '?name=' + encodeURIComponent(nameInput);
        linkDisplay.style.display = 'block';
        linkDisplay.innerHTML = `
            <p style="margin-bottom: 20px; color: var(--deep-burgundy); font-weight: 600; font-size: 1.1rem;">Link undangan berhasil dibuat!</p>
            <a href="${link}" target="_blank" style="color: var(--primary-gold); word-break: break-all; font-size: 1rem;">${link}</a>
            <p style="margin-top: 20px; font-size: 0.9rem; color: #777;">Salin dan bagikan link ini kepada ${nameInput}</p>
        `;
    } else {
        alert('Silakan masukkan nama tamu terlebih dahulu!');
    }
}

// Initialize particles on load
window.addEventListener('load', createParticles);
