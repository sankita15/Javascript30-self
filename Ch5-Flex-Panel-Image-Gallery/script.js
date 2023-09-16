const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    this.classList.add('open')
}

function toggleActive(event) {
    if(event.propertyName.includes('flex')) {
        this.classList.add('open-active')
    }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen))
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive))
