import './sitios.css'

const SneakerNation = () => {
    return (
        <div className="sitio">
            <a className="bannerSitioSneakerNation" href="https://sneaker-nation.vercel.app" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>SneakerNatios </strong> es el resultado de un proyecto personal el cual me sirvio para mejorar mis habilidades con React JS. SneakerNation es un e-commerce de zapatillas Nike. En este sitio, las zapatillas se pueden filtrar por modelo y precio maximo, y ordenar las zapatillas por precio creciente o decreciente. Al seleccionar un modelo se van a mostrar varias fotos de esas zapatillas y el comprador lo va a poder agregar al carrito seleccionando el talle de su interes.  Al ingresar al carrito, el cual es un Offcanvas de Bootstrap, se muestran los productos que contiene y que pueden ser eliminados. Al finalizar la compra se le piden ciertos datos al comprador.</p>
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
                        <li>
                            <box-icon name='react' type='logo' color='#36daff' size='lg'></box-icon>
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