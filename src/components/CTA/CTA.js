import createButton, { createButtonDownload } from '../utils/Button/button'
import './CTA.css'
export default function CTA() {
  const main = document.querySelector('#main')
  const CTA = document.createElement('div')
  CTA.id = 'CTA'
  CTA.innerHTML = `
  <div class="divCTA flexContainer">
  <h2>¿Hablamos?</h2>
  <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
  <div class="contentCTA flexContainer">
  <div><img src="./assets/avatar_ARF.webp" alt="avatar Aurora Ramírez"></div>
  <div><h3>Te dejo mis datos de contacto</h3>
  <ul>
  <li>Teléfono: +34 610 028 822</li>
  <li>Email: <a href="">aurafer.comunicacion@gmail.com</a></li>
  <li>Encuéntrame en: <a href="">LinkedIn</a></li>
  </ul>
  <div class="divButtonCTA"> </div>
  </div>
  </div>
  </div>
  `
  main.append(CTA)
  const divButtonCTA = document.querySelector('.divButtonCTA')
  createButtonDownload('secundaryButton', divButtonCTA)
}
