import './RegistroPaciente.css';
import Coincidencias from './coincidencias/Coincidencias';
//import React from 'react';

function RegistroPaciente() {
	return (
		<div className="principal" >
			<div className="formulario">
				<h2 className='titulo'>
					Registrar paciente
				</h2>

				<form name="RegistroPacience" method="POST" data-netlify='true'>

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
							<select type="text" name="seguro" className='input' multiple={true}>
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

			</div>
			<div className="coincidencias">
				<Coincidencias />
			</div>
		</div>
	);
}

export default RegistroPaciente;
