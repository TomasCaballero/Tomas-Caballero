import './curriculum.css'


const Curriculum = () => {
    return (
        <div className="contenedorCurriculum">
            <div className="presentacionHabilidades">
                <h3 className='titulo'>Estas son mis habilidades</h3>
                <div className="habilidades">
                    <div className="lenguajes">
                        <h3>Lenguajes de programación</h3>
                        <div className="misLenguajes">
                            <div>
                                <box-icon name='html5' type='logo' color='#ff6624' size='lg' ></box-icon>
                                <h4>HTML5</h4>
                            </div>
                            <div>
                                <box-icon name='css3' type='logo' color='#2455ff' size='lg' ></box-icon>
                                <h4>CSS3</h4>
                            </div>
                            <div>
                                <box-icon name='javascript' type='logo' color='#ffec25' size='lg' ></box-icon>
                                <h4>JAVASCRIPT</h4>
                            </div>
                        </div>
                    </div>
                    <div className="lenguajes">
                        <h3>Frameworks y librerias</h3>
                        <div className="misLenguajes">
                            <div>
                                <box-icon name='bootstrap' type='logo' color='#9b077a' size='lg'></box-icon>
                                <h4>BOOTSTRAP</h4>
                            </div>
                            <div>
                                <box-icon name='react' type='logo' color='#36daff' size='lg'></box-icon>
                                <h4>REACT JS</h4>
                            </div>
                            <div>
                                <box-icon name='sass' type='logo' color='#fd649b' size='lg'></box-icon>
                                <h4>SASS</h4>
                            </div>
                        </div>

                    </div>
                    <div className="lenguajes">
                        <h3>Herramientas</h3>
                        <div className="misLenguajes">
                            <div>
                                <box-icon name='git' type='logo' color='#f26e1b' size='lg'></box-icon>
                                <h4>GIT</h4>
                            </div>
                            <div>
                                <box-icon name='github' type='logo' size='lg'></box-icon>
                                <h4>GITHUB</h4>
                            </div>
                            <div>
                                <box-icon name='visual-studio' type='logo' color='#4685ff' size='lg'></box-icon>
                                <h4>VSC</h4>
                            </div>
                            <div>
                                <box-icon name='figma' type='logo' color='#ff46a4' size='lg'></box-icon>
                                <h4>FIGMA</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="estudios">
                <h3 className='titulo'>Mis estudios</h3>
                <div className="misEstudios">
                    <div className="estudioss">
                        <h5>Estudios Finalizados</h5>
                        <ul>
                            <li><strong>CURSO DE DESARROLLO WEB</strong> - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_blackbg.png/1199px-Logo_blackbg.png" alt="Coderhouse" /></li>
                            <li><strong>CURSO DE JAVASCRIPT</strong> - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_blackbg.png/1199px-Logo_blackbg.png" alt="Coderhouse" /></li>
                            <li><strong>CURSO DE REACT JS</strong> - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_blackbg.png/1199px-Logo_blackbg.png" alt="Coderhouse" /></li>
                        </ul>
                    </div>
                    <div className="estudioss">
                        <h5>Estudios en curso</h5>
                        <ul>
                            <li><strong>MASTER EN REACT JS</strong> - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/1920px-Udemy_logo.svg.png" alt="Udemy" /></li>
                            <li><strong>DIPLOMATURA EN PROGRAMACIÓN WEB FULL STACK</strong> - <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg" alt="UTN" className="utnImg" /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="certificados">
                <h3 className='titulo'>Certificados</h3>
                <div className="misCertificados">
                    <div className="certificadoss">
                        <a href="https://www.coderhouse.com/certificados/62b0fe027c15120021c67340" className="item"
                            target="_blank" rel="noopener noreferrer"><img src="https://live.staticflickr.com/65535/52954548565_cca4b04b96_c.jpg" alt="CERTIFICADO DESARROLLO WEB" /></a>
                        <a href="https://www.coderhouse.com/certificados/63028ded2f4a900024460970" className="item"
                            target="_blank" rel="noopener noreferrer"><img src="https://live.staticflickr.com/65535/52953570627_734b56b225_c.jpg" alt="CERTIFICADO JS" /></a>
                        <a href="https://www.coderhouse.com/certificados/6368a279e6706a000fb9f23e" className="item"
                            target="_blank" rel="noopener noreferrer"><img src="https://live.staticflickr.com/65535/52953570637_414d08d3b8_c.jpg" alt="CERTIFICADO REACT_JS" /></a>
                    </div>
                </div>
            </div>

            <div className="cv">
                <h3 className='titulo'>Descargar CV: <a href="src\Assets\CV\CV__Tomas_Caballero.pdf" download="CV_Tomas_Caballero" title="Descargar CV"><box-icon type='solid' name='contact' color='#ffffff'></box-icon></a></h3>
            </div>
        </div>
    )
}

export default Curriculum