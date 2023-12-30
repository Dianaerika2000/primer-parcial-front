import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import api from "../API/axios";
import { useNavigate } from 'react-router-dom';
export default function ModalNewRoom({ onCreateRoom }) {
  // navigate
  const navigate = useNavigate();
  const newRoomModalRef = useRef();

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handlers
  const handleCreateRoom = (data) => {
    console.log('Data formulario', { ...data, ownerId: 1 })

    //crear
    api
      .post("/room", { ...data, ownerId: 1 })
      .then((res) => {
        onCreateRoom(res.data);
        newRoomModalRef.current.hide();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal fade" id="NewRoomModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={newRoomModalRef}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva sala</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(handleCreateRoom)}>
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
              <div className="col-12 text-end mt-3">
                <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-primary">
                  Crear Sala
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
