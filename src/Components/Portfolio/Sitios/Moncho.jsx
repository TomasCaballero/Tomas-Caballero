import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandSass } from "@tabler/icons-react"


const Moncho = () => {
    return (
        <div className="sitio">
            <a className="bannerSitioMoncho" href="https://tomascaballero.github.io/Moncho_Caballero/" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>MonchoClothing </strong> es el resultado de mi proyecto final del curso de JavaScript en CoderHouse. Moncho es un e-commerce donde se pueden comprar buzos y remeras, los cuales puedes filtrar si es que estas buscando un producto especifico. Los productos que se agregan al carrito se almacenan en el almacenamiento local para no perder productos seleccionados. Al finalizar la compra se hace uso de la PokeApi para regalarle un Pokemon al comprador.</p>
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
                <a href="https://tomascaballero.github.io/Moncho_Caballero/" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/Moncho_Caballero" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default Moncho