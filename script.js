let soundBackground = document.getElementById('soundBackground');
let soundEffects = document.getElementById('soundEffects');
let soundMusic = document.getElementById('soundMusic');

let overlayAudio2 = document.getElementById('playEffect2');
let overlayAudio3 = document.getElementById('playEffect3');

let backgroundVolumeControl = document.getElementById('backgroundVolume');
let overlayVolumeControl = document.getElementById('overlayVolume');

let backgroundButtons = document.querySelectorAll('.background-button');
let musicButtons = document.querySelectorAll('.music-button');
let effectsButtons = document.querySelectorAll('.effects-button');

let atual = 0;
let atualM = 0;
let atualE = 0;

backgroundButtons.forEach(button => {
    button.addEventListener('click', function () {
        toggleBackgroundAudio(parseInt(this.getAttribute('data-id')), this);
        backgroundButtons.forEach(b => {
            if (b !== this) {
                b.style.color = 'white';
            }
        });
    });
});

effectsButtons.forEach(button => {
    button.addEventListener('click', function () {
        playEffects(parseInt(this.getAttribute('data-id')), this);
        effectsButtons.forEach(b => {
            if (b !== this) {
                b.style.color = 'white';
            }
        });
    });
});
musicButtons.forEach(button => {
    button.addEventListener('click', function () {
        playMusic(parseInt(this.getAttribute('data-id')), this);
        musicButtons.forEach(b => {
            if (b !== this) {
                b.style.color = 'white';
            }
        });
    });
});

function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
}

function toggleTextColor(button) {
    if (button.style.color === 'red') {
        button.style.color = 'white';
    } else {
        button.style.color = 'red';
    }
}

function toggleBackgroundAudio(back, button) {
    const audioSrc = button.getAttribute('data-src');
    if (back === atual && button.style.color === 'red') {
        soundBackground.pause();
        button.style.color = 'white';

    } else if (back === atual && button.style.color === 'white') {
        soundBackground.pause();
        button.style.color = 'red';
        atual = back;
        soundBackground.src = audioSrc;
        soundBackground.play();

    }
    else {
        soundBackground.pause();
        button.style.color = 'red';
        atual = back;
        soundBackground.src = audioSrc;
        soundBackground.play();
    }
}

function playMusic(music, button) {
    const audioSrc = button.getAttribute('data-src');
    if (music === atualM && button.style.color === 'red') {
        soundMusic.pause();
        button.style.color = 'white';
    } else if (music === atualM && button.style.color === 'white') {
        soundMusic.pause();
        button.style.color = 'red';
        atualM = music;
        soundMusic.src = audioSrc;
        soundMusic.play();
    } else {
        soundMusic.pause();
        button.style.color = 'red';
        atualM = music;
        soundMusic.src = audioSrc;
        soundMusic.play();
    }
}

function playEffects(effect, button) {
    const audioSrc = button.getAttribute('data-src');
    if (effect === atualE && button.style.color === 'red') {
        soundEffects.pause();
        button.style.color = 'white';
    } else if (effect === atualE && button.style.color === 'white') {
        soundEffects.pause();
        button.style.color = 'red';
        atualE = effect;
        soundEffects.src = audioSrc;
        soundEffects.play();
    } else {
        soundEffects.pause();
        button.style.color = 'red';
        atualE = effect;
        soundEffects.src = audioSrc;
        soundEffects.play();
    }
}

document.getElementById('themeSelector').addEventListener('change', function () {
    const selectedTheme = this.value;
    toggleTheme(selectedTheme);
});

backgroundVolumeControl.addEventListener('input', () => {
    backgroundAudio1.volume = backgroundVolumeControl.value;
    backgroundAudio2.volume = backgroundVolumeControl.value;
    backgroundAudio3.volume = backgroundVolumeControl.value;
    // Adicione mais áudios conforme necessário
});

overlayVolumeControl.addEventListener('input', () => {
    overlayAudio1.volume = overlayVolumeControl.value;
    overlayAudio2.volume = overlayVolumeControl.value;
    overlayAudio3.volume = overlayVolumeControl.value;
    // Adicione mais áudios conforme necessário
});
