export default function responsiveNav() {
  const divLogo = document.querySelector('#divLogo')
  const logo = document.querySelector('#logo')
  const redesSociales = document.querySelector('#redesSociales')
  const menu = document.querySelector('#nav')
  const scroll = window.scrollY
  const view = window.innerHeight
  const devSection = view * 4
  if (scroll > view) {
    divLogo.classList.add('logoSections')
    logo.classList.add('logoSect')
    redesSociales.classList.add('rsSections')
    menu.classList.add('navSections')
    divLogo.classList.remove('divLogo')
    if (scroll > devSection) {
      logo.classList.add('logoSectInvert')
      const liMenu = document.querySelectorAll('.navSections > ul > a > li')
      liMenu.forEach((li) => {
        li.style.color = '#ffffff'
      })
    } else {
      logo.classList.remove('logoSectInvert')
      const liMenu = document.querySelectorAll('.navSections > ul > a > li')
      liMenu.forEach((li) => {
        li.style.color = '#20242e'
      })
    }
  } else {
    divLogo.classList.add('divLogo')
    divLogo.classList.remove('logoSections')
    logo.classList.remove('logoSect')
    redesSociales.classList.remove('rsSections')
    menu.classList.remove('navSections')
  }
}
