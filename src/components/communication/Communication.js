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

  const divflipEstrategia = document.createElement('div')
  divflipEstrategia.id = 'divFlipEstrategia'
  const divEstrategia1 = document.createElement('div')
  const imgEstrategia = document.createElement('img')
  imgEstrategia.src = './assets/ARF_estratetgy.webp'
  const divEstrategia2 = document.createElement('article')
  const h3Estrategia = document.createElement('h3')
  h3Estrategia.textContent = 'Estrategia'
  const pEstrategia = document.createElement('p')
  pEstrategia.textContent =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.'
  divEstrategia1.classList.add(`caraA`)
  divEstrategia2.classList.add(`caraB`)

  const divflipMedios = document.createElement('div')
  divflipMedios.id = 'divFlipMedios'
  const divMedios1 = document.createElement('div')
  const imgMedios = document.createElement('img')
  imgMedios.src = './assets/ARF_media.webp'
  const divMedios2 = document.createElement('article')
  const h3Medios = document.createElement('h3')
  h3Medios.textContent = 'Medios'
  const pMedios = document.createElement('p')
  pMedios.textContent =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.'
  divMedios1.classList.add(`caraA`)
  divMedios2.classList.add(`caraB`)

  const divflipEventos = document.createElement('div')
  divflipEventos.id = 'divFlipEventos'
  const divEventos1 = document.createElement('div')
  const imgEventos = document.createElement('img')
  imgEventos.src = './assets/ARF_events.webp'
  const divEventos2 = document.createElement('article')
  const h3Eventos = document.createElement('h3')
  h3Eventos.textContent = 'Eventos'
  const pEventos = document.createElement('p')
  pEventos.textContent =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.'
  divEventos1.classList.add(`caraA`)
  divEventos2.classList.add(`caraB`)

  divEstrategia1.append(imgEstrategia)
  divEstrategia2.append(h3Estrategia, pEstrategia)
  divflipEstrategia.append(divEstrategia1, divEstrategia2)
  divMedios1.append(imgMedios)
  divMedios2.append(h3Medios, pMedios)
  divflipMedios.append(divMedios1, divMedios2)
  divEventos1.append(imgEventos)
  divEventos2.append(h3Eventos, pEventos)
  divflipEventos.append(divEventos1, divEventos2)
  divContainer.append(divflipEstrategia, divflipMedios, divflipEventos)
  comunicacion.append(h2Comunicacion, pComunicacion, divContainer)
  main.append(comunicacion)

  divflipEstrategia.addEventListener('click', () =>
    cardChange(divEstrategia1, divEstrategia2)
  )
  divflipMedios.addEventListener('click', () =>
    cardChange(divMedios1, divMedios2)
  )
  divflipEventos.addEventListener('click', () =>
    cardChange(divEventos1, divEventos2)
  )
}
