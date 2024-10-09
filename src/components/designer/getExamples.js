export default function getExamples(work, clase, nodoPadre) {
  nodoPadre.innerHTML = ''
  for (const element of work) {
    console.log('añadiendo imagen', element.src)
    const img = document.createElement('img')
    img.src = element.src
    img.alt = element.name
    img.classList.add(clase)
    nodoPadre.append(img)
  }
}
