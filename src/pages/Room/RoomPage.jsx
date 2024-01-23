import { Link, useParams } from "react-router-dom";
import CardInfo from "../../components/card-info";
import api from "../../API/axios";
import { useEffect, useState } from "react";


export default function RoomPage() {
  const { id } = useParams();

  const [room, setRoom] = useState([]);
  const [lenguaje, setLenguaje] = useState('');
  const [code, setCode] = useState('');

  // initial values
  useEffect(() => {
    api
      .get(`/room/${id}`)
      .then((res) => {
        console.log(res.data);
        setRoom(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //handlers
  const handleGenerateCode = (e) => {
    e.preventDefault();
    const data = {
      programmingLanguage: lenguaje
    }
    console.log('data', data);
    //get code 
    api
      .post(`/room/${id}/code`, data)
      .then((res) => {
        console.log(res);
        setCode(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center d-flex justify-content-center align-items-center">
        <div className="col-6">
          <Link to={`/dashboard`} type="button" className="btn btn-primary my-3">
            <i className="bi bi-arrow-left-circle-fill"></i>&nbsp;
            Volver al listado de salas
          </Link>
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title">Sala: {room.name}</h5>
              <p className="card-text">
                {room.description}
              </p>

              <h6>Codigo de Invitacion</h6>
              <p>{room.invitation_token}</p>

              {/* <p>{`Sala creada por: ${room.owner?.username}`}</p> */}

              <h6>Generar Codigo</h6>

              <form className="row g-3" onSubmit={handleGenerateCode}>
                <div className="col-md">
                  <select id="inputState"
                    value={lenguaje}
                    onChange={(e) => setLenguaje(e.target.value)}
                    className="form-select">
                    <option selected>Selecciona un lenguaje de programacion</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="JavaScript">JavaScript</option>
                  </select>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Generar codigo</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">{`Código: ${lenguaje}`}</h5>
              <div className="form-floating">
                <textarea className="form-control largeBox" 
                  placeholder="Leave a comment here" 
                  id="floatingTextarea"
                  rows="80" cols="40" 
                  value={code}></textarea>
                <label for="floatingTextarea">Codigo generado...</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
