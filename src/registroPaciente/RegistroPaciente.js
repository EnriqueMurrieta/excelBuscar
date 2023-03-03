import './RegistroPaciente.css';
import Coincidencias from './coincidencias/Coincidencias';
import React, { useState } from 'react';

function RegistroPaciente({ app }) {

	const mongodb = app.currentUser.mongoClient("mongodb-atlas");
	const pacienteInput = mongodb.db("Pacientes").collection("Paciente");
	const plants = mongodb.db("test").collection("testing");

	const [nombre, setNombre] = useState();
	const [paterno, setPaterno] = useState();
	const [materno, setMaterno] = useState();
	const [nacimiento, setNacimiento] = useState();
	const [genero, setGenero] = useState();
	const [estadoCivil, setEstadoCivil] = useState();
	const [telefono, setTelefono] = useState();
	const [tipoTelefono, setTipoTelefono] = useState();
	const [correo, setCorreo] = useState();
	const [emergenciaTelefono, setEmergenciaTelefono] = useState();
	const [emergenciaContacto, setEmergenciaContacto] = useState();
	const [seguro, setSeguro] = useState();

	const [permitir, setPermitir] = useState(false);

	const checkSubmit = () => {
		if ((nombre === '' || paterno === '' || nacimiento === '' || genero === '' || estadoCivil === '' || telefono === '' || tipoTelefono === '' || emergenciaTelefono === '' || emergenciaContacto === '' || seguro === '') || (nombre === undefined || paterno === undefined || nacimiento === undefined || genero === undefined || estadoCivil === undefined || telefono === undefined || tipoTelefono === undefined || emergenciaTelefono === undefined || emergenciaContacto === undefined || seguro === undefined)) {
			setPermitir(false)
		} else {
			setPermitir(true)
		}
	}

	const handleChange = async (event) => {
		switch (event.target.name) {
			case 'nombre':
				setNombre(event.target.value)
				break;
			case 'paterno':
				setPaterno(event.target.value)
				break;
			case 'materno':
				setMaterno(event.target.value)
				break;
			case 'nacimiento':
				setNacimiento(event.target.value)
				break;
			case 'genero':
				setGenero(event.target.value)
				break;
			case 'estadoCivil':
				setEstadoCivil(event.target.value)
				break;
			case 'telefono':
				setTelefono(event.target.value)
				break;
			case 'tipoTelefono':
				setTipoTelefono(event.target.value)
				break;
			case 'correo':
				setCorreo(event.target.value)
				break;
			case 'emergenciaTelefono':
				setEmergenciaTelefono(event.target.value)
				break;
			case 'emergenciaContacto':
				setEmergenciaContacto(event.target.value)
				break;
			case 'seguro':
				setSeguro(event.target.value)
				break;
			default:
		}
	}

	React.useEffect(() => {
		checkSubmit()
	})

	const result = async () => {

		/*		const venusFlytrap = await plants.findOne({ thing: "todo" });
				console.log("venusFlytrap", venusFlytrap);
		*/
		/*return await plants.insertOne({
			test: "d00one",
			ddd:"aaaAA"
		  })*/
	}
	//result()

	const handleSubmit = async () => {
		/*return await paciente.insertOne({
			training:"done"
		})*/
		return await pacienteInput.insertOne({
			nombre: nombre,
			paterno: paterno,
			materno: materno,
			nacimiento: nacimiento,
			genero: genero,
			estadoCivil: estadoCivil,
			telefono: telefono,
			tipoTelefono: tipoTelefono,
			correo: correo,
			emergenciaTelefono: emergenciaTelefono,
			emergenciaContacto: emergenciaContacto,
			seguro: seguro
		})
		/*console.log(nombre)
		console.log(paterno)
		console.log(materno)
		console.log(nacimiento)
		console.log(genero)
		console.log(estadoCivil)
		console.log(telefono)
		console.log(tipoTelefono)
		console.log(correo)
		console.log(emergenciaTelefono)
		console.log(emergenciaContacto)
		console.log(seguro)*/
	}

	return (
		<div className="principal" >
			<div className="formulario">
				<h2 className='titulo'>
					Registrar paciente
				</h2>
				<div className='fila'>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Nombre
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<input type="text" name="nombre" className='input' onChange={handleChange} />
					</div>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Ap. Paterno
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<input type="text" name="paterno" className='input' onChange={handleChange} />
					</div>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Ap. Materno
							</p>
						</div>
						<input type="text" name="materno" className='input' onChange={handleChange} />
					</div>
				</div>

				<div className='fila'>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Fecha Nac.
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<input type="date" name="nacimiento" className='input' onChange={handleChange} />
					</div>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Genero
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<select name="genero" className='input' onChange={handleChange}>
							<option value="">-</option>
							<option value="masculino">Masculino</option>
							<option value="femenino">Femenino</option>
						</select>
					</div>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Estado Civil
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<select name="estadoCivil" className='input' onChange={handleChange}>
							<option value="">-</option>
							<option value="soltero">Soltero</option>
							<option value="casado">Casado</option>
						</select>
					</div>
				</div>

				<div className='fila'>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Telefono Principal
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<input type="tel" name="telefono" className='input' onChange={handleChange} />
					</div>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Tipo Telefono
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<select type="text" name="tipoTelefono" className='input' onChange={handleChange}>
							<option value="">-</option>
							<option value="movil">Móvil</option>
							<option value="fijo">Fijo</option>
						</select>
					</div>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Correo Principal
							</p>
						</div>
						<input type='email' name="correo" className='input' onChange={handleChange} />
					</div>
				</div>

				<div className='fila'>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Telefono Emergencia
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<input type="tel" name="emergenciaTelefono" className='input' onChange={handleChange} />
					</div>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Contacto Emergencia
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<input type="text" name="emergenciaContacto" className='input' onChange={handleChange} />
					</div>
					<div className='campo'>
						<div className='titulo'>
							<p style={{ marginBottom: "0%" }}>
								Seguro Gastos Medicos
							</p>
							<p style={{ color: 'red', marginBottom: "0%" }}>
								*
							</p>
						</div>
						<select type="text" name="seguro" className='input' onChange={handleChange} >
							<option value="">-</option>
							<option value="uno">Opción 1</option>
							<option value="dos">Opción 2</option>
							<option value="tres">Opción 3</option>
							<option value="cuatro">Opción 4</option>
						</select>
					</div>
				</div >

				<div className='fila'>
					<div className='campo' style={{ height: "100%" }}>
						{
							permitir ?
								<button onClick={handleSubmit} type='submit' className='guardar' >Guardar</button>
								:
								<button onClick={handleSubmit} type='submit' className='guardar' disabled={true} >Guardar</button>
						}

					</div>
				</div>

			</div>
			<div className="coincidencias">
				<Coincidencias />
			</div>
		</div>
	);
}

export default RegistroPaciente;