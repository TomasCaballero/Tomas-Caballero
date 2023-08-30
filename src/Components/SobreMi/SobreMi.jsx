import './sobreMi.css'

const SobreMi = () => {
    return (
        <div className='contenedorSobreMi'>
            <div className="presentacion">
                <h2>
                Soy un apasionado del desarrollo web con un enfoque especial en el front-end. Mi objetivo principal es crear interfaces atractivas y funcionales que brinden una gran experiencia de usuario. Aunque actualmente me especializo en el front-end, estoy constantemente ampliando mis habilidades y tengo aspiraciones de convertirme en un desarrollador full stack en el futuro.
                </h2>
            </div>
            <div className="datosPersonalesEIntereses">
                <div className="datosPersonales">
                    <h4 className="tituloDatosPersonales">
                        Datos personales:
                    </h4>
                    <div className="datos">
                        <p><strong>Nacionalidad:</strong> Argentina.</p>
                        <p><strong>Fecha de nacimiento:</strong> 07/11/1997.</p>
                        <p><strong>Localidad:</strong> Ciudad Autónoma de Buenos Aires, Argentina.</p>
                        <p><strong>Email:</strong> caballerotomas97@gmail.com.</p>
                    </div>
                </div>
                <div className="intereses">
                    <h4 className="tituloIntereses">
                        Intereses:
                    </h4>
                    <div className="misIntereses">
                        <div className="tecnologia box"><box-icon type='solid' name='devices'></box-icon>Tecnología</div>
                        <div className="musica box"><box-icon name='headphone' ></box-icon>Música</div>
                        <div className="deportes box"><box-icon name='football' ></box-icon>Deportes</div>
                        <div className="fotografia box"><box-icon name='camera' type='solid' ></box-icon>Fotografía</div>
                        <div className="viajar box"><box-icon name='plane-alt' type='solid' ></box-icon>Viajar</div>
                        <div className="juegos box"><box-icon name='joystick-alt' ></box-icon>Juegos</div>
                    </div>
                </div>
            </div>

            <div className="masSobreMi">
                <h5>Acerca de mis proyectos:</h5>
                <p>Trabaje en diversos proyectos, ya sean proyectos personales o proyectos solicitados por las plataformas de aprendizaje donde estudie y aprendí a programar. En los proyectos en los que trabaje me propuse crear sitios responsive, con buena optimización en motores de búsqueda.</p>
            </div>

            <div className="redesSobreMi">
                <a href='https://www.linkedin.com/in/tomás-bautista-caballero/' target="_blank" rel="noopener noreferrer"><box-icon name='linkedin' type='logo' color='#1555cb' size='md'></box-icon></a>
                <a href='https://github.com/TomasCaballero' target="_blank" rel="noopener noreferrer"><box-icon name='github' type='logo' color='#ffffff' size='md'></box-icon></a>
                <a href='https://wa.me/+541140720020' target="_blank" rel="noopener noreferrer"><box-icon name='whatsapp' type='logo' color='#2ba813' size='md'></box-icon></a>
            </div>
        </div>
    )
}

export default SobreMi