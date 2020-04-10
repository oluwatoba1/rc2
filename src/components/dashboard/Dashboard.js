import React, { Fragment } from 'react';
import './Dashboard.css';
import playstore from '../../img/playstore.svg';
import appstore from '../../img/appstore.svg';

const Dashboard = () => {
	return (
		<Fragment>
			<h3>Emmanuel,</h3>
			<p>Hello, wash your hands</p>

			<div className="information">
				<div className="savingsCard">
					<i className="fa fa-piggy-bank" />
					<div className="cardBody">
						<p>Total Savings</p>
						<h3>&#x20A6;234,000</h3>
					</div>
				</div>
				<div className="investCard">
					<i className="fa fa-rocket" />
					<div className="cardBody">
						<p>Total Investments</p>
						<h3>&#x20A6;56,406</h3>
					</div>
				</div>
				<div className="dollarCard">
					<i className="fa fa-dollar" />
					<div className="cardBody">
						<p>Flex Dollar</p>
						<h3>$1,345</h3>
					</div>
				</div>
				<div className="nairaCard">
					<i className="naira">&#x20A6;</i>
					<div className="cardBody">
						<p>Flex Naira</p>
						<h3>&#x20A6;334,543</h3>
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
							<p>Turn on your Royal co-operative Autosave</p>
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
				<div className="supersaver">
					<div className="ssChallenge">
						<h4>Super saver challenge</h4>
						<div className="superCard">
							<div className="cardBody">
								<p>Join the super savers of 2020</p>
								<a className="joinButton" href="/">
									Join now
								</a>
							</div>
							<img src="" alt="super" />
						</div>
					</div>
					<div className="download">
						<h4>Download the Mobile App</h4>
						<div className="downloadBody">
							<div className="downloadCard">
								<img src={appstore} alt="apple" />
							</div>
							<div className="downloadCard">
								<img src={playstore} alt="playstore" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
