document.addEventListener('DOMContentLoaded', () => {
    console.log('BrianCore Portfolio Loaded - Neon Wifi Vibe Active.');

    const audio = document.getElementById('bgAudio');
    const audioBtn = document.getElementById('audioToggleBtn');
    const audioText = document.getElementById('audioText');

    if (audioBtn && audio) {
        audioBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                audioBtn.classList.add('playing');
                audioText.textContent = 'Mute Sound';
            } else {
                audio.pause();
                audioBtn.classList.remove('playing');
                audioText.textContent = 'Play Ambient Sound';
            }
        });
    }
});