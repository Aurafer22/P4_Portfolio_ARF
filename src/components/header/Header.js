import Contact from '../contact/Contact'
import getNav from '../nav/Nav'
import responsiveNav from '../utils/functionNav'
import menuEffect from '../utils/menuEffect/menuEffect'
import './Header.css'

export default function Header(body) {
  const main = document.querySelector('#main')
  const header = document.createElement('header')
  header.id = 'home'
  const imgHeader = document.createElement('img')
  const menu = document.createElement('nav')
  menu.id = 'nav'
  const ulMenu = document.createElement('ul')
  ulMenu.classList.add('ulMenu', 'flexContainer')
  const contactoMenu = document.createElement('img')
  const aContacto = document.createElement('a')
  const divLogo = document.createElement('div')
  const logo = document.createElement('img')
  const aLogo = document.createElement('a')
  aLogo.href = '#contacto'
  const redesSociales = document.createElement('div')
  const emailIcon = document.createElement('img')
  const aEmail = document.createElement('a')
  aEmail.href = 'mailto:aurafer.comunicacion@gmail.com'
  aEmail.setAttribute('target', '_blank')
  const whatsappIcon = document.createElement('img')
  const aWhatsapp = document.createElement('a')
  aWhatsapp.href = 'https://wa.me/34610028822'
  aWhatsapp.setAttribute('target', '_blank')
  const linkedinIcon = document.createElement('img')
  const aLinkedin = document.createElement('a')
  aLinkedin.href =
    'https://www.linkedin.com/in/auroraram%C3%ADrezfern%C3%A1ndez/'
  aLinkedin.setAttribute('target', '_blank')

  imgHeader.src = '../../../public/assets/montaña_header.webp'
  imgHeader.alt = 'montaña que muestra el recorrido profesional'
  imgHeader.classList.add('imgHeader')
  divLogo.classList.add('divLogo', 'flexContainer')
  divLogo.id = 'divLogo'
  logo.classList.add('logo')
  logo.id = 'logo'
  logo.src = './assets/AuroraRamirez_logo.webp'
  redesSociales.classList.add('redesSociales', 'flexContainer')
  redesSociales.id = 'redesSociales'
  emailIcon.src = './assets/email_icon.webp'
  whatsappIcon.src = './assets/whatsapp_icon.webp'
  linkedinIcon.src = './assets/linkedin_icon.webp'
  contactoMenu.src = './assets/ubication_icon.webp'
  aContacto.href = '#contacto'
  contactoMenu.classList.add('contactoMenu')

  aLogo.append(logo)
  aEmail.append(emailIcon)
  aWhatsapp.append(whatsappIcon)
  aLinkedin.append(linkedinIcon)
  redesSociales.append(aEmail, aWhatsapp, aLinkedin)
  divLogo.append(aLogo, redesSociales)
  menu.append(ulMenu)
  aContacto.append(contactoMenu)
  header.append(menu, imgHeader, aContacto, divLogo)
  document.addEventListener('DOMContentLoaded', () => {
    getNav()
  })
  document.body.insertBefore(header, main)
  document.addEventListener('DOMContentLoaded', () => {
    menuEffect('divEffectCom', 'positionEffect1', '+20 años')
    menuEffect('divEffectMK', 'positionEffect2', '+10 años')
    menuEffect('divEffectDesign', 'positionEffect3', '+5 años')
    menuEffect('divEffectDev', 'positionEffect4', 'iniciando')
    const comunicacionMenu = document.querySelector('#liComunicacion')
    const mkDigitalMenu = document.querySelector('#liDigitalMK')
    const diseñoMenu = document.querySelector('#liDiseño')
    const programacionMenu = document.querySelector('#liProgramación')

    comunicacionMenu.addEventListener('mouseover', (e) => {
      const divEffect = document.querySelector('#divEffectCom')
      divEffect.classList.add('divEffectOK')
    })
    comunicacionMenu.addEventListener('mouseout', (e) => {
      const divEffect = document.querySelector('#divEffectCom')
      divEffect.classList.remove('divEffectOK')
    })
    mkDigitalMenu.addEventListener('mouseover', (e) => {
      const divEffect = document.querySelector('#divEffectMK')
      divEffect.classList.add('divEffectOK')
    })
    mkDigitalMenu.addEventListener('mouseout', (e) => {
      const divEffect = document.querySelector('#divEffectMK')
      divEffect.classList.remove('divEffectOK')
    })
    diseñoMenu.addEventListener('mouseover', (e) => {
      const divEffect = document.querySelector('#divEffectDesign')
      divEffect.classList.add('divEffectOK')
    })
    diseñoMenu.addEventListener('mouseout', (e) => {
      const divEffect = document.querySelector('#divEffectDesign')
      divEffect.classList.remove('divEffectOK')
    })
    programacionMenu.addEventListener('mouseover', (e) => {
      const divEffect = document.querySelector('#divEffectDev')
      divEffect.classList.add('divEffectOK')
    })
    programacionMenu.addEventListener('mouseout', (e) => {
      const divEffect = document.querySelector('#divEffectDev')
      divEffect.classList.remove('divEffectOK')
    })
  })
}
