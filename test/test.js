
import React,{ Component } from 'react';
import { render } from 'react-dom';

class Main extends Component{
	render(){
		return(
			<div id="home-header" className="clear_fix">
				<div className="home-header-left">
					<span>北京</span>
					&nbsp;
					<i className="icon-angle-down"></i>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="home-header-middle icon-search"></i>
						<input type="text" placeholder="请输入关键字" />
					</div>
				</div>
				<div className="home-header-right">
					<i className="icon-user"></i>
				</div>
				
			</div>
		)
	}
}
render(
	<Main />,
	document.getElementById('root')
)