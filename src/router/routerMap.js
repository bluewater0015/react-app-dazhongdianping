//routerMap.js
import React,{ Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';
//import Main from "../containers/index";
import Home from "../containers/Home/home";
import Find from "../containers/Find/find";
import Mark from "../containers/Mark/mark";
import Owner from "../containers/Owner/owner";
import { hashHistory } from 'react-router';
export default class RouterMap extends Component{
	render(){
		return(
			<Router history={hashHistory}>
				<div className="container">
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/find" component={Find} />
						<Route path="/mark" component={Mark} />
						<Route path="/owner" component={Owner} />
					</div>
					<hr />
					<ul className="footer_nav">
						<li className="nav_item center"><NavLink className="center link_item" activeClassName="selected" exact to="/">首页</NavLink></li>
						<li className="nav_item center"><NavLink className="center link_item" activeClassName="selected" to="/find">发现</NavLink></li>
						<li className="nav_item center"><NavLink className="center link_item" activeClassName="selected" to="/mark">足迹</NavLink></li>
						<li className="nav_item center"><NavLink className="center link_item" activeClassName="selected" to="/owner">我的</NavLink></li>
					</ul>
				</div>
			</Router>
		)
	}
}