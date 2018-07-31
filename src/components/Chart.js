
import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import Store from '../store/Store'

import { getData } from '../services/FetchData'

export class Chart extends Component {
    componentDidMount () {
        getData()
        Store.link(this)
    }
    render () {
        //console.log(Store);
        return (
            <div className="chart">
            { Store.data.chartData && <HorizontalBar data={ Store.data.chartData } /> }
            </div>
        );
    }
}

export default Chart;
