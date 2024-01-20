import ClipboardJS from 'clipboard';

export default function Table({ data }) {
  // const url = `http://localhost:8080/model-c4`;
  const url = `http://54.71.131.29:8080/model-c4`;
  const token = localStorage.getItem("token");

  // Función para copiar la invitación al portapapeles
  const copyInvitation = (roomId) => {
    const invitationLink = `Codigo de invitación: ${roomId}`;
    const clipboard = new ClipboardJS('.btn-copy', {
      text: function() {
        return invitationLink;
      }
    });

    clipboard.on('success', function(e) {
      console.log('Invitación copiada con éxito:', e.text);
      clipboard.destroy(); // Destruir el objeto ClipboardJS después de copiar
    });

    clipboard.on('error', function(e) {
      console.error('Error al copiar la invitación:', e.action);
      clipboard.destroy(); // Destruir el objeto ClipboardJS en caso de error
    });

    clipboard.onClick({ // Forzar el clic en el botón de copia
      action: function(e) {
        e.clearSelection();
      }
    });
  };


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
                <button className="btn btn-warning btn-copy mx-2"
                  onClick={() => copyInvitation(room.invitation_token)}>
                  <i className="bi bi-copy"></i>
                </button>
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