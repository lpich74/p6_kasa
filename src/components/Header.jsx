import { Link } from 'react-router-dom'
import LogoKasa from '../assets/LOGO.png'
import '../styles/Header.css';

function Header() {
  return (
    <header className='header-global'>
      <img className='header-logo' src={LogoKasa} alt='Logo Kasa' height={63} width={210}/>
      <nav className='header-nav'>
          <Link to="/" className='header-link'>Accueil</Link>
          <Link to="/about" className='header-link'>A Propos</Link>
      </nav>
    </header>
  )
}

export default Header