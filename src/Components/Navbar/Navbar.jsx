import { NavLink } from 'react-router-dom'
import './navbar.css'
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react'

const Navbar = () => {
    return (
        <div className='contenedorNavbar'>
            <div className="contenedorImg">
                <NavLink to='/'><div className="miFoto"></div></NavLink>
            </div>

            <nav className='navbar'>
                <ul>
                    <li><NavLink to='/' className={({isActive}) => isActive ? 'link active' : 'link'}>INICIO</NavLink></li>
                    <li><NavLink to='/sobre-mi' className={({isActive}) => isActive ? 'link active' : 'link'}>SOBRE MI</NavLink></li>
                    <li><NavLink to='/curriculum' className={({isActive}) => isActive ? 'link active' : 'link'}>CURRICULUM</NavLink></li>
                    <li><NavLink to='/portfolio' className={({isActive}) => isActive ? 'link active' : 'link'}>PORTFOLIO</NavLink></li>
                </ul>
            </nav>

            <div className="redes">
            <a href='https://www.linkedin.com/in/tomas-bautista-caballero/' target="_blank" rel="noopener noreferrer"><IconBrandLinkedin color='#086B9C' size={32} stroke={1}/></a>
                <a href='https://github.com/TomasCaballero' target="_blank" rel="noopener noreferrer"><IconBrandGithub color='#F1F1F1' size={32} stroke={1}/></a>
                <a href='https://wa.me/+541140720020' target="_blank" rel="noopener noreferrer"><IconBrandWhatsapp color='#2CD46B' size={32} stroke={1}/></a>
            </div>
        </div>
    )
}

export default Navbar