import './BuscarPaciente.css';
import React, { useState } from 'react';
import db from './patients.json'

function BuscarPaciente() {

    const [seleccion, setSeleccion] = useState(false)
    const [paciente, setPaciente] = useState({})


    const infoPaciente = (db) => {
        setPaciente(db)
        setSeleccion(true)
    }

    function Card({ db }) {
        const imagePath = db.image.src
        return (
            <div className='tarjeta' style={{ cursor: "pointer" }} onClick={() => infoPaciente(db)}>
                <div style={{ textAlign: "center" }}>
                    <img src={require('./' + imagePath)} /*src={require('../imgs/jake.jpg')}*/ alt={db.name} style={{ height: "150px", width: "150px" }} />
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
                    <input placeholder='Buscador' style={{ paddingLeft: '2%', width: "25%", fontSize: 15 }} />
                </div>
                <div style={{ marginTop: "0%", paddingTop: '0%' }}>
                    <h2>
                        Resultados :
                    </h2>
                    <div className='resultados'>
                        <div className='fila'>
                            {
                                db.pacientes.map(instance => (
                                    <Card key={instance.nombre} db={instance} />
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
                                <img src={require('./' + paciente.image.src)} alt={paciente.name} style={{ height: "100px", width: "100px" }} />
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
