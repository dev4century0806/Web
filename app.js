/**
 * CYBER STRIKE // Interactive Logic & Audio Engine
 */

// 1. Audio SFX Engine using Web Audio API
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBeep(freq = 440, type = 'sine', duration = 0.08, gainVal = 0.1) {
    if (!this.enabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio not allowed yet:', e);
    }
  }

  playTyping() {
    this.playBeep(600 + Math.random() * 200, 'square', 0.03, 0.02);
  }

  playClick() {
    this.playBeep(880, 'triangle', 0.06, 0.08);
  }

  playLaunch() {
    if (!this.enabled) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.35);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C - E - G - C
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playBeep(freq, 'sine', 0.15, 0.1);
        }, idx * 100);
      });
    } catch (e) {}
  }
}

const sfx = new SoundEngine();

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const passwordInput = document.getElementById('password-input');
  const loginForm = document.getElementById('game-login-form');
  const sfxToggleBtn = document.getElementById('sfx-toggle');
  const sfxStatus = document.getElementById('sfx-status');
  const sfxIcon = document.getElementById('sfx-icon');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const steamButtons = document.querySelectorAll('.brutalist-button');
  
  // Launch Modal elements
  const launchModal = document.getElementById('launch-overlay');
  const closeModalBtn = document.getElementById('close-modal');
  const terminalLogs = document.getElementById('terminal-logs');
  const progressFill = document.getElementById('progress-fill');
  const enterWorldBtn = document.getElementById('btn-enter-world');

  // SFX Toggle
  sfxToggleBtn.addEventListener('click', () => {
    sfx.enabled = !sfx.enabled;
    if (sfx.enabled) {
      sfx.init();
      sfxStatus.textContent = 'ON';
      sfxIcon.textContent = '🔊';
      sfx.playBeep(660, 'sine', 0.08);
    } else {
      sfxStatus.textContent = 'OFF';
      sfxIcon.textContent = '🔇';
    }
  });

  // Sound on user input typing
  userInput.addEventListener('input', () => {
    sfx.playTyping();
  });

  passwordInput.addEventListener('input', () => {
    sfx.playTyping();
  });

  // Password visibility toggle
  togglePasswordBtn.addEventListener('click', () => {
    sfx.playClick();
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordBtn.title = 'Ẩn mật khẩu';
    } else {
      passwordInput.type = 'password';
      togglePasswordBtn.title = 'Hiện mật khẩu';
    }
  });

  // Steam buttons hover / click sound
  steamButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      sfx.playBeep(520, 'triangle', 0.04, 0.03);
    });
    btn.addEventListener('click', () => {
      sfx.playClick();
    });
  });

  // Login Form Submission - Launch Sequence Simulation
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = userInput.value.trim();
    if (!username) {
      userInput.focus();
      return;
    }

    sfx.playLaunch();
    startLaunchSequence(username);
  });

  function startLaunchSequence(user) {
    launchModal.classList.remove('hidden');
    terminalLogs.innerHTML = '';
    progressFill.style.width = '0%';
    enterWorldBtn.classList.add('hidden');

    const steps = [
      { text: `> Đang xác thực tài khoản chiến binh: [${user}]...`, delay: 300, progress: '25%' },
      { text: `> Mã hóa kết nối máy chủ Cyber Strike (Khóa bảo mật AES-256)... [OK]`, delay: 1000, progress: '50%' },
      { text: `> Tải hồ sơ nhân vật & đồng bộ kho đồ vũ khí... [OK]`, delay: 1800, progress: '75%' },
      { text: `> Đăng nhập thành công! Sẵn sàng vào chiến trường.`, delay: 2600, progress: '100%' }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        const log = document.createElement('p');
        log.className = 'log-line';
        log.textContent = step.text;
        terminalLogs.appendChild(log);
        progressFill.style.width = step.progress;
        sfx.playBeep(400 + index * 120, 'sine', 0.05, 0.04);

        if (index === steps.length - 1) {
          sfx.playSuccess();
          enterWorldBtn.classList.remove('hidden');
        }
      }, step.delay);
    });
  }

  // Close modal
  closeModalBtn.addEventListener('click', () => {
    sfx.playClick();
    launchModal.classList.add('hidden');
  });

  enterWorldBtn.addEventListener('click', () => {
    sfx.playSuccess();
    alert(`Chào mừng chiến binh [${userInput.value.trim()}] gia nhập chiến trường Cyber Strike!`);
    launchModal.classList.add('hidden');
  });

  // Optional: subtle interactive mouse tilt on the input container
  const inputContainer = document.getElementById('username-container');
  if (inputContainer) {
    inputContainer.addEventListener('mousemove', (e) => {
      const rect = inputContainer.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = 10 - (y / rect.height) * 12;
      const rotateY = -10 + (x / rect.width) * 12;
      inputContainer.style.transform = `rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg) scale(1.02)`;
    });

    inputContainer.addEventListener('mouseleave', () => {
      inputContainer.style.transform = 'rotateX(10deg) rotateY(-10deg)';
    });
  }
});
