import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandReact } from "@tabler/icons-react"


const TCTools = () => {
    return (
        <div className="sitio">
            <a className="bannerTc_Tools" href="https://tc-tools.netlify.app" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>Tc-Tools </strong> surgió como un proyecto personal con el objetivo de poner en practica y mejorar mis habilidades de maquetado, diseño y la utilización de react. Es un sitio que presenta algunas de las herramientas que utilizo en el desarrollo web y que le pueden ser útiles a las personas que visiten Tc-Tools.</p>
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
                <a href="https://tc-tools.netlify.app" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/TC-Tools" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default TCTools