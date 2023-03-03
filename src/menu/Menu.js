import React, { useState } from 'react';
import BuscarPaciente from '../buscarPaciente/BuscarPaciente'

function Menu({ app }) {
    const [db, setDb] = useState([])

    React.useEffect(() => {
        const mongodb = app.currentUser.mongoClient("mongodb-atlas");
        const pacienteInput = mongodb.db("Pacientes").collection("Paciente");

        async function todosPacientes() {
            const response = await pacienteInput.find({})
            setDb(response)
        }
        todosPacientes()
    }, [app])

    return (
       <BuscarPaciente db={db} app={app} />
    );
}

export default Menu;
