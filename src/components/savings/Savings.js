import React, {Fragment} from 'react';
import './Savings.css';
import {BrowserRouter as Router} from 'react-router-dom';

import layer3 from '../../img/Layer 3.png';
import group from '../../img/Group.png';

const Savings = () => {
	return (
		<Router>
			<Fragment>
				<h3>Savings</h3>
				<div className="savingsWrapper">
					<div className="savings-md-8">
						<div id="ajo">
							<div className="createPlan">
								<img src={layer3} alt="layer3" />
								<p>Create an Ajo</p>
							</div>
							<div className="createPlan">
								<img src={group} alt="group" />
								<p>Create A Personal Savings Plan</p>
							</div>
						</div>
						<div id="plan">
							<div id="ongoingPlan">
								<h3>Ongoing Savings Plan</h3>
								<div>
									<div className="sp-header">
										<p>Society Ajo</p>
										<div className="sp-images"></div>
									</div>
									<div className="sp-details">
										<p>10,000 monthly contributions</p>
										<p>Current benefactor: James Ola</p>
									</div>
									<div className="ongoing-bar"></div>
								</div>
								<div>
									<div className="sp-header">
										<p>Society Ajo</p>
										<div className="sp-images"></div>
									</div>
									<div className="sp-details">
										<p>10,000 monthly contributions</p>
										<p>Current benefactor: James Ola</p>
									</div>
									<div className="ongoing-bar"></div>
								</div>
								<div>
									<div className="sp-header">
										<p>Personal Savings</p>
										<div className="sp-images"></div>
									</div>
									<div className="sp-details">
										<p>10,000 monthly contributions</p>
										<p>Current benefactor: James Ola</p>
									</div>
									<div className="ongoing-bar"></div>
								</div>
							</div>
							<div id="completedPlan">
								<h3>Completed Savings Plan</h3>
								<div>
									<div className="sp-header">
										<p>Society Ajo</p>
										<div className="sp-images"></div>
									</div>
									<div className="sp-details">
										<p>10,000 monthly contributions</p>
										<p>Current benefactor: James Ola</p>
									</div>
									<div className="completed-bar"></div>
								</div>
								<div>
									<div className="sp-header">
										<p>Society Ajo</p>
										<div className="sp-images"></div>
									</div>
									<div className="sp-details">
										<p>10,000 monthly contributions</p>
										<p>Current benefactor: James Ola</p>
									</div>
									<div className="completed-bar"></div>
								</div>
								<div>
									<div className="sp-header">
										<p>Personal Savings</p>
										<div className="sp-images"></div>
									</div>
									<div className="sp-details">
										<p>10,000 monthly contributions</p>
										<p>Current benefactor: James Ola</p>
									</div>
									<div className="ongoing-bar"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="savings-md-4">
						<h3>Savings Invitation</h3>
					</div>
					{/* <div className="savingsBody">
						<NavLink activeClassName="active" to="/savings/add">
							<i className="" />
							Add to savings
						</NavLink>
						<NavLink activeClassName="active" to="/savings/send">
							<i className="" />
							Send Money to Recipient
						</NavLink>
						<NavLink activeClassName="active" to="/savings/request">
							<i className="" />
							Request Withdrawal
						</NavLink>
						<NavLink activeClassName="active" to="/savings/december-savings">
							<i className="" />
							December savings
						</NavLink>
						<NavLink activeClassName="active" to="/savings/view-transactions">
							<i className="" />
							View transactions
						</NavLink>
					</div>
					<div className="savingsFormBody">
						<Switch>
							<Route path="/savings/add" component={AddSavings} />
							<Route path="/savings/send" component={SendMoney} />
							<Route path="/savings/request" component={RequestWithdrawal} />
							<Route
								path="/savings/december-savings"
								component={DecemberSavings}
							/>
							<Route path="/savings/july-savings" component={JulySavings} />
							<Route
								path="/savings/view-transactions"
								component={ViewTransactions}
							/>
						</Switch>
					</div> */}
				</div>
			</Fragment>
		</Router>
	);
};

export default Savings;
