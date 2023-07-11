import { BrowserRouter, Route, Routes } from "react-router-dom"
import Curriculum from "../Components/Curriculum/Curriculum"
import Inicio from "../Components/Inicio/Inicio"
import Navbar from "../Components/Navbar/Navbar"
import Portfolio from "../Components/Portfolio/Portfolio"
import SobreMi from "../Components/SobreMi/SobreMi"
import Kinefi from "../Components/Portfolio/Sitios/Kinefi"
import Moncho from "../Components/Portfolio/Sitios/Moncho"
import MiTech from "../Components/Portfolio/Sitios/MiTech"
import SneakerNation from "../Components/Portfolio/Sitios/SneakerNation"
import Pokedex from "../Components/Portfolio/Sitios/Pokedex"
import HandOff from "../Components/Portfolio/Sitios/HandOff"
import RutaError from "../Components/RutaError/RutaError"
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop"
import TCTools from "../Components/Portfolio/Sitios/TCTools"





const MisRutas = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop/>
                <Navbar className='navbar' />

                <main data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="contenido scrollspy-example">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/inicio" element={<Inicio />} />
                        <Route path="/sobre-mi" element={<SobreMi />} />
                        <Route path="/curriculum" element={<Curriculum />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/portfolio/*" element={<Portfolio />}>
                            <Route index element={<Kinefi />} />
                            <Route path="kinefi" element={<Kinefi />} />
                            <Route path="moncho-clothing" element={<Moncho />} />
                            <Route path="mi-tech" element={<MiTech />} />
                            <Route path="sneaker-nation" element={<SneakerNation />} />
                            <Route path="pokedex" element={<Pokedex />} />
                            <Route path="hand-off" element={<HandOff />} />
                            <Route path="tc-tools" element={<TCTools />} />
                        </Route>
                        <Route path="/*" element={<RutaError />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}

export default MisRutas

{/* <BrowserRouter>
                <div className="contenidoGeneral">
                    <Navbar className='navbar'/>
                    
                    <main data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="contenido scrollspy-example">
                        <Routes>
                            <Route path="/" element={<Inicio/>}/>
                            <Route path="/sobre-mi" element={<SobreMi/>}/>
                            <Route path="/curriculum" element={<Curriculum/>}/>
                            <Route path="/portfolio" element={<Portfolio/>}/>
                            <Route path="/portfolio/*" element={<Portfolio/>}>
                                <Route index element={<Kinefi/>}/>
                                <Route path="kinefi" element={<Kinefi/>}/>
                                <Route path="moncho-clothing" element={<Moncho/>}/>
                                <Route path="mi-tech" element={<MiTech/>}/>
                                <Route path="sneaker-nation" element={<SneakerNation/>}/>
                                <Route path="pokedex" element={<Pokedex/>}/>
                                <Route path="hand-off" element={<HandOff/>}/>
                            </Route>
                            <Route path="/*" element={<RutaError/>}/>
                        </Routes>
                    </main>
                </div>
            </BrowserRouter> */}