const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/contact',
			selected: [],
			listaDeContactos: [],
		},
		actions: {

			seleccionarAccion: (contact) => setStore({ selected: contact }),


			crearAgenda: async () => {
				try {
					const resp = await fetch(getStore().url + '/agendas/syntakt', {
						method: 'POST'
					});

					if (!resp.ok) throw new Error('Error al crear la agenda')
					getActions().obtenerContacto()
					return true

				} catch (error) {
					console.error("Error al crear la agenda", error)
				}
			},
			crearContacto: async (contact) => {
				try {
					const resp = await fetch(getStore().url + '/agendas/syntakt/contacts', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(contact)
					});

					if (!resp.ok) throw new Error('Error al crear contacto')
					return getActions().obtenerContacto()

				} catch (error) {
					console.error("Error al crear el contacto", error)
				}
			},

			obtenerContacto: async () => {
				try {
					const resp = await fetch(getStore().url + '/agendas/syntakt');
					if (resp.status === 404) {
						console.warn("Agenda no encontrada. Creando nueva agenda...");
						return getActions().crearAgenda();
					}

					if (!resp.ok) throw new Error("Error al obtener contactos");
					const data = await resp.json();

					setStore({ listaDeContactos: data });
					console.log("Datos de contacto obtenidos correctamente:", data);
					return true;

				} catch (error) {
					console.error("Error en obtener Contacto:", error);
				}
			},

			actualizarContacto: async (id, contact) => {
				try {
					const resp = await fetch(getStore().url + '/agendas/syntakt/contacts/' + id, {
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(contact)
					});
					if (!resp.ok) throw new Error('Error al actualizar contacto')
					return getActions().obtenerContacto()

				} catch (error) {
					console.error("Error al acatualizar el contacto", error)
				}
			},

			eliminarContacto: async (id) => {
				try {
					const resp = await fetch(getStore().url + '/agendas/syntakt/contacts/' + id, {
						method: 'DELETE'
					});

					if (!resp.ok) throw new Error('Error al eliminar contacto')
					return getActions().obtenerContacto()

				} catch (error) {
					console.error("Error al eliminar contacto", error)
				}
			},
		}
	};
};

export default getState;