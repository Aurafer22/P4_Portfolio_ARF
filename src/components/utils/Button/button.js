import './button.css'

export default function createButton(texto, clase, href, nodoPadre) {
  const button = document.createElement('button')
  button.textContent = texto
  button.classList.add(clase)
  button.type = 'button'
  const aButton = document.createElement('a')
  aButton.href = href
  aButton.setAttribute('target', '_blank')
  button.append(aButton)
  nodoPadre.append(button)
  button.addEventListener('click', () => {
    aButton.click()
  })
}

export function createButtonDownload(estilo, nodoPadre) {
  const buttonDownload = document.createElement('button')
  buttonDownload.textContent = 'Descargar CV'
  buttonDownload.classList.add(estilo)
  const aDownload = document.createElement('a')
  aDownload.href = './assets/ARF_CV_2023.pdf'
  aDownload.download = 'CV_AuroraRamirez.pdf'
  aDownload.setAttribute('target', '_blank')
  buttonDownload.append(aDownload)
  nodoPadre.append(buttonDownload)
  buttonDownload.addEventListener('click', () => {
    aDownload.click()
  })
}
