import createButton from '../utils/Button/button'
import './DigitalMK.css'

export default function DigitalMK() {
  const main = document.querySelector('#main')
  const digitalMK = document.createElement('section')
  digitalMK.id = 'digitalMK'
  digitalMK.classList.add('flexContainer')
  const h2DigitalMK = document.createElement('h2')
  h2DigitalMK.textContent = 'MARKETING DIGITAL'
  const divContentDMK = document.createElement('div')
  divContentDMK.id = 'divContent'
  divContentDMK.classList.add('flexContainer')
  const divIMGdigitalMK = document.createElement('div')
  divIMGdigitalMK.classList.add('divIMG')
  const imgDMK = document.createElement('img')
  imgDMK.src = './assets/ARF_digitalMK.webp'
  const divTextDMK = document.createElement('div')
  divTextDMK.classList.add('flexContainer', 'divTextDMK')
  const pDigitalMK = document.createElement('p')
  pDigitalMK.textContent =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.'
  const divUlDMK = document.createElement('div')
  divUlDMK.classList.add('flexContainer', 'divUlDMK')
  const ulDMK = document.createElement('ul')
  const liDMK1 = document.createElement('li')
  liDMK1.textContent = '✔️ Laoreet dolore magna aliquam'
  const liDMK2 = document.createElement('li')
  liDMK2.textContent = '✔️ Laoreet dolore magna aliquam'
  const liDMK3 = document.createElement('li')
  liDMK3.textContent = '✔️ Laoreet dolore magna aliquam'
  const liDMK4 = document.createElement('li')
  liDMK4.textContent = '✔️ Laoreet dolore magna aliquam'
  const ulDMK2 = document.createElement('ul')
  const li2DMK1 = document.createElement('li')
  li2DMK1.textContent = '✔️ Laoreet dolore magna aliquam'
  const li2DMK2 = document.createElement('li')
  li2DMK2.textContent = '✔️ Laoreet dolore magna aliquam'
  const li2DMK3 = document.createElement('li')
  li2DMK3.textContent = '✔️ Laoreet dolore magna aliquam'
  const li2DMK4 = document.createElement('li')
  li2DMK4.textContent = '✔️ Laoreet dolore magna aliquam'
  const divButtons = document.createElement('div')
  divButtons.classList.add('flexContainer', 'divButtons')
  createButton('Saber más', 'secundaryButton', divButtons)
  createButton('Descargar CV', 'primaryButton', divButtons)

  ulDMK.append(liDMK1, liDMK2, liDMK3, liDMK4)
  ulDMK2.append(li2DMK1, li2DMK2, li2DMK3, li2DMK4)
  divUlDMK.append(ulDMK, ulDMK2)
  divTextDMK.append(pDigitalMK, divUlDMK, divButtons)
  divIMGdigitalMK.append(imgDMK)
  divContentDMK.append(divIMGdigitalMK, divTextDMK)
  digitalMK.append(h2DigitalMK, divContentDMK)
  main.append(digitalMK)
}
