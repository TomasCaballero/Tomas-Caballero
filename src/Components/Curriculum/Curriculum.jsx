import './curriculum.css'
import lenguajesProgramacion from './lenguajesProgramacion'
import frameworks from './frameworks'
import herramientas from './herramientas'


const Curriculum = () => {
    return (
        <div className="contenedorCurriculum">
            <div className="presentacionHabilidades">
                <h3 className='titulo'>Estas son mis habilidades</h3>
                <div className="habilidades">
                    <div className="lenguajes">
                        <h3>Lenguajes de programación</h3>
                        <div className="misLenguajes">
                            {
                                lenguajesProgramacion.map((leng)=>{
                                    return (
                                        <div key={leng.name}>
                                            <box-icon name={leng.name} type='logo' color={leng.color} size='lg'></box-icon>
                                            <h4>{leng.nombre}</h4>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="lenguajes">
                        <h3>Frameworks y librerias</h3>
                        <div className="misLenguajes">
                            {
                                frameworks.map((framework)=>{
                                    return(
                                        <div key={framework.name}>
                                            <box-icon name={framework.name} type='logo' color={framework.color} size='lg'></box-icon>
                                            <h4>{framework.nombre}</h4>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className="lenguajes">
                        <h3>Herramientas</h3>
                        <div className="misLenguajes">
                            {
                                herramientas.map((herramienta)=>{
                                    return (
                                        <div key={herramienta.name}>
                                            <box-icon name={herramienta.name} type='logo' color={herramienta.color} size='lg'></box-icon>
                                            <h4>{herramienta.nombre}</h4>
                                        </div>
                                    )
                                })
                            }
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
                <h3 className='titulo'>Descargar CV: <a href="https://drive.google.com/file/d/1FB7MWhn6hJmIvRyCWHi6M9nRI1p5jTsP/view?usp=sharing" download="CV_Tomas_Caballero" title="Descargar CV" target="_blank" rel="noopener noreferrer"><box-icon type='solid' name='contact' color='#ffffff'></box-icon></a></h3>
            </div>
        </div>
    )
}

export default Curriculum