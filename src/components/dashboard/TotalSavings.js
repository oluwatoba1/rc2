import React from 'react';

const TotalSavings = () => {
	return (
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
	);
};

export default TotalSavings;
