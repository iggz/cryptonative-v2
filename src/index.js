import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import Donut from './Charts/Donut';
import InteractivePieChart from './Charts/interactive-pie';
import WithSize from './Charts/with-size';
import LineChart from './Charts/LineChart';
import LineGraph from './Charts/LineGraph';

const MyApp = () => {
    return (
        <>

            <LineChart />
            <LineGraph />
        </>
    )
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
