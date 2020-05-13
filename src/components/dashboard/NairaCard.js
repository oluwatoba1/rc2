import React from 'react';

const NairaCard = () => {
	return (
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
	);
};

export default NairaCard;
