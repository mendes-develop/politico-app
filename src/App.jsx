import './App.css';
import { PerfilTile } from '../components/PerfilTile';

const img = 'https://ichef.bbci.co.uk/news/640/cpsprodpb/DBCE/production/_102107265_667060400.jpg';

const api_politicos = [
	{ name: 'John', cep: 'Sao Paulo', partido: 'BRASIL', img: img },
	{ name: 'Silvana', cep: 'Sao Paulo', partido: 'BRASIL', img: img },
	{ name: 'Betty', cep: 'Sao Paulo', partido: 'BRASIL', img: img },
];

// MAP
// method que permite criar novos arrays baseados num array existente
function App() {
	return (
		<>
			<div>
				{api_politicos.map((politico) => {
					return (
						<PerfilTile key={politico.name} name={politico.name} cep={politico.cep} img={politico.img} />
					);
				})}
			</div>
		</>
	);
}

export default App;
