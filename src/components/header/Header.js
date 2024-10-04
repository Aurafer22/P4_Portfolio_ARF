import Contact from '../contact/Contact'
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
  const comunicacionMenu = document.createElement('li')
  const aComunicacion = document.createElement('a')
  const imgComunicacion = document.createElement('img')
  const mkDigitalMenu = document.createElement('li')
  const aMKDigital = document.createElement('a')
  const imgMKDigital = document.createElement('img')
  const diseñoMenu = document.createElement('li')
  const aDiseño = document.createElement('a')
  const imgDiseño = document.createElement('img')
  const programacionMenu = document.createElement('li')
  const aProgramacion = document.createElement('a')
  const imgProgramacion = document.createElement('img')
  const contactoMenu = document.createElement('img')
  const aContacto = document.createElement('a')
  const divLogo = document.createElement('div')
  const logo = document.createElement('img')
  const aLogo = document.createElement('a')
  const redesSociales = document.createElement('div')
  const emailIcon = document.createElement('img')
  const aEmail = document.createElement('a')
  const whatsappIcon = document.createElement('img')
  const aWhatsapp = document.createElement('a')
  const linkedinIcon = document.createElement('img')
  const aLinkedin = document.createElement('a')

  imgHeader.src = '../../../public/assets/montaña_header.webp'
  imgHeader.alt = 'montaña que muestra el recorrido profesional'
  imgHeader.classList.add('imgHeader')
  ulMenu.classList.add('ulMenu', 'flexContainer')
  comunicacionMenu.classList.add('flexContainer')
  aComunicacion.textContent = 'Comunicación'
  aComunicacion.href = '#comunicacion'
  imgComunicacion.src = './assets/arrow_icon.webp'
  imgComunicacion.classList.add('icon')
  mkDigitalMenu.classList.add('flexContainer')
  aMKDigital.textContent = 'Marketing Digital'
  aMKDigital.href = '#digitalMK'
  imgMKDigital.src = './assets/arrow_icon.webp'
  imgMKDigital.classList.add('icon')
  diseñoMenu.classList.add('flexContainer')
  aDiseño.textContent = 'Diseño'
  aDiseño.href = '#diseño'
  imgDiseño.src = './assets/arrow_icon.webp'
  imgDiseño.classList.add('icon')
  programacionMenu.classList.add('flexContainer')
  aProgramacion.textContent = 'Desarrollo Web'
  aProgramacion.href = '#programacion'
  imgProgramacion.src = './assets/arrow_icon.webp'
  imgProgramacion.classList.add('icon')
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

  comunicacionMenu.append(aComunicacion, imgComunicacion)
  mkDigitalMenu.append(aMKDigital, imgMKDigital)
  diseñoMenu.append(aDiseño, imgDiseño)
  programacionMenu.append(aProgramacion, imgProgramacion)
  aContacto.append(contactoMenu)
  ulMenu.append(comunicacionMenu, mkDigitalMenu, diseñoMenu, programacionMenu)
  menu.append(ulMenu)
  aLogo.append(logo)
  aEmail.append(emailIcon)
  aWhatsapp.append(whatsappIcon)
  aLinkedin.append(linkedinIcon)
  redesSociales.append(aEmail, aWhatsapp, aLinkedin)
  divLogo.append(aLogo, redesSociales)
  header.append(menu, imgHeader, aContacto, divLogo)
  document.body.insertBefore(header, main)

  menuEffect('divEffectCom', 'positionEffect1', '+20 años')
  menuEffect('divEffectMK', 'positionEffect2', '+10 años')
  menuEffect('divEffectDesign', 'positionEffect3', '+5 años')
  menuEffect('divEffectDev', 'positionEffect4', 'iniciando')
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
}
