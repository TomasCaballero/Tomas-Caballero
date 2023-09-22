import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandReact } from "@tabler/icons-react"


const RickAndMorty = () => {
    return (
        <div className="sitio">
            <a className="bannerRickMorty" href="https://rick-and-morty-tomas-caballero.netlify.app" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>Rick & Morty API</strong> es el resultado de un proyecto personal con el objetivo practicar la utilización de Apis. Es un sitio muy simple, tanto en lógica como a nivel de maquetación.</p>
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
                            <IconBrandJavascript color='#F7E025' size={46} stroke={1}/>
                            <h6>JAVASCRIPT</h6>
                        </li>
                        <li>
                            <IconBrandReact color='#66DBFB' size={46} stroke={1}/>
                            <h6>REACT JS</h6>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="linksSitio">
                <a href="https://rick-and-morty-tomas-caballero.netlify.app" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/rick-and-morty" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default RickAndMorty