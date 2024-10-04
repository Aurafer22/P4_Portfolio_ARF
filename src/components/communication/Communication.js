import createCard from '../cards/cards'
import cardChange from '../utils/cardChange'
import './Communication.css'

export default function Communication() {
  const main = document.querySelector('#main')
  const menu = document.querySelector('nav')
  const comunicacion = document.createElement('section')
  comunicacion.id = 'comunicacion'
  comunicacion.classList.add('comunicacion')
  const h2Comunicacion = document.createElement('h2')
  h2Comunicacion.textContent = 'COMUNICACIÓN'
  const pComunicacion = document.createElement('p')
  pComunicacion.textContent =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.'
  const divContainer = document.createElement('div')
  divContainer.classList.add('cardsComunicacion', 'flexContainer')

  createCard(divContainer)
  comunicacion.append(h2Comunicacion, pComunicacion, divContainer)
  main.append(comunicacion)
}
