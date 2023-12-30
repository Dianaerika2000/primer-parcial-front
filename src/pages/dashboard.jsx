import { useForm } from "react-hook-form";
import Table from "../components/table";
import api from "../API/axios";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/carousel";
import { useEffect, useState } from "react";
import ModalJoinRoom from "../components/modalJoinRoom";
import ModalNewRoom from "../components/modalNewRoom";

export default function Dashboard() {
  // navigate
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // initial values
  useEffect(() => {
    api
      .get("/room")
      .then((res) => {
        console.log(res.data);
        setRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handlers
  const handleCreateRoomInDashboard = (newRoom) => {
    setRooms([...rooms, newRoom]); // Actualiza el estado rooms
  };

  const handleProviderSubmit = (data) => {
    console.log('Data formulario', { ...data, ownerId: 1 })

    //crear
    api
      .post("/room", { ...data, ownerId: 1 })
      .then((res) => {
        console.log(res.data);

        setRooms([...rooms, res.data]);

        // navigate('/diagram');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center text-start">
        <div className="col-6">
          <div className="mb-5">
            {/* Modal to create New Room */}
            <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#NewRoomModal">
              <i className="bi bi-diagram-3-fill"></i>
              &nbsp;Nueva Sala
            </button>
            <ModalNewRoom onCreateRoom={handleCreateRoomInDashboard} />

            {/* Modal to Join in a Room */}
            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#JoinRoomModal">
              <i className="bi bi-plus-square-fill"></i>
              &nbsp;Unirse a una Sala
            </button>
            <ModalJoinRoom />

          </div>


          {/* <h5 className="bg-info-subtle">Crea una sala para poder empezar a diagramar...</h5> */}

          <Table data={rooms} />
        </div>
        <div className="col-4">
          <Carousel />
        </div>
      </div>
    </div>
  );
}