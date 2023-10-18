import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Inicio from "../Components/Inicio/Inicio"
import SobreMi from "../Components/SobreMi/SobreMi"
import Curriculum from "../Components/Curriculum/Curriculum"
import Portfolio from "../Components/Portfolio/Portfolio"
import Kinefi from "../Components/Portfolio/Sitios/Kinefi"
import Moncho from "../Components/Portfolio/Sitios/Moncho"
import MiTech from "../Components/Portfolio/Sitios/MiTech"
import SneakerNation from "../Components/Portfolio/Sitios/SneakerNation"
import Pokedex from "../Components/Portfolio/Sitios/Pokedex"
import HandOff from "../Components/Portfolio/Sitios/HandOff"
import TCTools from "../Components/Portfolio/Sitios/TCTools"
import RickAndMorty from "../Components/Portfolio/Sitios/RickAndMorty"
import RutaError from "../Components/RutaError/RutaError"
import DCM from "../Components/Portfolio/Sitios/DCM"
import TomvsGalery from "../Components/Portfolio/Sitios/TomvsGalery"


const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
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
                    <Route path="rick-and-morty" element={<RickAndMorty />} />
                    <Route path="dcm" element={<DCM />} />
                    <Route path="tomvs" element={<TomvsGalery />} />
                </Route>
                <Route path="/*" element={<RutaError />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes