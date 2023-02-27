const decrementButtonEl = document.querySelector('[data-decrement]')
const incrementButtonEl = document.querySelector('[data-increment]')
const counterValueEl = document.querySelector('[data-value]')

let counterValue = 0;

const updateCounterValue = () => {
    counterValueEl.textContent = counterValue;
}

decrementButtonEl.addEventListener('click', () => {
    counterValue -= 1
    updateCounterValue()
})

incrementButtonEl.addEventListener('click', () => {
    counterValue += 1
    updateCounterValue()
})

// Generator
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const createButtonEl = document.querySelector('[data-create]')
const destroyButtonEl = document.querySelector('[data-destroy]')
const boxFieldEl = document.querySelector('.box-field')
let elementWeight = 30
function onAddElements() {
    elementsArray = []

    for (let i = 0; i < counterValue; i += 1) {
        
        const box = document.createElement("div")
        box.classList.add("box")
        box.style.cssText = `width: ${elementWeight}px; height: ${elementWeight}px; background: ${getRandomHexColor()}`

        elementsArray.push(box)

        elementWeight += 5
    }

    boxFieldEl.append(...elementsArray)
}

function onDestroyElements() {
    boxFieldEl.innerHTML = ""
    elementWeight = 30
}

createButtonEl.addEventListener('click', onAddElements)
destroyButtonEl.addEventListener('click', onDestroyElements)