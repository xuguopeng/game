/* ===========================================
   SPACE SHOOTER - GAME LOGIC
   A complete 2D space shooter game with audio
   Author: Senior Game Developer
   =========================================== */

// ===========================================
// AUDIO MANAGER
// Handles all sound effects and music using Web Audio API
// ===========================================
class AudioManager {
    constructor() {
        this.audioContext = null;
        this.masterGain = null;
        this.sfxGain = null;
        this.musicGain = null;
        this.isUnlocked = false;
        this.noiseBuffer = null;
        
        // Music oscillator and pattern
        this.musicOscillators = [];
        this.musicInterval = null;
        this.currentNoteIndex = 0;
        
        // Settings (will be loaded from localStorage)
        this.settings = {
            masterMute: false,
            sfxEnabled: true,
            musicEnabled: true,
            sfxVolume: 70,
            musicVolume: 50
        };
        
        // Music pattern (frequencies for a simple melody)
        this.musicPattern = [
            { freq: 220, duration: 0.2 },  // A3
            { freq: 277.18, duration: 0.2 }, // C#4
            { freq: 329.63, duration: 0.2 }, // E4
            { freq: 277.18, duration: 0.2 }  // C#4
        ];
        
        this.loadSettings();
    }

    /**
     * Initialize AudioContext (must be called after user gesture)
     */
    init() {
        if (this.audioContext) return; // Already initialized
        
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create master gain (affects everything)
            this.masterGain = this.audioContext.createGain();
            this.masterGain.connect(this.audioContext.destination);
            
            // Create separate gain nodes for SFX and Music
            this.sfxGain = this.audioContext.createGain();
            this.sfxGain.connect(this.masterGain);
            
            this.musicGain = this.audioContext.createGain();
            this.musicGain.connect(this.masterGain);
            
            // Apply saved settings
            this.applySettings();
            
            this.isUnlocked = true;
            console.log('AudioContext initialized successfully');
        } catch (error) {
            console.error('Failed to initialize AudioContext:', error);
        }
    }

    /**
     * Load settings from localStorage
     */
    loadSettings() {
        const saved = localStorage.getItem('spaceShooterSettings');
        if (saved) {
            try {
                this.settings = { ...this.settings, ...JSON.parse(saved) };
            } catch (error) {
                console.error('Failed to load audio settings:', error);
            }
        }
    }

    /**
     * Save settings to localStorage
     */
    saveSettings() {
        try {
            localStorage.setItem('spaceShooterSettings', JSON.stringify(this.settings));
        } catch (error) {
            console.error('Failed to save audio settings:', error);
        }
    }

    /**
     * Apply current settings to gain nodes
     */
    applySettings() {
        if (!this.audioContext) return;
        
        // Master mute
        this.masterGain.gain.value = this.settings.masterMute ? 0 : 1;
        
        // SFX volume (0-1 range)
        this.sfxGain.gain.value = this.settings.sfxEnabled ? 
            (this.settings.sfxVolume / 100) : 0;
        
        // Music volume (0-1 range)
        this.musicGain.gain.value = this.settings.musicEnabled ? 
            (this.settings.musicVolume / 100) : 0;
    }

    /**
     * Set master mute
     */
    setMasterMute(muted) {
        this.settings.masterMute = muted;
        if (this.masterGain) {
            this.masterGain.gain.value = muted ? 0 : 1;
        }
        this.saveSettings();
    }

    /**
     * Toggle SFX on/off
     */
    toggleSfx(enabled) {
        this.settings.sfxEnabled = enabled;
        this.applySettings();
        this.saveSettings();
    }

    /**
     * Toggle Music on/off
     */
    toggleMusic(enabled) {
        this.settings.musicEnabled = enabled;
        this.applySettings();
        
        if (enabled && this.isUnlocked) {
            this.startMusic();
        } else {
            this.stopMusic();
        }
        
        this.saveSettings();
    }

    /**
     * Set SFX volume (0-100)
     */
    setSfxVolume(volume) {
        this.settings.sfxVolume = Math.max(0, Math.min(100, volume));
        this.applySettings();
        this.saveSettings();
    }

    /**
     * Set Music volume (0-100)
     */
    setMusicVolume(volume) {
        this.settings.musicVolume = Math.max(0, Math.min(100, volume));
        this.applySettings();
        this.saveSettings();
    }

    /**
     * Create and cache a noise buffer for explosion sounds
     * Reuses the same buffer for performance
     */
    createNoiseBuffer() {
        if (this.noiseBuffer) return this.noiseBuffer;

        const bufferSize = Math.floor(this.audioContext.sampleRate * 0.1); // 100ms
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        this.noiseBuffer = buffer;
        return buffer;
    }

    /**
     * Play shoot sound (short punchy beep)
     */
    playShoot() {
        if (!this.isUnlocked || !this.settings.sfxEnabled) return;
        
        const now = this.audioContext.currentTime;
        const osc = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(this.sfxGain);
        
        // Square wave for retro feel
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
        
        // Quick envelope
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        
        osc.start(now);
        osc.stop(now + 0.05);
    }

    /**
     * Play explosion sound (noise burst + low tone)
     */
    playExplosion() {
        if (!this.isUnlocked || !this.settings.sfxEnabled) return;
        
        const now = this.audioContext.currentTime;
        
        // Noise component
        const noiseBuffer = this.createNoiseBuffer();
        const noiseSource = this.audioContext.createBufferSource();
        const noiseGain = this.audioContext.createGain();
        const noiseFilter = this.audioContext.createBiquadFilter();
        
        noiseSource.buffer = noiseBuffer;
        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.sfxGain);
        
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(2000, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(100, now + 0.3);
        
        noiseGain.gain.setValueAtTime(0.5, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        
        noiseSource.start(now);
        noiseSource.stop(now + 0.3);
        
        // Low tone component
        const osc = this.audioContext.createOscillator();
        const oscGain = this.audioContext.createGain();
        
        osc.connect(oscGain);
        oscGain.connect(this.sfxGain);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.3);
        
        oscGain.gain.setValueAtTime(0.3, now);
        oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        
        osc.start(now);
        osc.stop(now + 0.3);
    }

    /**
     * Play player hit sound (low thud)
     */
    playHit() {
        if (!this.isUnlocked || !this.settings.sfxEnabled) return;
        
        const now = this.audioContext.currentTime;
        const osc = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(this.sfxGain);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(100, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.2);
        
        gainNode.gain.setValueAtTime(0.5, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        
        osc.start(now);
        osc.stop(now + 0.2);
    }

    /**
     * Play game over sound (descending tone)
     */
    playGameOver() {
        if (!this.isUnlocked || !this.settings.sfxEnabled) return;
        
        const now = this.audioContext.currentTime;
        const osc = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(this.sfxGain);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.3);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.6);
        osc.frequency.exponentialRampToValueAtTime(55, now + 1.0);
        
        gainNode.gain.setValueAtTime(0.4, now);
        gainNode.gain.setValueAtTime(0.4, now + 0.8);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1.0);
        
        osc.start(now);
        osc.stop(now + 1.0);
    }

    /**
     * Start background music (simple looping pattern)
     */
    startMusic() {
        if (!this.isUnlocked || !this.settings.musicEnabled || this.musicInterval) return;
        
        this.currentNoteIndex = 0;
        
        // Play notes in sequence
        this.musicInterval = setInterval(() => {
            this.playMusicNote();
        }, 250); // 240 BPM (250ms per note)
    }

    /**
     * Play a single note from the music pattern
     */
    playMusicNote() {
        if (!this.isUnlocked || !this.settings.musicEnabled) return;
        
        const note = this.musicPattern[this.currentNoteIndex];
        const now = this.audioContext.currentTime;
        
        const osc = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(this.musicGain);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, now);
        
        // Soft envelope for smooth music
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.15, now + 0.01);
        gainNode.gain.linearRampToValueAtTime(0.1, now + note.duration - 0.05);
        gainNode.gain.linearRampToValueAtTime(0, now + note.duration);
        
        osc.start(now);
        osc.stop(now + note.duration);
        
        // Move to next note
        this.currentNoteIndex = (this.currentNoteIndex + 1) % this.musicPattern.length;
    }

    /**
     * Stop background music
     */
    stopMusic() {
        if (this.musicInterval) {
            clearInterval(this.musicInterval);
            this.musicInterval = null;
        }
    }

    /**
     * Clean up resources
     */
    destroy() {
        this.stopMusic();
        if (this.audioContext) {
            this.audioContext.close();
        }
    }
}

// Create global audio manager instance
const audioManager = new AudioManager();

// ===========================================
// GAME CONFIGURATION
// ===========================================
const CONFIG = {
    canvas: {
        width: 800,
        height: 600
    },
    player: {
        width: 40,
        height: 50,
        speed: 5,
        lives: 3,
        shootCooldown: 250 // milliseconds
    },
    bullet: {
        width: 4,
        height: 15,
        speed: 7,
        color: '#00ff00'
    },
    enemy: {
        width: 40,
        height: 40,
        speed: 2,
        spawnRate: 1500, // milliseconds
        points: 10
    },
    colors: {
        player: '#00ccff',
        enemy: '#ff3333',
        explosion: '#ffaa00',
        background: '#000000',
        stars: '#ffffff'
    }
};

// ===========================================
// GAME STATE
// ===========================================
const gameState = {
    isRunning: false,
    isPaused: false,
    score: 0,
    lives: CONFIG.player.lives,
    level: 1,
    lastShootTime: 0,
    enemySpawnTimer: 0,
    frameCount: 0,
    lastUpdateTime: 0
};

// ===========================================
// CANVAS SETUP
// ===========================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = CONFIG.canvas.width;
canvas.height = CONFIG.canvas.height;

// ===========================================
// INPUT HANDLING
// ===========================================
const keys = {
    left: false,
    right: false,
    space: false
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        keys.left = true;
    }
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        keys.right = true;
    }
    if (e.key === ' ' || e.key === 'Spacebar') {
        keys.space = true;
        e.preventDefault(); // Prevent page scrolling
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        keys.left = false;
    }
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        keys.right = false;
    }
    if (e.key === ' ' || e.key === 'Spacebar') {
        keys.space = false;
    }
});

// ===========================================
// GAME ENTITIES
// ===========================================

/**
 * Player class - represents the player's spaceship
 */
class Player {
    constructor() {
        this.width = CONFIG.player.width;
        this.height = CONFIG.player.height;
        this.x = CONFIG.canvas.width / 2 - this.width / 2;
        this.y = CONFIG.canvas.height - this.height - 20;
        this.speed = CONFIG.player.speed;
        this.lives = CONFIG.player.lives;
    }

    /**
     * Update player position based on input
     */
    update() {
        // Move left
        if (keys.left && this.x > 0) {
            this.x -= this.speed;
        }
        // Move right
        if (keys.right && this.x < CONFIG.canvas.width - this.width) {
            this.x += this.speed;
        }
    }

    /**
     * Draw player spaceship on canvas
     */
    draw() {
        ctx.fillStyle = CONFIG.colors.player;
        
        // Draw spaceship body
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, this.y); // Top point
        ctx.lineTo(this.x, this.y + this.height); // Bottom left
        ctx.lineTo(this.x + this.width, this.y + this.height); // Bottom right
        ctx.closePath();
        ctx.fill();

        // Draw cockpit
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x + this.width / 2 - 5, this.y + 15, 10, 10);

        // Draw engines (glowing effect)
        ctx.fillStyle = '#ffaa00';
        ctx.fillRect(this.x + 5, this.y + this.height - 5, 8, 5);
        ctx.fillRect(this.x + this.width - 13, this.y + this.height - 5, 8, 5);
    }

    /**
     * Take damage
     */
    hit() {
        this.lives--;
        gameState.lives = this.lives;
        updateUI();
        
        // Flash effect
        this.flashEffect();
    }

    /**
     * Visual feedback when hit
     */
    flashEffect() {
        let flashCount = 0;
        const flashInterval = setInterval(() => {
            canvas.style.opacity = canvas.style.opacity === '0.5' ? '1' : '0.5';
            flashCount++;
            if (flashCount > 6) {
                clearInterval(flashInterval);
                canvas.style.opacity = '1';
            }
        }, 100);
    }
}

/**
 * Bullet class - represents player's projectiles
 */
class Bullet {
    constructor(x, y) {
        this.width = CONFIG.bullet.width;
        this.height = CONFIG.bullet.height;
        this.x = x;
        this.y = y;
        this.speed = CONFIG.bullet.speed;
        this.active = true;
    }

    /**
     * Update bullet position
     */
    update() {
        this.y -= this.speed;
        
        // Deactivate if off screen
        if (this.y < -this.height) {
            this.active = false;
        }
    }

    /**
     * Draw bullet on canvas
     */
    draw() {
        ctx.fillStyle = CONFIG.bullet.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = CONFIG.bullet.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowBlur = 0;
    }
}

/**
 * Enemy class - represents enemy spaceships
 */
class Enemy {
    constructor() {
        this.width = CONFIG.enemy.width;
        this.height = CONFIG.enemy.height;
        this.x = Math.random() * (CONFIG.canvas.width - this.width);
        this.y = -this.height;
        this.speed = CONFIG.enemy.speed + (gameState.level - 1) * 0.5; // Speed increases with level
        this.active = true;
        this.points = CONFIG.enemy.points;
    }

    /**
     * Update enemy position
     */
    update() {
        this.y += this.speed;
        
        // Deactivate if off screen
        if (this.y > CONFIG.canvas.height) {
            this.active = false;
        }
    }

    /**
     * Draw enemy spaceship on canvas
     */
    draw() {
        ctx.fillStyle = CONFIG.colors.enemy;
        
        // Draw enemy body
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Draw details
        ctx.fillStyle = '#aa0000';
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        
        // Draw eyes/sensors
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(this.x + 10, this.y + 15, 5, 5);
        ctx.fillRect(this.x + 25, this.y + 15, 5, 5);
    }
}

/**
 * Explosion class - visual effect for destroyed entities
 */
class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.maxRadius = 30;
        this.speed = 2;
        this.active = true;
    }

    /**
     * Update explosion animation
     */
    update() {
        this.radius += this.speed;
        if (this.radius > this.maxRadius) {
            this.active = false;
        }
    }

    /**
     * Draw explosion effect
     */
    draw() {
        const alpha = 1 - (this.radius / this.maxRadius);
        ctx.fillStyle = `rgba(255, 170, 0, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.fillStyle = `rgba(255, 255, 0, ${alpha * 1.5})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

/**
 * Star class - background decoration
 */
class Star {
    constructor() {
        this.x = Math.random() * CONFIG.canvas.width;
        this.y = Math.random() * CONFIG.canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.2;
    }

    /**
     * Update star position (parallax effect)
     */
    update() {
        this.y += this.speed;
        if (this.y > CONFIG.canvas.height) {
            this.y = 0;
            this.x = Math.random() * CONFIG.canvas.width;
        }
    }

    /**
     * Draw star
     */
    draw() {
        ctx.fillStyle = CONFIG.colors.stars;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

// ===========================================
// GAME OBJECTS ARRAYS
// ===========================================
let player;
let bullets = [];
let enemies = [];
let explosions = [];
let stars = [];

// ===========================================
// GAME INITIALIZATION
// ===========================================

/**
 * Initialize game objects and state
 */
function initGame() {
    // Create player
    player = new Player();
    
    // Clear arrays
    bullets = [];
    enemies = [];
    explosions = [];
    stars = [];
    
    // Create background stars
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }
    
    // Reset game state
    gameState.isRunning = true;
    gameState.isPaused = false;
    gameState.score = 0;
    gameState.lives = CONFIG.player.lives;
    gameState.level = 1;
    gameState.lastShootTime = 0;
    gameState.enemySpawnTimer = 0;
    gameState.frameCount = 0;
    gameState.lastUpdateTime = performance.now();
    
    // Update UI
    updateUI();
}

/**
 * Update UI elements
 */
function updateUI() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('lives').textContent = gameState.lives;
    document.getElementById('level').textContent = gameState.level;
}

// ===========================================
// GAME LOGIC
// ===========================================

/**
 * Shoot a bullet from player position
 */
function shoot() {
    const currentTime = Date.now();
    if (currentTime - gameState.lastShootTime > CONFIG.player.shootCooldown) {
        const bullet = new Bullet(
            player.x + player.width / 2 - CONFIG.bullet.width / 2,
            player.y
        );
        bullets.push(bullet);
        gameState.lastShootTime = currentTime;
        
        // Play shoot sound
        audioManager.playShoot();
    }
}

/**
 * Spawn a new enemy
 */
function spawnEnemy() {
    enemies.push(new Enemy());
}

/**
 * Check collision between two rectangular objects
 */
function checkCollision(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
}

/**
 * Handle all collision detection
 */
function handleCollisions() {
    // Bullet-Enemy collisions
    bullets.forEach(bullet => {
        enemies.forEach(enemy => {
            if (bullet.active && enemy.active && checkCollision(bullet, enemy)) {
                // Deactivate both
                bullet.active = false;
                enemy.active = false;
                
                // Create explosion
                explosions.push(new Explosion(
                    enemy.x + enemy.width / 2,
                    enemy.y + enemy.height / 2
                ));
                
                // Play explosion sound
                audioManager.playExplosion();
                
                // Increase score
                gameState.score += enemy.points;
                updateUI();
                
                // Check for level up (every 100 points)
                if (gameState.score % 100 === 0 && gameState.score > 0) {
                    gameState.level++;
                    updateUI();
                }
            }
        });
    });
    
    // Player-Enemy collisions
    enemies.forEach(enemy => {
        if (enemy.active && checkCollision(player, enemy)) {
            enemy.active = false;
            
            // Create explosion
            explosions.push(new Explosion(
                enemy.x + enemy.width / 2,
                enemy.y + enemy.height / 2
            ));
            
            // Play hit sound
            audioManager.playHit();
            
            // Player takes damage
            player.hit();
            
            // Check game over
            if (player.lives <= 0) {
                gameOver();
            }
        }
    });
}

/**
 * Update all game objects
 */
function update() {
    if (!gameState.isRunning || gameState.isPaused) return;

    // Delta time (ms) for FPS-independent timing
    const now = performance.now();
    const dt = now - (gameState.lastUpdateTime ?? now);
    gameState.lastUpdateTime = now;

    gameState.frameCount++;
    
    // Update player
    player.update();
    
    // Handle shooting
    if (keys.space) {
        shoot();
    }
    
    // Update bullets
    bullets.forEach(bullet => bullet.update());
    bullets = bullets.filter(bullet => bullet.active);
    
    // Update enemies
    enemies.forEach(enemy => enemy.update());
    enemies = enemies.filter(enemy => enemy.active);
    
    // Update explosions
    explosions.forEach(explosion => explosion.update());
    explosions = explosions.filter(explosion => explosion.active);
    
    // Update stars
    stars.forEach(star => star.update());
    
    // Spawn enemies (FPS-independent)
    const spawnRate = Math.max(500, CONFIG.enemy.spawnRate - (gameState.level - 1) * 100);
    gameState.enemySpawnTimer += dt;

    while (gameState.enemySpawnTimer >= spawnRate) {
        spawnEnemy();
        gameState.enemySpawnTimer -= spawnRate;
    }

    
    // Handle collisions
    handleCollisions();
}

/**
 * Render all game objects
 */
function render() {
    // Clear canvas
    ctx.fillStyle = CONFIG.colors.background;
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
    
    // Draw stars (background)
    stars.forEach(star => star.draw());
    
    // Draw player
    player.draw();
    
    // Draw bullets
    bullets.forEach(bullet => bullet.draw());
    
    // Draw enemies
    enemies.forEach(enemy => enemy.draw());
    
    // Draw explosions
    explosions.forEach(explosion => explosion.draw());
}

/**
 * Main game loop
 */
function gameLoop() {
    update();
    render();
    
    if (gameState.isRunning) {
        requestAnimationFrame(gameLoop);
    }
}

/**
 * Start the game
 */
function startGame() {
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameOver').classList.add('hidden');
    initGame();
    
    // Start background music
    audioManager.startMusic();
    
    gameLoop();
}

/**
 * Handle game over
 */
function gameOver() {
    gameState.isRunning = false;
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('gameOver').classList.remove('hidden');
    
    // Stop music and play game over sound
    audioManager.stopMusic();
    audioManager.playGameOver();
}

/**
 * Restart the game
 */
function restartGame() {
    startGame();
}

// ===========================================
// EVENT LISTENERS
// ===========================================
document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', restartGame);

// ===========================================
// AUDIO UI SETUP
// ===========================================

/**
 * Initialize audio UI controls
 */
function initAudioUI() {
    // Get UI elements
    const masterMuteCheckbox = document.getElementById('masterMute');
    const sfxEnabledCheckbox = document.getElementById('sfxEnabled');
    const musicEnabledCheckbox = document.getElementById('musicEnabled');
    const sfxVolumeSlider = document.getElementById('sfxVolume');
    const musicVolumeSlider = document.getElementById('musicVolume');
    const sfxVolumeValue = document.getElementById('sfxVolumeValue');
    const musicVolumeValue = document.getElementById('musicVolumeValue');
    const toggleSettingsBtn = document.getElementById('toggleSettings');
    const settingsPanel = document.getElementById('settingsPanel');
    
    // Load saved settings into UI
    masterMuteCheckbox.checked = audioManager.settings.masterMute;
    sfxEnabledCheckbox.checked = audioManager.settings.sfxEnabled;
    musicEnabledCheckbox.checked = audioManager.settings.musicEnabled;
    sfxVolumeSlider.value = audioManager.settings.sfxVolume;
    musicVolumeSlider.value = audioManager.settings.musicVolume;
    sfxVolumeValue.textContent = audioManager.settings.sfxVolume + '%';
    musicVolumeValue.textContent = audioManager.settings.musicVolume + '%';
    
    // Toggle settings panel
    toggleSettingsBtn.addEventListener('click', () => {
        settingsPanel.classList.toggle('open');
        toggleSettingsBtn.classList.toggle('open');
    });
    
    // Master mute
    masterMuteCheckbox.addEventListener('change', (e) => {
        audioManager.setMasterMute(e.target.checked);
    });
    
    // SFX enabled toggle
    sfxEnabledCheckbox.addEventListener('change', (e) => {
        audioManager.toggleSfx(e.target.checked);
    });
    
    // Music enabled toggle
    musicEnabledCheckbox.addEventListener('change', (e) => {
        audioManager.toggleMusic(e.target.checked);
    });
    
    // SFX volume slider
    sfxVolumeSlider.addEventListener('input', (e) => {
        const volume = parseInt(e.target.value);
        audioManager.setSfxVolume(volume);
        sfxVolumeValue.textContent = volume + '%';
    });
    
    // Music volume slider
    musicVolumeSlider.addEventListener('input', (e) => {
        const volume = parseInt(e.target.value);
        audioManager.setMusicVolume(volume);
        musicVolumeValue.textContent = volume + '%';
    });
}

/**
 * Setup audio unlock overlay
 */
function setupAudioUnlock() {
    const audioUnlock = document.getElementById('audioUnlock');
    const unlockBtn = document.getElementById('unlockBtn');
    
    // Function to unlock audio
    const unlockAudio = () => {
        if (!audioManager.isUnlocked) {
            audioManager.init();
            audioUnlock.classList.add('hidden');
            
            // Play a brief test sound to confirm unlock
            audioManager.playShoot();
            // If the game is already running, start music after unlock (if enabled)
            if (gameState.isRunning && audioManager.settings.musicEnabled) {
                audioManager.startMusic();
            }
        }
    };
    
    // Unlock on button click
    unlockBtn.addEventListener('click', unlockAudio);
    
    // Also unlock on any key press or click
    const globalUnlock = () => {
        if (!audioManager.isUnlocked) {
            audioManager.init();
            audioUnlock.classList.add('hidden');
            // If the game is already running, start music after unlock (if enabled)
            if (gameState.isRunning && audioManager.settings.musicEnabled) {
                audioManager.startMusic();
            }

            document.removeEventListener('keydown', globalUnlock);
            document.removeEventListener('click', globalUnlock);
        }
    };
    
    document.addEventListener('keydown', globalUnlock);
    document.addEventListener('click', globalUnlock);
}

// Initialize audio UI and unlock overlay on page load
initAudioUI();
setupAudioUnlock();

// ===========================================
// INITIAL SETUP
// ===========================================
// Draw initial background
ctx.fillStyle = CONFIG.colors.background;
ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);

// Create and draw initial stars for visual appeal
for (let i = 0; i < 100; i++) {
    const star = new Star();
    star.draw();
}
