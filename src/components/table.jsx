export default function Table({ data }) {
  const url = `http://localhost:8080/model-c4`;
  const token = localStorage.getItem("token");
  return (
    <table className="table table-bordered">
      {/* {console.log('token', token)} */}
      <thead className="table-info">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((room, index) => {
          return (
            <tr key={index}>
              <td>{room.name}</td>
              <td>{room.description}</td>
              <td>
                <a href={`${url}?room=${room.id}&username=${token}`} className="btn btn-primary" target="_blank"> 
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </a>
                <button className="btn btn-danger">
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}