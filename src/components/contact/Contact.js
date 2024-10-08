import createButton, { createButtonDownload } from '../utils/Button/button'
import './Contact.css'

export default function Contact() {
  const main = document.querySelector('#main')
  const contact = document.createElement('section')
  contact.id = 'contacto'
  contact.classList.add('flexContainer')
  const divAbout = document.createElement('article')
  divAbout.classList.add('divAbout', 'flexContainer', 'colum')
  const divH2 = document.createElement('div')
  const h2QuienSoy = document.createElement('h2')
  const aQuienSoy = document.createElement('a')
  h2QuienSoy.textContent = '¿Quién soy?'
  const h2QueHago = document.createElement('h2')
  const aQueHago = document.createElement('a')
  h2QuienSoy.classList.add('check')
  h2QueHago.textContent = '¿Qué hago?'
  const pAbout = document.createElement('p')
  pAbout.textContent =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
  aQueHago.addEventListener('click', () => {
    h2QueHago.classList.add('check')
    h2QuienSoy.classList.remove('check')
    pAbout.textContent =
      'Otro texto diferente que vamos a poner.sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
  })
  aQuienSoy.addEventListener('click', () => {
    h2QuienSoy.classList.toggle('check')
    h2QueHago.classList.remove('check')
    pAbout.textContent =
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
  })

  const divExpert = document.createElement('div')
  divExpert.classList.add('divExpert')
  const iconComunication = document.createElement('img')
  const iconMKD = document.createElement('img')
  const iconDesign = document.createElement('img')
  const iconDev = document.createElement('img')
  const divARF = document.createElement('div')
  divARF.classList.add('divARF', 'flexContainer', 'colum')
  const imgARF = document.createElement('img')
  imgARF.src = './assets/ARF_profile.webp'
  const pARF = document.createElement('p')
  pARF.textContent = 'Si quieres saber más:'

  aQuienSoy.append(h2QuienSoy)
  aQueHago.append(h2QueHago)
  divH2.append(aQuienSoy, aQueHago)
  divExpert.append(iconComunication, iconMKD, iconDesign, iconDev)
  divAbout.append(divH2, pAbout, divExpert)
  divARF.append(imgARF, pARF)
  createButtonDownload(divARF)
  contact.append(divAbout, divARF)
  main.append(contact)
}

// const contactBtn = document.querySelector('.contactoMenu')
// contactBtn.addEventListener('click', () => {
//   Contact()
//   const contact = document.querySelector('#contact')
//   contact.classList.add('animationContact')
// })
