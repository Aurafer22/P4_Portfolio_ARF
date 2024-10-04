import './button.css'

export default function createButton(texto, clase, nodoPadre) {
  const button = document.createElement('button')
  button.textContent = texto
  button.classList.add(clase);
  button.type = "button";
  nodoPadre.append(button)
}
