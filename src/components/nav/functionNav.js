export default function responsiveNav() {
  const divLogo = document.querySelector('#divLogo')
  const logo = document.querySelector('#logo')
  const redesSociales = document.querySelector('#redesSociales')
  const menu = document.querySelector('#nav')
  const ulMenu = document.querySelector('#nav > ul')
  const liHome = document.querySelector('#liHome')
  const scroll = window.scrollY
  const view = window.innerHeight
  const mediaquery = window.innerWidth
  if (scroll > view) {
    divLogo.classList.add('logoSections')
    logo.classList.add('logoSect')
    logo.classList.remove('logo')
    redesSociales.classList.add('rsSections')
    redesSociales.classList.remove('redesSociales')
    menu.classList.add('navSections')
    liHome.classList.remove('displayNone')
    liHome.classList.add('flexContainer')
    const liMenu = document.querySelectorAll('.navSections > ul > li > a')
    liMenu.forEach((li) => {
      li.classList.add('navColor')
    })
    divLogo.classList.remove('divLogo')
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

  if (mediaquery < 1080 && scroll < view) {
    ulMenu.classList.remove('displayNone')
    divLogo.classList.remove('logoSections')
    divLogo.classList.add('divLogo', 'flexContainer')
    logo.classList.remove('logoSect')
    logo.classList.add('logo')
    redesSociales.classList.remove('rsSections')
    redesSociales.classList.add('redesSociales')
  }

  const sections = document.querySelectorAll('section')
  const liMenu = document.querySelectorAll('#nav > ul > li > a')
  const navMenu = document.querySelector('#nav')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        const liItem = document.querySelector(`nav ul li`)
        const navItem = document.querySelector(
          `nav ul li a[href="#${entry.target.id}"]`
        )
        if (navItem) {
          if (entry.isIntersecting) {
            navItem.classList.add('check')
            if (id === 'programacion') {
              logo.classList.add('logoSectInvert')
              liMenu.forEach((li) => {
                li.classList.remove('navColor')
                li.classList.add('menuColor')
              })
            } else {
              logo.classList.remove('logoSectInvert')
              logo.classList.add('logoSect')
              liMenu.forEach((li) => {
                li.classList.remove('menuColor')
                li.classList.add('navColor')
              })
            }
          } else {
            navItem.classList.remove('check')
          }
        }
      })
    },
    { threshold: 0.5 }
  )
  sections.forEach((section) => {
    observer.observe(section)
  })
}
