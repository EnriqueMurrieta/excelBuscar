import './BuscarPaciente.css';
import React, { useState } from 'react';
import db from './patients.json'

function BuscarPaciente({ app }) {

    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const pacienteInput = mongodb.db("Pacientes").collection("Paciente");

    const [seleccion, setSeleccion] = useState(false)
    const [paciente, setPaciente] = useState({})
    const [resultado, setResultado] = useState(null)

    const handleChange = async (event) => {
        setResultado(await pacienteInput.find({ nombre: event.target.value }))
    }

    React.useEffect(() => {
        console.log(resultado)
        //console.log(resultado.nombre)
        console.log(typeof resultado)
        //console.log(Object.keys(resultado).length)
        //console.log(typeof db.pacientes)
    }, [resultado])

    const infoPaciente = (db) => {
        setPaciente(db)
        setSeleccion(true)
    }

    function Card({ db }) {
        return (
            <div className='tarjeta' style={{ cursor: "pointer" }} onClick={() => infoPaciente(db)}>
                <div style={{ textAlign: "center" }}>
                    <img src={require('./blank.png')} alt={db.nombre} style={{ height: "150px", width: "150px" }} />
                </div>
                <div className='infoContainer'>
                    <div className='info'>
                        <p style={{ width: "50%", alignSelf: "center" }}>
                            {db.nombre} {db.paterno} {db.materno}
                        </p>
                        <p style={{ alignSelf: "center" }}>
                            {db.nacimiento}
                        </p>
                    </div>
                    <div className='info'>
                        <p>
                            {db.telefono}
                        </p>
                        <p>
                            {db.tipoTelefono}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='principal'>
            <div className='buscador' >
                <div style={{ paddingLeft: '5%', marginTop: '2%' }}>
                    <input placeholder='Buscar Nombre' /*value={buscado}*/ onChange={handleChange} style={{ paddingLeft: '2%', width: "25%", fontSize: 15 }} />
                </div>
                <div style={{ marginTop: "0%", paddingTop: '0%' }}>
                    <h2>
                        Resultados :
                    </h2>
                    <div className='resultados'>
                        <div className='fila'>
                            {
                                resultado == null || resultado.length === 0 ?
                                    db.pacientes.map(instance => (
                                        <Card key={instance.nombre} db={instance} />
                                    ))
                                    :
                                    resultado.map(instance => (
                                        <Card key={instance.paterno} db={instance} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='paciente' >
                {
                    !seleccion ? <div></div>
                        :
                        <div style={{ textAlign: "center", justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
                            <h2>
                                Información del paciente
                            </h2>
                            <div style={{ textAlign: "center" }}>
                                <img src={require('./blank.png')} alt={paciente.nombre} style={{ height: "100px", width: "100px" }} />
                            </div>
                            <p>
                                {paciente.nombre} {paciente.paterno} {paciente.materno}
                            </p>
                            <p>
                                {paciente.nacimiento}
                            </p>
                            <p>
                                {paciente.genero}
                            </p>
                            <p>
                                {paciente.estadoCivil}
                            </p>
                            <p>
                                {paciente.telefono} {paciente.tipoTelefono}
                            </p>
                            <p style={{ fontWeight: "bold" }}>
                                Contacto:
                            </p>
                            <p>
                                {paciente.emergenciaContacto}
                            </p>
                            <p>
                                {paciente.emergenciaTelefono}
                            </p>
                            <p style={{ fontWeight: "bold" }}>
                                Seguro:
                            </p>
                            <p>
                                {paciente.seguro}
                            </p>
                        </div>
                }
            </div>
        </div>
    );
}

export default BuscarPaciente;
