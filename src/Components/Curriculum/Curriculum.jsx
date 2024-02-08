import './curriculum.css'
import Transitions from '../../Transitions/Transitions'
import { IconBrandBootstrap, IconBrandCss3, IconBrandFigma, IconBrandFirebase, IconBrandFramerMotion, IconBrandGit, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, /*IconBrandMysql,*/ IconBrandNodejs, IconBrandReact, IconBrandSass, IconBrandTypescript, IconBrandVscode, IconFileCv, IconSql } from '@tabler/icons-react'


// eslint-disable-next-line react-refresh/only-export-components
const Curriculum = () => {
    return (
        <div className="contenedorCurriculum">
            <div className="presentacionHabilidades">
                <h3 className='titulo'>Estas son mis habilidades</h3>
                <div className="habilidades">
                    <div className="lenguajes">
                        <h3>Lenguajes de programación</h3>
                        <div className="misLenguajes">
                            <div >
                                <IconBrandHtml5 color='#E5532D' size={46} stroke={1}/>
                                <h4>HTML5</h4>
                            </div>
                            <div >
                                <IconBrandCss3 color='#2D53E5' size={46} stroke={1} />
                                <h4>CSS5</h4>
                            </div>
                            <div >
                                <IconBrandJavascript color='#F7E025' size={46} stroke={1}/>
                                <h4>JAVASCRIPT</h4>
                            </div>
                            <div >
                                <IconBrandTypescript color='#377CC8' size={46} stroke={1}/>
                                <h4>TYPESCRIPT</h4>
                            </div>
                            <div >
                                <IconBrandNodejs color='#80D041' size={46} stroke={1}/>
                                <h4>NODE JS</h4>
                            </div>
                            <div>
                                <IconSql color='#085576' size={46} stroke={1}/>
                                <h4>SQL</h4>
                            </div>
                        </div>
                    </div>

                    <div className="lenguajes">
                        <h3>Frameworks y librerías</h3>
                        <div className="misLenguajes">
                            <div>
                                <IconBrandBootstrap color='#8F1BFC' size={46} stroke={1}/>
                                <h4>BOOTSTRAP</h4>
                            </div>
                            <div>
                                <IconBrandSass color='#CF6B9D' size={46} stroke={1}/>
                                <h4>SASS</h4>
                            </div>
                            <div>
                                <IconBrandReact color='#66DBFB' size={46} stroke={1}/>
                                <h4>REACT JS</h4>
                            </div>
                            <div>
                                <IconBrandFramerMotion color='#F009BB' size={46} stroke={1}/>
                                <h4>FRAMER-MOTION</h4>
                            </div>
                            {/* <div>
                                <IconBrandMysql color='#08668E' size={46} stroke={1}/>
                                <h4>MYSQL</h4>
                            </div> */}
                            <div>
                                <IconBrandMongodb color='#17AD55' size={46} stroke={1}/>
                                <h4>MONGO DB</h4>
                            </div>
                            <div>
                                <IconBrandFirebase color='#FFA917' size={46} stroke={1}/>
                                <h4>FIREBASE</h4>
                            </div>
                        </div>

                    </div>
                    <div className="lenguajes">
                        <h3>Herramientas</h3>
                        <div className="misLenguajes">
                            <div>
                                <IconBrandGit color='#F1553A' size={46} stroke={1}/>
                                <h4>GIT</h4>
                            </div>
                            <div>
                                <IconBrandGithub color='#080808' size={46} stroke={1}/>
                                <h4>GITHUB</h4>
                            </div>
                            <div>
                                <IconBrandVscode color='#44ADF3' size={46} stroke={1}/>
                                <h4>VSCODE</h4>
                            </div>
                            <div>
                                <IconBrandFigma color='#FF7667' size={46} stroke={1}/>
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
                            <li><strong>DIPLOMATURA EN PROGRAMACIÓN WEB FULL STACK</strong> - <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg" alt="UTN" className="utnImg" /></li>
                        </ul>
                    </div>
                    <div className="estudioss">
                        <h5>Estudios en curso</h5>
                        <ul>
                            <li><strong>ANALISTA DE SISTEMAS</strong> - <img src="public/assets/logosInstitucion/ortlogo.png" alt="ORT" className='ortLogo'/></li>
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
                        <a  className="item"
                            target="_blank" rel="noopener noreferrer"><img src="../../../public/assets/certificados/Certificado-FullStack_page-0001.jpg" alt="CERTIFICADO PROGRAMACIÓN FULL STACK" /></a>
                    </div>
                </div>
            </div>

            <div className="cv">
                <h3 className='titulo'>Descargar CV: <a href="https://drive.google.com/file/d/1ixD6jHbR7y86usV1UEF_g3ZLJULELOkt/view?usp=sharing" download="CV_Tomas_Caballero" title="Descargar CV" target="_blank" rel="noopener noreferrer"><IconFileCv color='#F1F1F1' size={40} stroke={1}/></a></h3>
            </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default Transitions(Curriculum)