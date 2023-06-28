import './paginaCarga.css'

const PaginaCarga = () => {
    return (
        <div className="paginaCarga">
            <div className="textoYSpinner">
                <h5>Cargando Portfolio</h5>
                <h5 className="animacionPuntos">...</h5>
            </div>
        </div>
    )
}

export default PaginaCarga