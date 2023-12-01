var arrow = document.getElementById('arrow')
var instructions = document.getElementById('instructions')

instructions.addEventListener('click', hideArrow)

function hideArrow() {
    arrow.classList.add('d-none')
}