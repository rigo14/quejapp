import React, { Component } from 'react';
import icon from './icon.png';
import './App.css';
import { getData } from './services/FetchData'
import { HorizontalBar } from 'react-chartjs-2';


class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			statesChartData: undefined,
			statesChartOptions: undefined,
			dependenciesChartData: undefined,
			dependenciesChartOptions: undefined
			//statesDependenciesChartsData: [] // funcionalidad para la versión 2.0
		};
	}

	componentDidMount() {
		getData(this)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header center">
					<img src={icon} className="App-icon" alt="logo" />
					<div>
						<label className="App-title">QUEJAPP</label>
					</div>
					<div className="dark">Alza la voz.</div>
				</header>

				{/* * * * funcionalidad para la versión 2.0
				<p className="dark mp3">
					Consulta las denuncias en tu estado
				</p>
				<div className="select">
					<Dropdown />
				</div> 
				*/}

				<p className="dark mp3">
					Cantidad de denuncias por estado
        		</p>
				
				{ !this.state.statesChartData && 'cargando...' }

				{this.state.statesChartData && <HorizontalBar options={ this.state.statesChartOptions } data={ this.state.statesChartData } height={ 450 } /> }

				<p className="dark mp3">
					Cantidad de denuncias por dependencia
        		</p>

				{!this.state.dependenciesChartData && 'cargando...'}

				{ this.state.dependenciesChartData && <HorizontalBar options={ this.state.dependenciesChartOptions } data={ this.state.dependenciesChartData } height={ 200 } /> }

				{/* * * * funcionalidad para la versión 2.0

				<p className="dark mp3">
					Gráficas de denuncias estado y dependencia
        		</p>

				{!this.state.statesDependenciesChartsData && 'cargando...'}

				{
					this.state.statesDependenciesChartsData.map((stateDependenciData, i) => 
						<div key={'k-'+i}>
							<HorizontalBar data={stateDependenciData} />
						</div>
					)
				} 

				*/}
			</div>
		);
	}
}

export default App;