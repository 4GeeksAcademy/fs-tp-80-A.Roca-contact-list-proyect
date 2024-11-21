import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const TarjetaDeContacto = (props) => {
    const { store, actions } = useContext(Context);
    const { id, name, address, email, phone } = props.contact;
    const [eliminado, setEliminado] = useState("")

    const handleDelete = (id) => {
        const confirmar = window.confirm("Estas seguro de que quieres eliminar el contacto?");
        if (confirmar) {
            actions.eliminarContacto(id)
            setEliminado("Contacto eliminado Correctamente");
        }
        setTimeout(() => {
            setEliminado("Datos Eliminados correctamente") // El mensaje no se queda 3 segundos :/
        }, 6000);
    }

    return (
        <div>
            {eliminado && <div className=" redAlert" role="alert">{eliminado}
            </div>}
            <article className="card shadow-lg my-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            className="img-fluid rounded-start"
                            src="https://imgs.search.brave.com/JAHeWxUYEwHB7KV6V1IbI9oL7wxJwIQ4Sbp8dHQL09A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0"
                            alt={name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">
                                <i className="fa-solid fa-house me-2"></i>{address}
                            </p>
                            <p className="card-text">
                                <i className="fa-solid fa-envelope me-2"></i>{email}
                            </p>
                            <p className="card-text">
                                <i className="fa-solid fa-phone me-2"></i>{phone}
                            </p>
                            <div className="d-flex">
                                <Link to={'/vistaFormulario/' + id}>
                                    <button
                                        className="btn btn-primary me-2"
                                        onClick={() => actions.seleccionarAccion(props.contact)}>Editar
                                    </button>
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(id)}>Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};
