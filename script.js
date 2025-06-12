document.addEventListener('DOMContentLoaded', () => {
    // Add color-changing animations to various elements
    const addColorAnimations = () => {
        // Add subtle color animations to bubbles
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach((bubble, i) => {
            const hue = Math.floor(Math.random() * 40) + 330; // Shades of pink/red
            bubble.style.background = `hsla(${hue}, 100%, 90%, 0.2)`;
            
            // Add subtle animation for color change
            const animationDuration = Math.random() * 5 + 5;
            const animation = `
                @keyframes bubbleColor${i} {
                    0%, 100% { background-color: hsla(${hue}, 100%, 90%, 0.2); }
                    50% { background-color: hsla(${hue + 20}, 100%, 80%, 0.3); }
                }
            `;
            
            const style = document.createElement('style');
            style.textContent = animation;
            document.head.appendChild(style);
            
            bubble.style.animation = `float 8s ease-in-out infinite, bubbleColor${i} ${animationDuration}s ease-in-out infinite`;
        });
    };
    
    // Call the function to add color animations
    addColorAnimations();
    // Background music control
    const backgroundMusic = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    let isMusicPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.textContent = '🔊';
        } else {
            backgroundMusic.play();
            musicToggle.textContent = '🔇';
        }
        isMusicPlaying = !isMusicPlaying;
    });
    
    // Enable music when user first interacts with page
    document.body.addEventListener('click', () => {
        if (!isMusicPlaying) {
            backgroundMusic.play().catch(error => {
                console.log('Auto-play prevented:', error);
            });
            isMusicPlaying = true;
            musicToggle.textContent = '🔇';
        }
    }, { once: true });
    // Reasons why I love you
    const reasons = [
        "Your beautiful smile brightens my day",
        "The way you care about everyone around you",
        "Your incredible laugh that makes me smile",
        "How you always know what to say when I'm down",
        "The way your eyes light up when you're excited",
        "Your kindness and compassion",
        "How you inspire me to be a better person",
        "The way you see the best in everyone",
        "Your incredible sense of humor",
        "The way you make me feel safe and loved"
    ];

    // Populate reasons
    const reasonsContainer = document.getElementById('reasons-container');
    reasons.forEach((reason, index) => {
        const reasonElement = document.createElement('div');
        reasonElement.classList.add('reason', 'animate__animated', 'animate__fadeIn');
        reasonElement.style.setProperty('--i', index);
        reasonElement.innerHTML = `<p>${reason}</p>`;
        reasonsContainer.appendChild(reasonElement);
    });

    // Navigation between sections
    const nextBtn = document.getElementById('next-btn');
    const nextSectionBtns = document.querySelectorAll('.next-section');
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    // Function to show a specific section
    const showSection = (index) => {
        sections.forEach(section => {
            section.classList.remove('active', 'animate__fadeIn');
        });
        
        sections[index].classList.add('active', 'animate__fadeIn');
        
        // Animate memories when showing that section
        if (index === 1) {
            const memories = document.querySelectorAll('.memory');
            memories.forEach((memory, i) => {
                memory.classList.add('animate__fadeInRight');
                memory.style.animationDelay = `${i * 0.3}s`;
            });
        }
        
        // Animate fun facts when showing that section
        if (index === 3) {
            const funFacts = document.querySelectorAll('.fun-fact');
            funFacts.forEach((fact, i) => {
                fact.classList.add('animate__bounceIn');
                fact.style.animationDelay = `${i * 0.3}s`;
            });
        }
    };

    // Next button for landing section
    nextBtn.addEventListener('click', () => {
        currentSectionIndex = 1;
        showSection(currentSectionIndex);
    });

    // Next section buttons
    nextSectionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentSectionIndex++;
            if (currentSectionIndex < sections.length) {
                showSection(currentSectionIndex);
            }
        });
    });

    // Typing effect in proposal section
    const typedTextElement = document.getElementById('typed-text');
    const textToType = "Akanksha, you're everything I've ever dreamed of. Every day with you is a blessing and I want to spend the rest of my life making you happy. I love you more than words can express.";
    let charIndex = 0;
    
    function typeText() {
        if (charIndex < textToType.length) {
            typedTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 60); // Adjust typing speed here
        }
    }
    
    // Start typing when proposal section is shown
    nextSectionBtns.forEach((btn, index) => {
        if (index === 3) { // Button before proposal section
            btn.addEventListener('click', () => {
                setTimeout(typeText, 1500); // Start typing after section transition
            });
        }
    });

    // Handle yes/no buttons in proposal section
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const celebration = document.getElementById('celebration');

    yesBtn.addEventListener('click', () => {
        celebration.classList.add('active');
        
        // Set random positions for fireworks
        const fireworks = document.querySelectorAll('.firework');
        fireworks.forEach(firework => {
            createFirework(firework);
        });
        
        // Add more fireworks
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const newFirework = document.createElement('div');
                newFirework.classList.add('firework');
                celebration.appendChild(newFirework);
                createFirework(newFirework);
            }, i * 800);
        }
        
        // Position and animate heart bursts
        const heartBursts = document.querySelectorAll('.heart-burst');
        heartBursts.forEach((heart, index) => {
            // Set heart's initial position around the message
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const radius = Math.min(centerX, centerY) * 0.5;
            const angle = (index / heartBursts.length) * Math.PI * 2;
            
            const posX = centerX + radius * Math.cos(angle) - 20;
            const posY = centerY + radius * Math.sin(angle) - 20;
            
            heart.style.left = `${posX}px`;
            heart.style.top = `${posY}px`;
            
            // Set random heart colors
            const colors = ['#ff4d6d', '#ff758f', '#e83a6f', '#d61c38', '#ff2e63'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            heart.style.setProperty('--heart-color', randomColor);
            
            // Set random animation delay
            heart.style.animationDelay = `${index * 0.2}s`;
            
            // Set random travel direction
            const tx = (Math.random() - 0.5) * 200;
            const ty = (Math.random() - 0.5) * 200;
            heart.style.setProperty('--tx', `${tx}px`);
            heart.style.setProperty('--ty', `${ty}px`);
        });
        
        // Create and animate confetti
        const confettiContainer = document.querySelector('.confetti-container');
        const confettiColors = ['#fce38a', '#f38181', '#eaffd0', '#95e1d3', '#a8d8ea', '#aa96da'];
        const confettiShapes = ['circle', 'square', 'triangle', 'line'];
        
        // Create 100 confetti pieces
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random position
            const x = Math.random() * window.innerWidth;
            confetti.style.left = `${x}px`;
            
            // Random color
            const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            
            // Random shape
            const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
            
            if (shape === 'circle') {
                confetti.style.borderRadius = '50%';
                confetti.style.backgroundColor = color;
            } else if (shape === 'square') {
                confetti.style.backgroundColor = color;
            } else if (shape === 'triangle') {
                confetti.style.width = '0';
                confetti.style.height = '0';
                confetti.style.borderLeft = `5px solid transparent`;
                confetti.style.borderRight = `5px solid transparent`;
                confetti.style.borderBottom = `10px solid ${color}`;
                confetti.style.backgroundColor = 'transparent';
            } else if (shape === 'line') {
                confetti.style.width = '2px';
                confetti.style.height = '15px';
                confetti.style.backgroundColor = color;
            }
            
            // Random size
            const size = Math.random() * 10 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            
            // Random rotation
            const rotation = Math.random() * 360;
            confetti.style.setProperty('--rot', `${rotation}deg`);
            
            // Random animation duration
            const duration = Math.random() * 2 + 3;
            confetti.style.animationDuration = `${duration}s`;
            
            // Random animation delay
            const delay = Math.random() * 5;
            confetti.style.animationDelay = `${delay}s`;
            
            confettiContainer.appendChild(confetti);
        }
        
        // Add a special heart explosion effect
        setTimeout(() => {
            // Create a central heart that will "explode"
            const explosionContainer = document.createElement('div');
            explosionContainer.style.position = 'absolute';
            explosionContainer.style.top = '50%';
            explosionContainer.style.left = '50%';
            explosionContainer.style.transform = 'translate(-50%, -50%)';
            explosionContainer.style.zIndex = '20';
            
            const centralHeart = document.createElement('div');
            centralHeart.classList.add('heart');
            centralHeart.style.width = '60px';
            centralHeart.style.height = '60px';
            centralHeart.style.backgroundColor = '#ff0a54';
            centralHeart.style.transform = 'rotate(-45deg) scale(0)';
            centralHeart.style.position = 'relative';
            centralHeart.style.animation = 'heartGrow 1s forwards';
            
            // Add keyframes for heart growth animation
            if (!document.querySelector('#heart-grow-animation')) {
                const style = document.createElement('style');
                style.id = 'heart-grow-animation';
                style.textContent = `
                    @keyframes heartGrow {
                        0% { transform: rotate(-45deg) scale(0); }
                        80% { transform: rotate(-45deg) scale(1.2); }
                        100% { transform: rotate(-45deg) scale(1); opacity: 0; }
                    }
                    
                    @keyframes heartParticle {
                        0% { transform: translate(0, 0) rotate(0deg) scale(0); opacity: 1; }
                        100% { transform: translate(var(--x), var(--y)) rotate(var(--r)) scale(1); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Create before and after pseudo-elements manually
            const beforeElement = document.createElement('div');
            beforeElement.style.content = '""';
            beforeElement.style.width = '60px';
            beforeElement.style.height = '60px';
            beforeElement.style.background = '#ff0a54';
            beforeElement.style.borderRadius = '50%';
            beforeElement.style.position = 'absolute';
            beforeElement.style.top = '-30px';
            
            const afterElement = document.createElement('div');
            afterElement.style.content = '""';
            afterElement.style.width = '60px';
            afterElement.style.height = '60px';
            afterElement.style.background = '#ff0a54';
            afterElement.style.borderRadius = '50%';
            afterElement.style.position = 'absolute';
            afterElement.style.left = '30px';
            
            centralHeart.appendChild(beforeElement);
            centralHeart.appendChild(afterElement);
            explosionContainer.appendChild(centralHeart);
            celebration.appendChild(explosionContainer);
            
            // Create heart particles that fly outward
            setTimeout(() => {
                // Create 30 small heart particles
                for (let i = 0; i < 30; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('heart-particle');
                    particle.style.position = 'absolute';
                    particle.style.width = `${Math.random() * 15 + 5}px`;
                    particle.style.height = `${Math.random() * 15 + 5}px`;
                    particle.style.backgroundColor = '#ff0a54';
                    particle.style.borderRadius = '50%';
                    particle.style.top = '50%';
                    particle.style.left = '50%';
                    particle.style.transform = 'translate(-50%, -50%)';
                    
                    // Set random direction and rotation
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 300 + 100;
                    const x = Math.cos(angle) * distance;
                    const y = Math.sin(angle) * distance;
                    const rotation = Math.random() * 360;
                    
                    particle.style.setProperty('--x', `${x}px`);
                    particle.style.setProperty('--y', `${y}px`);
                    particle.style.setProperty('--r', `${rotation}deg`);
                    
                    // Set animation properties
                    particle.style.animation = 'heartParticle 2s forwards';
                    particle.style.animationDelay = `${Math.random() * 0.5}s`;
                    
                    explosionContainer.appendChild(particle);
                }
            }, 800);
        }, 500);

        // Create pulsating hearts around "I LOVE YOU" text with delay
        setTimeout(() => {
            const message = document.querySelector('.message h1');
            const messageRect = message.getBoundingClientRect();
            
            // Create 12 pulsating hearts around the text
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.style.position = 'absolute';
                    heart.style.animation = 'pulse 1s infinite';
                    
                    // Position hearts around the text
                    const angle = (i / 12) * Math.PI * 2;
                    const radius = Math.max(messageRect.width, messageRect.height) * 0.7;
                    
                    const centerX = messageRect.left + messageRect.width / 2;
                    const centerY = messageRect.top + messageRect.height / 2;
                    
                    const x = centerX + Math.cos(angle) * radius - 20;
                    const y = centerY + Math.sin(angle) * radius - 20;
                    
                    heart.style.left = `${x}px`;
                    heart.style.top = `${y}px`;
                    heart.style.transform = 'rotate(-45deg) scale(0.5)';
                    heart.style.opacity = '0.8';
                    heart.style.zIndex = '10';
                    
                    // Add keyframes for pulsing animation if not already added
                    if (!document.querySelector('#pulse-animation')) {
                        const style = document.createElement('style');
                        style.id = 'pulse-animation';
                        style.textContent = `
                            @keyframes pulse {
                                0% { transform: rotate(-45deg) scale(0.5); }
                                50% { transform: rotate(-45deg) scale(0.6); }
                                100% { transform: rotate(-45deg) scale(0.5); }
                            }
                        `;
                        document.head.appendChild(style);
                    }
                    
                    celebration.appendChild(heart);
                }, i * 300);
            }
        }, 1500);
    });

    // Make the "No" button run away from cursor
    function moveNoButton() {
        const maxX = window.innerWidth - noBtn.clientWidth - 20;
        const maxY = window.innerHeight - noBtn.clientHeight - 20;
        
        // Make sure the button doesn't go off-screen
        const randomX = Math.max(20, Math.floor(Math.random() * maxX));
        const randomY = Math.max(20, Math.floor(Math.random() * maxY));
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }
    
    // Handle both mouse hover and touch on mobile
    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('touchstart', moveNoButton);
    
    // Also make the No button move when clicked
    noBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default click behavior
        moveNoButton();
    });

    // Function to create firework effect
    function createFirework(element) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        
        element.style.setProperty('--x', `${x}vw`);
        element.style.setProperty('--y', `${y}vh`);
        
        // Set random colors for each firework
        const colors = [
            '#ff0', '#f0f', '#0ff', '#f99', '#9f9', '#90f', '#f09',
            '#0f9', '#9ff', '#ff9', '#f90', '#09f', '#90f'
        ];
        
        for (let i = 1; i <= 5; i++) {
            const randomColorIndex = Math.floor(Math.random() * colors.length);
            element.style.setProperty(`--color-firework-${i}`, colors[randomColorIndex]);
        }
    }

    // Create falling hearts in the background
    const container = document.querySelector('.container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.top = '-20px';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.style.zIndex = '-1';
        heart.style.animation = `fall ${Math.random() * 5 + 3}s linear forwards`;
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    
    // Add falling hearts animation
    function addHeartsFall() {
        setInterval(createHeart, 300);
    }
    
    // Start heart animation after a small delay
    setTimeout(addHeartsFall, 1000);
    
    // Love counter - set your first day of being in love with Akanksha
    const loveStartDate = new Date('2024-02-20').getTime(); // Change this date to your actual date
    
    function updateLoveCounter() {
        const now = new Date().getTime();
        const difference = now - loveStartDate;
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        document.getElementById('love-days').textContent = days;
        document.getElementById('love-hours').textContent = hours;
        document.getElementById('love-minutes').textContent = minutes;
        document.getElementById('love-seconds').textContent = seconds;
    }
    
    // Update love counter initially and then every second
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
    
    // Add fall animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
            }
        }
    `;
    document.head.appendChild(style);
}); 