import './menuEffect.css'

export default function menuEffect(id, clase, texto) {
  const header = document.querySelector('header')
  const divEffect = document.createElement('div')
  divEffect.id = id
  const pEffect = document.createElement('p')
  const pEffect2 = document.createElement('p')
  const imgEffect = document.createElement('img')
  divEffect.classList.add('divEffect', clase)
  pEffect.textContent = texto
  pEffect.classList.add('pEffect1')
  pEffect2.textContent = 'experiencia'
  pEffect2.classList.add('pEffect2')
  imgEffect.src = './assets/arrow_icon.webp'
  imgEffect.classList.add('imgEffect')
  divEffect.append(pEffect, pEffect2, imgEffect)
  header.append(divEffect)
}
