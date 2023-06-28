import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='contenedorNavbar'>
            <div className="contenedorImg">
                <NavLink to='/'><div className="miFoto"></div></NavLink>
            </div>

            <nav className='navbar'>
                <ul>
                    <li><NavLink to='/' className={({isActive}) => isActive ? 'link active' : 'link'}>{/*<div className='iconNavbar'><box-icon name='home' type='solid' color='#ffffff' ></box-icon></div>*/}INICIO</NavLink></li>
                    <li><NavLink to='/sobre-mi' className={({isActive}) => isActive ? 'link active' : 'link'}>{/*<div className='iconNavbar'><box-icon name='user' type='solid' color='#ffffff' ></box-icon></div> */}SOBRE MI</NavLink></li>
                    <li><NavLink to='/curriculum' className={({isActive}) => isActive ? 'link active' : 'link'}>{/*<div className='iconNavbar'><box-icon name='certification' color='#ffffff' ></box-icon></div>*/}CURRICULUM</NavLink></li>
                    <li><NavLink to='/portfolio' className={({isActive}) => isActive ? 'link active' : 'link'}>{/*<div className='iconNavbar'><box-icon name='devices' type='solid' color='#ffffff' ></box-icon></div>*/}PORTFOLIO</NavLink></li>
                </ul>
            </nav>

            <div className="redes">
                <a href='https://www.linkedin.com/in/tomás-bautista-caballero/' target="_blank" rel="noopener noreferrer"><box-icon name='linkedin' type='logo' color='#1555cb' size='md'></box-icon></a>
                <a href='https://github.com/TomasCaballero' target="_blank" rel="noopener noreferrer"><box-icon name='github' type='logo' color='#ffffff' size='md'></box-icon></a>
                <a href='https://wa.me/+541140720020' target="_blank" rel="noopener noreferrer"><box-icon name='whatsapp' type='logo' color='#2ba813' size='md'></box-icon></a>
            </div>
        </div>
    )
}

export default Navbar