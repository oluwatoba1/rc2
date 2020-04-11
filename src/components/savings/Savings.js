import React from 'react';
import './Savings.css';
import {
	Switch,
	Route,
	NavLink,
	BrowserRouter as Router,
} from 'react-router-dom';
import AddSavings from './AddSavings';
import SendMoney from './SendMoney';
import RequestWithdrawal from './RequestWithdrawal';
import DecemberSavings from './DecemberSavings';
import JulySavings from './JulySavings';
import ViewTransactions from './ViewTransactions';

const Savings = () => {
	return (
		<Router>
			<h3>Savings</h3>
			<div className="savingsContainer">
				<div className="savingsBody">
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
				</div>
			</div>
		</Router>
	);
};

export default Savings;
