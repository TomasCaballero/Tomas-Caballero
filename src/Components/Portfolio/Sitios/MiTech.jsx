

const MiTech = () => {
    return (
        <div className="sitio">
            <a className="bannerSitioMiTech" href="https://mitechreact-caballero.vercel.app" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>MiTech </strong> es el resultado de mi proyecto final del curso de React JS en CoderHouse. Es un e-commerce de celulares, los cuales pueden ser filtrados por marca. Al seleccionar un teléfono se puede acceder a las características de dicho celular y al agregarlo al carrito también se guarda en el almacenamiento local. Al ingresar al carrito, el cual es un Offcanvas de Bootstrap, se muestran los productos que contiene y que pueden ser eliminados. Al finalizar la compra se le piden ciertos datos al comprador, el cual va a recibir un código de orden de compra.</p>
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
                <a href="https://mitechreact-caballero.vercel.app" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/MiTechReact-Caballero" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default MiTech