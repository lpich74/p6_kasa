import { Link } from 'react-router-dom'
import LogoKasa from '../assets/LOGO.png'
import '../styles/Header.css';

function Header() {
  return (
    <header className='header-global'>
      <img src={LogoKasa} alt='Logo Kasa' height={63} width={210}/>
      <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header