const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass()
  })
})

function removeActiveClass() {
  document.querySelector('.active').classList.remove('active')
}
