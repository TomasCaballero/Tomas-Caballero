import { useEffect, useState } from 'react';
import Transitions from '../../Transitions/Transitions';
import './inicio.css';

const Inicio = () => {
    const [video, setVideo] = useState('');
    const urlVideo = 'https://live.staticflickr.com/video/53008925748/9bca33c7fb/1080p.mp4?s=eyJpIjo1MzAwODkyNTc0OCwiZSI6MTY5NTMyNTk2MCwicyI6IjgwNzkwZmRmYThkMWJiYThiMDRmZWE5Y2UxZTFmYjc1YjZmYTZjZDQiLCJ2IjoxfQ'
    useEffect(() => {
        setVideo(urlVideo);
        console.log(video)
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
                <video className='contendorInicio' src={video} autoPlay loop muted ></video>
                <div className="opacidad">
                    <h2>Hola, soy </h2>
                    <h1>Tomás Bautista Caballero</h1>
                    <h4>Desarrollador Web</h4>
                </div>
            </div>
        </div>
    );
}

export default Transitions(Inicio);