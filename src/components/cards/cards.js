import './cards.css'
import { infoCards } from './dataCards'

export default function createCard(parentNode) {
  for (const card of infoCards) {
    const divFlipCard = document.createElement('div')
    divFlipCard.classList.add('divFlipCard')
    const divFlipInner = document.createElement('div')
    divFlipInner.classList.add('divflipInner')
    const divCaraA = document.createElement('div')
    divCaraA.classList.add('caraA')
    divCaraA.style.background = `${card.background}`
    const imgCard = document.createElement('img')
    imgCard.src = `${card.img}`
    const divCaraB = document.createElement('div')
    divCaraB.classList.add('caraB', 'flexContainer')
    divCaraB.style.background = `${card.background}`
    const h3Card = document.createElement('h3')
    h3Card.textContent = `${card.titulo}`
    const pCard = document.createElement('p')
    pCard.textContent = `${card.texto}`

    divCaraA.append(imgCard)
    divCaraB.append(h3Card, pCard)
    divFlipInner.append(divCaraA, divCaraB)
    divFlipCard.append(divFlipInner)
    parentNode.append(divFlipCard)
  }
}
