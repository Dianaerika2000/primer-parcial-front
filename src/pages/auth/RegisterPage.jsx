import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../API/axios";
import logo from "../../assets/images/logo.png";
export default function RegisterPage(){
  //navigate
  const navigate = useNavigate();

  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProviderSubmit = (data) => {
    api
      .post("/auth/register", data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })

      .catch((err) => {
        console.log(err.response.data);
      });
  }
  return(
    <div className="container">
      <div className="row justify-content-center text-center">
          <img
            className="img-fluid col-3" 
            src={logo} 
            alt="logo"
          />
      </div>
      <div className="row justify-content-center text-start">
        <div className="col-6">
          <form 
            className="row g-3"
            onSubmit={handleSubmit(handleProviderSubmit)}>
            <div className="col-12">
              <label className="form-label">Username</label>
              <input 
                type="text"
                {...register("username", { required: true })} 
                className="form-control" id="name" />
              {errors?.username?.type === "required" && <p className="text-danger">El campo username es obligatorio*</p>}
            </div>
            <div className="col-12">
              <label className="form-label">Correo Electronico</label>
              <input 
                type="email"
                {...register("email", { required: true })} 
                className="form-control" 
                id="email" />
              {errors?.email?.type === "required" && <p className="text-danger">El campo correo electronico es obligatorio*</p>}
            </div>
            <div className="col-12">
              <label className="form-label">Contraseña</label>
              <input 
                type="password"
                {...register("password", { required: true })} 
                className="form-control" 
                id="password" />
              {errors?.password?.type === "required" && <p className="text-danger">El campo contraseña es obligatorio*</p>}
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Registrarse
              </button>
              <Link 
                to="/"
                className="btn link-primary"
              >
                Iniciar Sesion
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}