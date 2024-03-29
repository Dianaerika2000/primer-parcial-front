import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from "../API/axios";

export default function ModalJoinRoom({ title, inputCount, onSubmit, onCancel }) {
  const token = localStorage.getItem("token");
  
  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handlers
  const handleJoinRoom = (data) => {
    console.log('Data formulario', { ...data, jwt: token })

    api
      .post("/room/invitation", { ...data, jwt: token })
      .then((res) => {
        console.log(res.data);
        // window.location.href = res.data;
        window.open(res.data, '_blank');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal fade" id="JoinRoomModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Unirse a una sala</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(handleJoinRoom)}>
            <div className="col-12">
                <label className="form-label">Ingresa el enlace</label>
                <input
                  type="text"
                  {...register("invitationToken", { required: true })}
                  className="form-control" id="invitationToken" />
                {errors?.invitationToken?.type === "required" && <p className="text-danger">El campo enlace es obligatorio*</p>}
              </div>
              <div className="col-12 text-end mt-3">
                <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-primary">
                  Unirser
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
