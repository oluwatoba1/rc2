import React, {Fragment} from 'react';
import './Dashboard.css';

const Dashboard = () => {
	return (
		<Fragment>
			<div className="dash-header">
				<h3>Dashboard</h3>
				<button>+ Add New Contribution</button>
			</div>

			<div className="information">
				<div className="savingsCard">
					<div className="top">
						<i className="fa fa-piggy-bank" />
						<div className="cardBody">
							<p>Total Savings</p>
							<h3>&#x20A6;234,000</h3>
						</div>
					</div>
					<div className="percentage">
						<i className="stats"></i>
						<p>5% Down from last week</p>
					</div>
				</div>
				<div className="investCard">
					<div className="top">
						<i className="fa fa-rocket" />
						<div className="cardBody">
							<p>Total Investments</p>
							<h3>&#x20A6;56,406</h3>
						</div>
					</div>
					<div className="percentage">
						<i className="stats"></i>
						<p>5% Down from last week</p>
					</div>
				</div>
				<div className="dollarCard">
					<div className="top">
						<i className="fa fa-dollar" />
						<div className="cardBody">
							<p>Flex Dollar</p>
							<h3>$1,345</h3>
						</div>
					</div>
					<div className="percentage">
						<i className="stats"></i>
						<p>5% Down from last week</p>
					</div>
				</div>
				<div className="nairaCard">
					<div className="top">
						<i className=" fa naira">&#x20A6;</i>
						<div className="cardBody">
							<p>Flex Naira</p>
							<h3>&#x20A6;334,543</h3>
						</div>
					</div>
					<div className="percentage">
						<i className="stats"></i>
						<p>5% Down from last week</p>
					</div>
				</div>
			</div>

			<div className="todoWrapper">
				<div className="todo">
					<h4>To-Do List</h4>
					<div className="todoBody">
						<div>
							<p>Verify your email address</p>
						</div>
						<div>
							<p>Turn on your Royal co-op Autosave</p>
						</div>
						<div>
							<p>Safelock &#x20A6;50,678 FOR 61 - 90 days</p>
						</div>
						<div>
							<p>Confirm BVN</p>
						</div>
						<div>
							<p>Add Card Details</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
