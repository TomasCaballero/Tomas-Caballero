

const TCTools = () => {
    return (
        <div className="sitio">
            <a className="bannerTc_Tools" href="https://mitechreact-caballero.vercel.app" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>Tc-Tools </strong> surgio como un proyecto personal con el objetivo de poner en practica y mejorar mis habilidades de maquetado, diseño y la utilizacion de react. Es un sitio que prensenta algunas de las herramientas que utilizo en el desarrollo web y que le pueden ser utiles a las personas que visiten Tc-Tools.</p>
            </div>

            <div className="tecnologiasUtilizadas">
                <p><strong>Para el desarrollo de este sitio utilice:</strong></p>
                <div className="tecnologias">
                    <ul>
                        <li>
                            <box-icon name='html5' type='logo' color='#ff6624' size='lg' ></box-icon>
                            <h6>HTML5</h6>
                        </li>
                        <li><box-icon name='css3' type='logo' color='#2455ff' size='lg' ></box-icon>
                            <h6>CSS3</h6>
                        </li>
                        <li>
                            <box-icon name='javascript' type='logo' color='#ffec25' size='lg' ></box-icon>
                            <h6>JAVASCRIPT</h6>
                        </li>
                        <li>
                            <box-icon name='react' type='logo' color='#36daff' size='lg'></box-icon>
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