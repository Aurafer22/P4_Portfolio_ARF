import './Designer.css'
export default function Designer() {
  const main = document.querySelector('#main')
  const designer = document.createElement('section')
  designer.id = 'diseño'

  main.append(designer)
}
