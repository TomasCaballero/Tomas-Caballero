import { NavLink, Outlet } from 'react-router-dom'
import './portfolio.css'
import Transitions from '../../Transitions/Transitions'
// import sitios from './Sitios/sitios'


// eslint-disable-next-line react-refresh/only-export-components
const Portfolio = () => {
    return (
        <div className='contenedorPortfolio'>
            <h4 className='titulo'>MIS SITIOS</h4>

            <nav className='navSitios'>
                <ul className='ulSitios'>
                    <li className='liSitios'><NavLink to="/portfolio/kinefi" className={({isActive}) => isActive ? 'link active' : 'link'}>KINEFI</NavLink></li>
                    <li className='liSitios'><NavLink to="/portfolio/moncho-clothing" className={({isActive}) => isActive ? 'link active' : 'link'}>MONCHO CLOTHING</NavLink></li>
                    <li className='liSitios'><NavLink to="/portfolio/mi-tech" className={({isActive}) => isActive ? 'link active' : 'link'}>MI TECH</NavLink></li>
                    <li className='liSitios'><NavLink to="/portfolio/sneaker-nation" className={({isActive}) => isActive ? 'link active' : 'link'}>SNEAKER NATION</NavLink></li>
                    {/* <li className='liSitios'><NavLink to="/portfolio/pokedex" className={({isActive}) => isActive ? 'link active' : 'link'}>POKEDEX</NavLink></li> */}
                    <li className='liSitios'><NavLink to="/portfolio/rick-and-morty" className={({isActive}) => isActive ? 'link active' : 'link'}>RICK & MORTY</NavLink></li>
                    <li className='liSitios'><NavLink to="/portfolio/hand-off" className={({isActive}) => isActive ? 'link active' : 'link'}>HAND-OFF</NavLink></li>
                    <li className='liSitios'><NavLink to="/portfolio/tc-tools" className={({isActive}) => isActive ? 'link active' : 'link'}>TC-TOOLS</NavLink></li>
                </ul>
            </nav>

            <div className="contenedorSitios">
                <Outlet />
            </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Transitions(Portfolio)