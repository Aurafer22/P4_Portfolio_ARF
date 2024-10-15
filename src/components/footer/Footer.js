import getNav from '../nav/Nav'
import './Footer.css'
export default function Footer() {
  const main = document.querySelector('#main')
  const footer = document.createElement('footer')
  footer.id = 'footer'
  const aLogo = document.createElement('a')
  const logo = document.createElement('img')
  logo.src = './assets/AuroraRamirez_logo.webp'
  logo.alt = 'logo Aurora Ramírez'
  const register = document.createElement('p')
  register.textContent = 'Web diseñada y programada por @ARF'
  footer.append(logo, register)
  main.append(footer)
}
