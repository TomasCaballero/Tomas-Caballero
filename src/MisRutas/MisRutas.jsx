import { BrowserRouter} from "react-router-dom"
// import Curriculum from "../Components/Curriculum/Curriculum"
// import Inicio from "../Components/Inicio/Inicio"
import Navbar from "../Components/Navbar/Navbar"
// import Portfolio from "../Components/Portfolio/Portfolio"
// import SobreMi from "../Components/SobreMi/SobreMi"
// import Kinefi from "../Components/Portfolio/Sitios/Kinefi"
// import Moncho from "../Components/Portfolio/Sitios/Moncho"
// import MiTech from "../Components/Portfolio/Sitios/MiTech"
// import SneakerNation from "../Components/Portfolio/Sitios/SneakerNation"
// import Pokedex from "../Components/Portfolio/Sitios/Pokedex"
// import HandOff from "../Components/Portfolio/Sitios/HandOff"
// import RutaError from "../Components/RutaError/RutaError"
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop"
// import TCTools from "../Components/Portfolio/Sitios/TCTools"
// import RickAndMorty from "../Components/Portfolio/Sitios/RickAndMorty"
import AnimatedRoutes from "./AnimatedRoutes"





const MisRutas = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop/>
                <Navbar className='navbar' />

                <main className="contenido scrollspy-example">
                    <AnimatedRoutes/>
                </main>
            </BrowserRouter>
        </>
    )
}

export default MisRutas