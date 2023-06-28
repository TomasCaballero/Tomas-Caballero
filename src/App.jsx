import { useEffect, useState } from 'react';
import './App.css'
import MisRutas from './MisRutas/MisRutas'
import PaginaCarga from './Components/PaginaCarga/PaginaCarga';

function App() {
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState('');

  useEffect(() => {
    const cargarPortfolio = async () => {
      try {
        await cargarInicio();
        await cargarSobreMi();
        await cargarSkills();
        await cargarSitios();
        await cargarEstudios();

        setCargando(false);
      } catch (error) {
        setErrores(error.message);
        console.log(errores);
      }
    };

    cargarPortfolio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Funciones de carga progresiva de cada sección
  const cargarInicio = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  const cargarSobreMi = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  const cargarSkills = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  const cargarSitios = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };

  const cargarEstudios = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 400);
    });
  };


  return (
    <div className='body'>
      {errores !== '' ? (
        <div>
          Ha habido un error al cargar la página <strong>({errores})</strong>
        </div>
      ) : cargando ? (
        <PaginaCarga/>
      ) : (
        <MisRutas />
      )}
    </div>
  )
}

export default App
