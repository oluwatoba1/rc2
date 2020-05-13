import React from 'react';

const TotalInvestments = () => {
	return (
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
	);
};

export default TotalInvestments;
