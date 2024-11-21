import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (


		<nav className="navbar navbar-expand-lg shadow">
		<div className="container-fluid">
			<Link to="/" className="navbar-brand text-light">
				<h1 className="mb-0">
					Lista de Contactos
				</h1>
			</Link>
		</div>
	</nav>
	
	);
};
