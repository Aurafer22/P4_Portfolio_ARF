import { dataNav } from './dataNav'
import './Nav.css'

export default function getNav() {
  const ulMenu = document.querySelector('.ulMenu')
  for (const element of dataNav) {
    const li = document.createElement('li')
    li.id = element.id
    const ancor = document.createElement('a')
    const img = document.createElement('img')
    li.classList.add(element.clase)
    ancor.href = element.href
    ancor.textContent = element.nombre
    ancor.classList.add('menuColor')
    img.src = './assets/arrow_icon.webp'
    img.classList.add('icon')

    li.append(ancor, img)
    ulMenu.append(li)
  }
}
