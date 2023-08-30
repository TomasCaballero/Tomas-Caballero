// import sitios from "./sitios"

const Kinefi = () => {
    // const sitioFiltrado = sitios.filter((nombreComponente) => nombreComponente.nombreComponente === 'Kinefi');
    // console.log(sitioFiltrado)
    return (
        <div className="sitio">
            {/* {
                sitioFiltrado.map((sitio) => {
                    return (
                        <div className="sitio" key={sitio.nombreComponente}>
                            <a className={sitio.classBanner} href={sitio.imgBanner} target="_blank" rel="noopener noreferrer">

                            </a>

                            <div className="descripcionSitio">
                                <p><strong>{sitio.nombreComponente} </strong>{sitio.descripcion}</p>
                            </div>

                            <div className="tecnologiasUtilizadas">
                                <p><strong>Para el desarrollo de este sitio utilice:</strong></p>
                                <div className="tecnologias">
                                    <ul>
                                        {
                                            sitio.tecnologias.map((tecno) => {
                                                return (
                                                    <li key={tecno.nombre}>
                                                        <box-icon name={tecno.name} type='logo' color={tecno.color} size='lg' ></box-icon>
                                                        <h6>{tecno.nombre}</h6>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="linksSitio">
                                <a href={sitio.linkSitio} target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                                <a href={sitio.linkRepo} target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                            </div>
                        </div>

                    )
                })
            } */}
            <a className="bannerSitioKinefi" href="https://tomascaballero.github.io/Kinefi_Caballero/" target="_blank" rel="noopener noreferrer">

            </a>

            <div className="descripcionSitio">
                <p><strong>Kinefi </strong> es el resultado de mi proyecto final del curso de Desarrollo Web en CoderHouse. Es la maquetación de un sitio donde se pueden obtener servicios de las diferentes areas de la kinesiología, con la intención de facilitar el acceso tanto a profesionales como a equipos de fisioterapia.</p>
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
                            <box-icon name='bootstrap' type='logo' color='#9b077a' size='lg'></box-icon>
                            <h6>BOOTSTRAP</h6>
                        </li>
                        <li>
                            <box-icon name='sass' type='logo' color='#fd649b' size='lg'></box-icon>
                            <h6>SASS</h6>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="linksSitio">
                <a href="https://tomascaballero.github.io/Kinefi_Caballero/" target="_blank" rel="noopener noreferrer"><strong>Link al Sitio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
                <a href="https://github.com/TomasCaballero/Kinefi_Caballero" target="_blank" rel="noopener noreferrer"><strong>Link al Repositorio <box-icon name='link-alt' color='#ffffff'></box-icon></strong></a>
            </div>
        </div>
    )
}

export default Kinefi