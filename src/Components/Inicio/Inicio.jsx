import { useEffect } from 'react';
import './inicio.css';

const Inicio = () => {
    useEffect(() => {
        const disableScroll = (event) => {
            event.preventDefault();
        };

        const container = document.querySelector('.sin-scroll');
        container.addEventListener('wheel', disableScroll, { passive: false });

        return () => {
            container.removeEventListener('wheel', disableScroll);
        };
    }, []);

    return (
        <div className="contenedorInicio sin-scroll">
            <div className="contenedorVideo">
                <video className='contendorInicio' src="https://live.staticflickr.com/video/53153562974/5d6712ac16/1080p.mp4?s=eyJpIjo1MzE1MzU2Mjk3NCwiZSI6MTY5MzQzMjE0MCwicyI6ImQ5ZjJkMWExZDFiMzVjNmMyNGJhMTIxNDY1ZjVlNmY0MDM5YWNmZDgiLCJ2IjoxfQ" autoPlay loop muted ></video>
                <div className="opacidad">
                    <h2>Hola, soy </h2>
                    <h1>Tomás Bautista Caballero</h1>
                    <h4>Desarrollador Web</h4>
                </div>
            </div>
        </div>
    );
}

export default Inicio;