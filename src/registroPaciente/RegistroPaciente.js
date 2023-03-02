import './RegistroPaciente.css';
import Coincidencias from './coincidencias/Coincidencias';
import React from 'react';

function RegistroPaciente() {

const [name, setName] = React.useState()
const [email, setEmail] = React.useState()
const [message, setMessage] = React.useState()
const [test, setTest] = React.useState()

const handleChangeTest = (event) => {
	setTest(event.target.value)
}

const handleChange = (event) => {
	setName(event.target.value)
}

const handleChangeEmail = (event) => {
	setEmail(event.target.value)
}

const handleChangeMessage = (event) => {
	setMessage(event.target.value)
}

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	}

	const handleSubmit = e => {
		fetch("/", {
		  method: "POST",
		  headers: { "Content-Type": "application/x-www-form-urlencoded" },
		  body: encode({ "form-name": "contact", name, email, message, test })
		})
		  .then(() => alert("Success!"))
		  .catch(error => alert(error));
  
		e.preventDefault();
	  };

	return (
		<div className="principal" >
			<div className="formulario">
				<h2 className='titulo'>
					Registrar paciente
				</h2>
				<form
					onSubmit={handleSubmit}
					name="contact"
				>
					<input name="name" type="text" value={name} onChange={handleChange} />
					<input required type="email" name="email" value={email}  onChange={handleChangeEmail}/>
					<textarea name="message" value={message} onChange={handleChangeMessage}></textarea>
					<input name="test" type="text" value={test} onChange={handleChangeTest} />
					<button type="submit" />
				</form>


			</div>
			<div className="coincidencias">
				<Coincidencias />
			</div>
		</div>
	);
}

export default RegistroPaciente;

/*
<input type="hidden" name="form-name" value="contact" />
					<input required type="text" name="name" />
					<input required type="email" name="email" />
					<textarea name="message" ></textarea>
					<button type="submit">Send</button>
*/


/*
				<form onSubmit={(e) => handleSubmit(e)} name="RegistroPacience" method="POST"action="" data-netlify='true'>
					<input type="hidden" name="RegistroInput" value="RegistroPacience" />
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
							<input type="text" name="nombre" className='input' />
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
							<input type="text" name="paterno" className='input' />
						</div>
						<div className='campo'>
							<div className='titulo'>
								<p style={{ marginBottom: "0%" }}>
									Ap. Materno
								</p>
							</div>
							<input type="text" name="materno" className='input' />
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
							<input type="date" name="nacimiento" className='input' />
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
							<select name="genero" className='input'>
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
							<select name="estadoCivil" className='input'>
								<option value="">-</option>
								<option value="masculino">Soltero</option>
								<option value="femenino">Casado</option>
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
							<input type="tel" name="telefono" className='input' />
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
							<select type="text" name="tipoTelefono" className='input'>
								<option value="">-</option>
								<option value="masculino">Móvil</option>
								<option value="femenino">Fijo</option>
							</select>
						</div>
						<div className='campo'>
							<div className='titulo'>
								<p style={{ marginBottom: "0%" }}>
									Correo Principal
								</p>
							</div>
							<input type='email' name="correo" className='input' />
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
							<input type="tel" name="emergenciaTelefono" className='input' />
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
							<input type="text" name="emergenciaContacto" className='input' />
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
							<select type="text" name="seguro[]" className='input' multiple={true}>
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
							<button type='submit' className='guardar' >Guardar</button>
						</div>
					</div>

				</form>
*/