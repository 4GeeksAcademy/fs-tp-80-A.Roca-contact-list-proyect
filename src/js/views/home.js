import React, { useContext } from "react";
import "../../styles/home.css";
import { TarjetaDeContacto } from "../component/tarjetaDeContacto.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const Home = () => {
	const { store, actions } = useContext(Context);




	return (
		<div className="container mt-5">
			<div className="text-center mb-4">
				<Link onClick={() => actions.seleccionarAccion(null)} to={'/vistaFormulario/new'}>
					<button className="btn btn-success btn-lg">Crear Contacto</button>
				</Link>
			</div>
			<div className="row g-4">
				{store.listaDeContactos?.contacts?.map((el) => (
					<div className="col-12 col-md-6 col-lg-4" key={el.id}>
						<TarjetaDeContacto contact={el} />
					</div>
				))}
			</div>
		</div>
	);
}