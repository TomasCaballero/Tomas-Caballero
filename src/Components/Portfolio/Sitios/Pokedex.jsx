import './sitios.css'

const Pokedex = () => {
    return (
        <div className="sitio">
            <a className="bannerSitioPokedex" href="https://pokedex-js-gamma.vercel.app" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>Pokedex </strong> es el resultado de un proyecto personal con el objetivo practicar la utilización de Apis. Es un sitio muy básico y simple, tanto en lógica como a nivel de maquetación.</p>
            </div>

            <div className="tecnologiasUtilizadas">
                <p><strong>Para el desarrollo de este sitio utilice:</strong></p>
                <div className="tecnologias">
                    <ul>
                        <li>
                            <box-icon name='html5' type='logo' color='#ff6624' size='lg' ></box-icon>
                            <h6>HTML5</h6>
                        </li>
                        <li>
                            <box-icon name='css3' type='logo' color='#2455ff' size='lg' ></box-icon>
                            <h6>CSS3</h6>
                        </li>
                        <li>
                            <box-icon name='sass' type='logo' color='#fd649b' size='lg'></box-icon>
                            <h6>SASS</h6>
                        </li>
                        <li>
                            <box-icon name='javascript' type='logo' color='#ffec25' size='lg' ></box-icon>
                            <h6>JAVASCRIPT</h6>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="linksSitio">
                <a href="https://pokedex-js-gamma.vercel.app" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/Pokedex-pokeapi" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default Pokedex