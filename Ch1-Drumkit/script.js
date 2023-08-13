const keys = Array.from(document.querySelectorAll('.key'));
const removeTransition = event => event.target.classList.remove('playing');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))

const playAudio = (event) => {
    const audio = document.querySelector(`audio[data-key=${event.key}]`)
    const letters = document.querySelector(`div[data-key=${event.key}]`)

    if(!audio) return;
    letters.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
}
window.addEventListener('keydown', playAudio)
