import createButton, { createButtonDownload } from '../utils/Button/button'
import getProjects from './getProjects'
import './WebDeveloper.css'
export default function WebDeveloper() {
  const main = document.querySelector('#main')
  const programacion = document.createElement('section')
  programacion.id = 'programacion'
  const divProgramacion = document.createElement('article')
  divProgramacion.classList.add('divProgramacion', 'flexContainer')
  divProgramacion.innerHTML = `
  <h2> Desarrollo Web FullStack</h2>
  <div id="divContentDev" class="flexContainer"> 
  <div class="divTextProg flexContainer">
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.</p>
  <h3>Skills</H3>
  <div class="imgSkills"> 
    <img src="./assets/icono_HTML5.webp" alt="icono HTML5">
    <img src="./assets/icono_CSS3.webp" alt="icono CSS3">
    <img src="./assets/icon_JS.webp" alt="icono JavaScript">
    <img src="./assets/icon_REACT.webp" alt="icono React">
    </div>
    </div>
    <div class="divImgProg"> <img src="./assets/ARF_designer.webp" alt="Proyectos como desarrollador web FullStack"></img> </div>
    </div>`
  const divProyectos = document.createElement('div')
  divProyectos.classList.add('divProyectos')
  const h3Proyectos = document.createElement('h3')
  h3Proyectos.textContent = 'Mis Proyectos'
  const divMisProyectos = document.createElement('div')
  divMisProyectos.classList.add('divMisProyectos', 'flexContainer')
  const divButtonsProg = document.createElement('div')
  divButtonsProg.classList.add('divButtonsProg')

  divProyectos.append(h3Proyectos, divMisProyectos, divButtonsProg)
  programacion.append(divProgramacion, divProyectos)
  createButton(
    'Saber más',
    'secundaryButton',
    'https://wa.me/34610028822',
    divButtonsProg
  )
  createButtonDownload('primaryButton', divButtonsProg)
  main.append(programacion)
  getProjects(divMisProyectos)
}
