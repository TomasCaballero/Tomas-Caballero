import "./sobreMi.css";
import Transitions from "../../Transitions/Transitions";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconCamera,
  IconCpu,
  IconDeviceGamepad2,
  IconHeadphones,
  IconPlane,
  IconSoccerField,
} from "@tabler/icons-react";

// eslint-disable-next-line react-refresh/only-export-components
const SobreMi = () => {
  return (
    <div className="contenedorSobreMi">
      <div className="presentacion">
        {/* <h2>
                    Soy un apasionado del desarrollo web con un enfoque especial en el front-end. Mi objetivo principal es crear interfaces atractivas y funcionales que brinden una gran experiencia de usuario. Aunque me especializo en el front-end, actualmente me estoy incursionando en el desarrollo back-end.
                </h2> */}
        {/* <h2>Soy un apasionado desarrollador web full-stack. Mi objetivo principal es proporcionar experiencias de usuario excepcionales. Recientemente, he fortalecido mis habilidades incursionando en el desarrollo back-end, lo que me permite abordar proyectos de manera integral. Con dominio del stack MERN y experiencia en SQL, busco constantemente oportunidades para aplicar mis conocimientos y contribuir al éxito de cada proyecto.</h2> */}
        <h2>
          Soy un desarrollador web full-stack con experiencia en front-end y
          SQL. Estudio Analista de Sistemas, lo que ha fortalecido mi capacidad
          para abordar proyectos de manera integral. Además, tengo conocimientos
          en Testing manual, lo que me permite asegurar la calidad del software.
          Busco aplicar mis habilidades y contribuir al éxito de cada proyecto.
        </h2>
      </div>
      <div className="datosPersonalesEIntereses">
        <div className="datosPersonales">
          <h4 className="tituloDatosPersonales">Datos personales:</h4>
          <div className="datos">
            <p>
              <strong>Nacionalidad:</strong> Argentina.
            </p>
            <p>
              <strong>Fecha de nacimiento:</strong> 07/11/1997.
            </p>
            <p>
              <strong>Localidad:</strong> Ciudad Autónoma de Buenos Aires,
              Argentina.
            </p>
            <p>
              <strong>Email:</strong> caballerotomas97@gmail.com.
            </p>
          </div>
        </div>
        <div className="intereses">
          <h4 className="tituloIntereses">Intereses:</h4>
          <div className="misIntereses">
            <div className="tecnologia box">
              <IconCpu color="#F1F1F1" size={32} stroke={1} />
              Tecnología
            </div>
            <div className="musica box">
              <IconHeadphones color="#F1F1F1" size={32} stroke={1} />
              Música
            </div>
            <div className="deportes box">
              <IconSoccerField color="#F1F1F1" size={32} stroke={1} />
              Deportes
            </div>
            <div className="fotografia box">
              <IconCamera color="#F1F1F1" size={32} stroke={1} />
              Fotografía
            </div>
            <div className="viajar box">
              <IconPlane color="#F1F1F1" size={32} stroke={1} />
              Viajar
            </div>
            <div className="juegos box">
              <IconDeviceGamepad2 color="#F1F1F1" size={32} stroke={1} />
              Juegos
            </div>
          </div>
        </div>
      </div>

      <div className="masSobreMi">
        <h5>Acerca de mis proyectos:</h5>
        <p>
          Trabaje en diversos proyectos, ya sean proyectos personales o
          proyectos solicitados por las instituciones de aprendizaje donde estudie
          y aprendí a programar. En los proyectos en los que trabaje me propuse
          crear sitios responsive, con buena optimización en motores de
          búsqueda.
        </p>
      </div>

      <div className="redesSobreMi">
        <a
          href="https://www.linkedin.com/in/tomás-bautista-caballero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin color="#086B9C" size={42} stroke={2} />
        </a>
        <a
          href="https://github.com/TomasCaballero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub color="#F1F1F1" size={42} stroke={2} />
        </a>
        <a
          href="https://wa.me/+541140720020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandWhatsapp color="#2CD46B" size={42} stroke={2} />
        </a>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transitions(SobreMi);
