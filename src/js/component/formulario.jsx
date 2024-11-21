import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Formulario = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [feedback, setFeedback] = useState("");


    const [formData, setFormData] = useState({
        name: store.selected?.name || "",
        email: store.selected?.email || "",
        address: store.selected?.address || "",
        phone: store.selected?.phone || "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();


        if (store.selected) {
            actions.actualizarContacto(id, formData);
            setFeedback("Contacto actualizado correctamente")
        } else {
            actions.crearContacto(formData);
            setFeedback("Contacto creado correctamente")
        }
        setFormData({
            name: "",
            address: "",
            email: "",
            phone: "",
        });
        setTimeout(() => {
            setFeedback("")
        }, 3000);
    };

    return (
        <div className="container mt-5">
            <div className="formulario card shadow-lg p-4" >
                <h2 className="text-center mb-4">{store.selected ? "Editar Contacto" : "Crear Contacto"}</h2>
                {feedback && <div className="alert alert-success" role="alert">{feedback}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Nombre
                        </label>
                        <input
                            id="id"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            placeholder="Nombre"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            id="id"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Dirección
                        </label>
                        <input
                            id="id"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            placeholder="Dirección"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Teléfono
                        </label>
                        <input
                            id="id"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                            type="number"
                            placeholder="Teléfono"
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary px-4" type="submit">
                            {store.selected ? "Editar" : "Crear"}
                        </button>
                        <Link className="btn btn-danger px-4" to={"/"}>
                            Volver a Home
                        </Link>
                    </div>
                </form>
                
            </div>
        </div>
    );
};
