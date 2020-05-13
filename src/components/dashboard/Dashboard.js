import React, {Fragment} from 'react';
import Chart from 'react-google-charts';

import './Dashboard.css';
import TotalSavings from './TotalSavings';
import TotalInvestments from './TotalInvestments';
import DollarCard from './DollarCard';
import NairaCard from './NairaCard';

const Dashboard = () => {
	return (
		<Fragment>
			<div className="dash-header">
				<h3>Dashboard</h3>
				<button>+ Add New Contribution</button>
			</div>

			<div className="information">
				<TotalSavings />
				<TotalInvestments />
				<DollarCard />
				<NairaCard />
			</div>

			<div className="chartsWrapper">
				<div className="barChart">
					<Chart
						width={'100%'}
						height={'100%'}
						chartType="ColumnChart"
						loader={<div>Loading Chart</div>}
						data={[
							['Year', 'From Contributors', 'From Investments'],
							['Jan', 417500, 400800],
							['Feb', 379200, 369400],
							['Mar', 269500, 289600],
							['Apr', 209900, 195300],
							['May', 152600, 51700],
							['Jun', 417500, 400800],
							['Jul', 79200, 369400],
							['Aug', 269500, 289600],
							['Sep', 209900, 95300],
							['Oct', 152600, 151700],
							['Nov', 209900, 195300],
							['Dec', 152600, 151700]
						]}
						options={{
							title: 'Amount of money gotten per month',
							chartArea: {width: '80%'},
							colors: ['#6F52ED', '#FF7A00'],
							bars: 'vertical',
							bar: {groupWidth: '15%'},
							legend: {position: 'top'},
							hAxis: {
								textStyle: {color: '#c4c4c4'}
							},
							vAxis: {
								textStyle: {color: '#c4c4c4'}
							}
						}}
						// For tests
						rootProps={{'data-testid': '1'}}
					/>
				</div>
				<div className="topContributors"></div>
				<div className="pieChart"></div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
