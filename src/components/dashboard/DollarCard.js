import React from 'react';

const DollarCard = () => {
	return (
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
	);
};

export default DollarCard;
