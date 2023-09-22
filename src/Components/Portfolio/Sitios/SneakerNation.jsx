import { IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandReact, IconBrandSass } from "@tabler/icons-react"


const SneakerNation = () => {
    return (
        <div className="sitio">
            <a className="bannerSitioSneakerNation" href="https://sneaker-nation.vercel.app" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>SneakerNatios </strong> es el resultado de un proyecto personal el cual me sirvió para mejorar mis habilidades con React JS. SneakerNation es un e-commerce de zapatillas Nike. En este sitio, las zapatillas se pueden filtrar por modelo y precio máximo, y ordenar las zapatillas por precio creciente o decreciente. Al seleccionar un modelo se van a mostrar varias fotos de esas zapatillas y el comprador lo va a poder agregar al carrito seleccionando el talle de su interés.  Al ingresar al carrito, el cual es un Offcanvas de Bootstrap, se muestran los productos que contiene y que pueden ser eliminados. Al finalizar la compra se le piden ciertos datos al comprador.</p>
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
                        <li>
                            <IconBrandReact color='#66DBFB' size={46} stroke={1}/>
                            <h6>REACT JS</h6>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="linksSitio">
                <a href="https://sneaker-nation.vercel.app" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/SneakerNation" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default SneakerNation