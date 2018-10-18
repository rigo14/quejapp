import React, { Component } from 'react';
import { getData } from './services/FetchData'
import { HorizontalBar } from 'react-chartjs-2';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
	
			<div className="container">

				<Header />

				<p className="title-2">Denuncias por estado</p>

				{!this.state.statesChartData && 'cargando...'}

				{
					this.state.statesChartData &&
					<HorizontalBar
						id="states-chart"
						height={450}
						options={this.state.statesChartOptions}
						data={this.state.statesChartData} />
				}

				<p className="title-2">Denuncias por dependencia</p>

				{!this.state.dependenciesChartData && 'cargando...'}

				{
					this.state.dependenciesChartData &&
					<HorizontalBar
						id="states-chart"
						height={200}
						options={this.state.dependenciesChartOptions}
						data={this.state.dependenciesChartData} />
				}

				<Footer />

			</div>

		);
	}
}

export default App;