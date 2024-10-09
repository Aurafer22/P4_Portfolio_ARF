import './Designer.css'
import { brandingData, maquetacionData, UIXData } from './designerData'
import getExamples from './getExamples'
export default function Designer() {
  const main = document.querySelector('#main')
  const design = document.createElement('section')
  design.id = 'diseño'
  design.classList.add('flexContainer')
  const divDesign = document.createElement('article')
  divDesign.classList.add('divDesign', 'flexContainer')
  const h2Design = document.createElement('h2')
  h2Design.textContent = 'Diseño'
  const pDesign = document.createElement('p')
  pDesign.textContent =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

  const ulDesign = document.createElement('ul')
  ulDesign.classList.add('flexContainer')
  const liBranding = document.createElement('li')
  liBranding.classList.add('check')
  const aBranding = document.createElement('a')
  aBranding.textContent = 'Branding'
  const liMaquetacion = document.createElement('li')
  const aMaquetacion = document.createElement('a')
  aMaquetacion.textContent = 'Maquetación'
  const liUIX = document.createElement('li')
  const aUIX = document.createElement('a')
  aUIX.textContent = 'Diseño UIX'
  const divEjemplos = document.createElement('div')
  divEjemplos.classList.add('divEjemplos', 'flexContainer')

  liBranding.append(aBranding)
  liMaquetacion.append(aMaquetacion)
  liUIX.append(aUIX)
  ulDesign.append(liBranding, liMaquetacion, liUIX)
  divDesign.append(h2Design, pDesign, ulDesign, divEjemplos)
  design.append(divDesign)
  main.append(design)
  const examplesLogo = getExamples(brandingData, 'logoExample', divEjemplos)
  liBranding.addEventListener('click', () => {
    liBranding.classList.add('check')
    liMaquetacion.classList.remove('check')
    liUIX.classList.remove('check')
    getExamples(brandingData, 'logoExample', divEjemplos)
  })
  liMaquetacion.addEventListener('click', () => {
    liBranding.classList.remove('check')
    liMaquetacion.classList.add('check')
    liUIX.classList.remove('check')
    getExamples(maquetacionData, 'maquetacionExamp', divEjemplos)
  })
  liUIX.addEventListener('click', () => {
    liBranding.classList.remove('check')
    liMaquetacion.classList.remove('check')
    liUIX.classList.add('check')
    getExamples(UIXData, 'UIXexamp', divEjemplos)
  })
}
