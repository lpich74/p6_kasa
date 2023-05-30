import LogoKasa from '../assets/LOGOfooter.png'
import '../styles/Footer.css';

function Footer() {
    return (
      <footer className='footer-global'>
        <img className='footer-logo' src={LogoKasa} alt='Logo Kasa' height={36} width={122}/>
        <span>© 2020 Kasa. All rights reserved</span>
      </footer>
    )
  }
  
  export default Footer