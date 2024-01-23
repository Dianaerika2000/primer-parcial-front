export default function CardInfo() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Generar Codigo</h5>
        <p className="card-text">
          Comparte este enlace con las personas que quieras que colaboren en este diagrama.
        </p>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2"
            defaultValue={`http://localhost:3000/diagram`}
            />
            <button 
              className="btn btn-outline-secondary" 
              type="button" 
              id="button-addon2">
              Copiar
            </button>
        </div>
      </div>
    </div>
  );
}