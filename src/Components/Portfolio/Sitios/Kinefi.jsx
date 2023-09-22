// import sitios from "./sitios"

import { IconBrandBootstrap, IconBrandCss3, IconBrandHtml5, IconBrandSass } from "@tabler/icons-react"

const Kinefi = () => {

    return (
        <div className="sitio">
            <a className="bannerSitioKinefi" href="https://tomascaballero.github.io/Kinefi_Caballero/" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>Kinefi </strong> es el resultado de mi proyecto final del curso de Desarrollo Web en CoderHouse. Es la maquetación de un sitio donde se pueden obtener servicios de las diferentes areas de la kinesiología, con la intención de facilitar el acceso tanto a profesionales como a equipos de fisioterapia.</p>
            </div>

            <div className="tecnologiasUtilizadas">
                <p><strong>Para el desarrollo de este sitio utilice:</strong></p>
                <div className="tecnologias">
                    <ul>
                        <li>
                            <IconBrandHtml5 color='#E5532D' size={46} stroke={1}/>
                            <h6>HTML5</h6>
                        </li>
                        <li>
                            <IconBrandCss3 color='#2D53E5' size={46} stroke={1} />
                            <h6>CSS3</h6>
                        </li>
                        <li>
                            <IconBrandBootstrap color='#8F1BFC' size={46} stroke={1}/>
                            <h6>BOOTSTRAP</h6>
                        </li>
                        <li>
                            <IconBrandSass color='#CF6B9D' size={46} stroke={1}/>
                            <h6>SASS</h6>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="linksSitio">
                <a href="https://tomascaballero.github.io/Kinefi_Caballero/" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/Kinefi_Caballero" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default Kinefi