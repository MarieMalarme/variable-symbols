const random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const body = document.querySelector('body')

const maxWeight = 300
const minWeight = 100
const diff = maxWeight - minWeight

const { innerWidth, innerHeight } = window

const os = [...Array(30).keys()]
const letters = ['A', 'B']

const create = () => {
  os.forEach((i) => {
    const o = document.createElement('div')
    o.className = 'o'
    o.textContent = letters[random(0, 1)]
    o.style.top = `${random(0, innerHeight) - 100}px`
    o.style.left = `${random(0, innerWidth) - 100}px`
    body.append(o)
  })
}

document.addEventListener('click', ({ clientX, clientY }) => {
  const removed = [...document.querySelectorAll('.o')]
  removed.forEach((r) => r.remove())
  create()
})

document.addEventListener('mousemove', ({ clientX, clientY }) => {
  const weight = calc(clientY / innerHeight, diff) + minWeight
  const fonts = [...document.querySelectorAll('.o')]
  fonts.forEach((font) => {
    font.style.fontVariationSettings = `"wght" ${weight}`
  })

  const luminosity = calc(clientY / 2 / innerHeight, 360)
  body.style.background = `hsl(${luminosity}, 50%, 30%)`
})

const calc = (number, max) =>
  Math.round(Math.min(max, Math.max(0, max * number)))
