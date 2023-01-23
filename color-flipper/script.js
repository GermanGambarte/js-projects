import { HEX, named } from './colors.js'

const container = document.querySelector('.bg-container')
const nav = document.querySelector('.nav-wrapper_btn')
const colorText = document.querySelector('.bg-color')
const randomIdx = (value) => {
  return Math.floor(Math.random() * value)
}
let amount
let type = 'named'

const insertColor = (color) => {
  container.style.background = `${color}`
  colorText.textContent = `${color}`
}

const methods = {
  named: () => {
    amount = 147
    insertColor(named[randomIdx(amount)])
  },
  hex: () => {
    let color = '#'
    amount = 16
    for (let i = 0; i < 6; i++) {
      color += String(HEX[randomIdx(amount)])
    }
    insertColor(color)
  }
}

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    type = e.target.textContent.toLowerCase()
  }
})

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // eslint-disable-next-line no-unused-expressions
    methods[type]()
  }
})
