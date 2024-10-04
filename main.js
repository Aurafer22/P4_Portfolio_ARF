import Communication from './src/components/communication/Communication.js'
import Contact from './src/components/contact/Contact.js'
import Designer from './src/components/designer/Designer.js'
import DigitalMK from './src/components/digitalMK/DigitalMK.js'
import Header from './src/components/header/Header.js'
import responsiveNav from './src/components/utils/functionNav.js'
import WebDeveloper from './src/components/webDeveloper/WebDeveloper.js'
import './style.css'

Header()
window.addEventListener('scroll', responsiveNav)
const main = document.createElement('main')
main.id = 'main'
document.body.append(main)
Contact()
Communication()
DigitalMK()
Designer()
WebDeveloper()
