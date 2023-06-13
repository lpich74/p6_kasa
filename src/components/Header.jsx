import { Link, useLocation } from 'react-router-dom'
import LogoKasa from '../assets/LOGO.png'
import '../styles/Header.css';

function Header() {
  const location = useLocation()

  return (
    <header className='header-global'>
      <img className='header-logo' src={LogoKasa} alt='Logo Kasa' height={63} width={210}/>
      <nav className='header-nav'>
          <Link to="/" className={`header-link ${location.pathname === '/' && 'active'}`}>
            Accueil
          </Link>
          <Link to="/about" className={`header-link ${location.pathname === '/about' && 'active'}`}>
            A Propos
          </Link>
      </nav>
    </header>
  )
}

export default Header