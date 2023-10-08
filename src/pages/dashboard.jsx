import { useForm } from "react-hook-form";
import Table from "../components/table";
// import api from "../API/axios";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/carousel";

export default function Dashboard() {
  // navigate
  const navigate = useNavigate();

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProviderSubmit = (data) => {
    console.log(data)
    navigate('/diagram');
    //crear
    // api
    //   .post("/room", data)
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate('/diagram');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div className="container">
      <div className="row justify-content-center text-start">
        <div className="col-6">
          <h5 className="bg-info-subtle">Crea una sala para poder empezar a diagramar...</h5>
          <form
            className="row g-3 py-5"
            onSubmit={handleSubmit(handleProviderSubmit)}
          >
            <div className="col-12">
              <label className="form-label">Nombre</label>
              <input
                type="name"
                {...register("name", { required: true })}
                className="form-control" id="name" />
              {errors?.name?.type === "required" && <p className="text-danger">El campo nombre es obligatorio*</p>}
            </div>
            <div className="col-12">
              <label className="form-label">Descripcion</label>
              <input
                type="description"
                {...register("description", { required: true })}
                className="form-control" id="description"
              />
              {errors?.description?.type === "required" && <p className="text-danger">El campo descripcion es obligatorio*</p>}
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary">
                Crear Sala
              </button>
            </div>
          </form>
          <Table/>
        </div>
        <div className="col-4">
          <Carousel/>
        </div>
      </div>
    </div>
  );
}