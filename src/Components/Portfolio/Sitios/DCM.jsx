import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandSass } from "@tabler/icons-react"


const DCM = () => {
    return (
        <div className="sitio">
            <a className="bannerSitioDCM" href="https://tomascaballero.github.io/DigaloConMimica/" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>Dígalo Con Mímica</strong> es un sitio para jugar al dígalo con mímica con amigos, contiene mas de 500 títulos de películas.</p>
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
                            <IconBrandSass color='#CF6B9D' size={46} stroke={1}/>
                            <h6>SASS</h6>
                        </li>
                        <li>
                            <IconBrandJavascript color='#F7E025' size={46} stroke={1}/>
                            <h6>JAVASCRIPT</h6>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="linksSitio">
                <a href="https://tomascaballero.github.io/DigaloConMimica/" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/DigaloConMimica" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default DCM