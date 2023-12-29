import './App.css';
import { PerfilTile } from '../components/PerfilTile';
import { useEffect, useState } from 'react';

const URL_BASE = 'https://dadosabertos.camara.leg.br/api/v2/';

function App() {
	// Estado global do component
	const [politicos, setPoliticos] = useState([]); // => [estado, altera estado]

	async function fetchAndUpdate() {
		//1. toda a logica de HTTP aqui dentro
		//2. Atualizar o Estado
		//3. renderizar o component
		const resp = await fetch(URL_BASE + '/deputados');
		const respostaTratada = await resp.json();
		setPoliticos(respostaTratada.dados);
	}

	useEffect(() => {
		fetchAndUpdate();
	}, []);

	return (
		<>
			<div>
				{politicos.map((politico) => (
					<PerfilTile key={politico.nome} name={politico.nome} cep={politico.siglaUf} img={politico.uri} />
				))}
			</div>
		</>
	);
}

export default App;
