import './WebDeveloper.css'
export default function WebDeveloper() {
  const main = document.querySelector('#main')
  const programacion = document.createElement('section')
  programacion.id = 'programacion'

  main.append(programacion)
}
