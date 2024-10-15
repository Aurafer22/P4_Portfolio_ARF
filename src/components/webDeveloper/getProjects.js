import { dataProyects } from './dataProjects'

export default function getProjects(nodoPadre) {
  for (const project of dataProyects) {
    const cardProject = document.createElement('div')
    cardProject.classList.add('cardProject', 'flexContainer')
    cardProject.style.background = project.color
    const imgProject = document.createElement('img')
    imgProject.src = project.imagen
    imgProject.title = project.name
    const aProject = document.createElement('a')
    aProject.href = project.url
    aProject.classList.add('aProject')
    aProject.setAttribute('target', '_blank')
    const textProject = document.createElement('p')
    textProject.textContent = project.descripcion
    const iconGitHub = document.createElement('img')
    iconGitHub.src = './assets/icon_GitHub.png'
    iconGitHub.alt = 'Ver código'
    const aCode = document.createElement('a')
    aCode.href = project.codigo
    aCode.classList.add('aGitHub')
    aCode.setAttribute('target', '_blank')

    aProject.append(imgProject)
    aCode.append(iconGitHub)
    cardProject.append(aProject, textProject, aCode)
    nodoPadre.append(cardProject)
  }
}
