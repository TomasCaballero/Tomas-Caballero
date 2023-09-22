import { IconBrandBootstrap, IconBrandCss3, IconBrandHtml5, IconBrandSass } from "@tabler/icons-react"


const HandOff = () => {
    return (
        <div className="sitio">
            <a className="bannerSitioHandOff" href="https://tomascaballero.github.io/Abp-HandOff/" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>Hand-off </strong> es un sitio creado para transmitirle a los/as jugadores/as de Rugby como se debe realizar la técnica de evaluación hand-off. Fue utilizado como presentación de un trabajo de investigación de la Universidad de Buenos Aires de la carrera en Licenciatura en Kinesiología y Fisiatría.</p>
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
                <a href="https://tomascaballero.github.io/Abp-HandOff/" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/Abp-HandOff" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default HandOff