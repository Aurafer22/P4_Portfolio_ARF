export default function responsiveNav() {
  const divLogo = document.querySelector('#divLogo')
  const logo = document.querySelector('#logo')
  const redesSociales = document.querySelector('#redesSociales')
  const menu = document.querySelector('#nav')
  const ulMenu = document.querySelector('#nav > ul')
  const liHome = document.querySelector('#liHome')
  const scroll = window.scrollY
  const view = window.innerHeight
  const devSection = view * 4
  if (scroll > view) {
    divLogo.classList.add('logoSections')
    logo.classList.add('logoSect')
    redesSociales.classList.add('rsSections')
    menu.classList.add('navSections')
    liHome.classList.remove('displayNone')
    liHome.classList.add('flexContainer')
    const liMenu = document.querySelectorAll('.navSections > ul > li > a')
    liMenu.forEach((li) => {
      li.classList.add('navColor')
    })
    divLogo.classList.remove('divLogo')
    if (scroll > devSection) {
      logo.classList.add('logoSectInvert')
      liMenu.forEach((li) => {
        li.classList.remove('navColor')
        li.classList.add('menuColor')
      })
    } else {
      logo.classList.remove('logoSectInvert')
      liMenu.forEach((li) => {
        li.classList.remove('menuColor')
        li.classList.add('navColor')
      })
    }
  } else {
    divLogo.classList.add('divLogo')
    divLogo.classList.remove('logoSections')
    logo.classList.remove('logoSect')
    redesSociales.classList.remove('rsSections')
    menu.classList.remove('navSections')
    liHome.classList.add('displayNone')
    liHome.classList.remove('flexContainer')
    const liMenu = document.querySelectorAll('#nav > ul > li > a')
    liMenu.forEach((li) => {
      li.classList.remove('navColor')
      li.classList.add('menuColor')
    })
  }
}
