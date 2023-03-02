import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegistroPaciente from './registroPaciente/RegistroPaciente';
//import BuscarPaciente from './buscarPaciente/BuscarPaciente';
import reportWebVitals from './reportWebVitals';
import * as Realm from "realm-web";

/*const app = new Realm.App({ id: "application-0-dmrjg" });
const credentials = Realm.Credentials.anonymous();

const login = async () => {
	try {
		const user = await app.logIn(credentials);
		console.log("Successfully logged in!", user.id);
		return user;
	} catch (err) {
		console.error("Failed to log in", err.message);
	}
}

login()
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<RegistroPaciente /*app={app}*/ />}
    {/*<BuscarPaciente />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
