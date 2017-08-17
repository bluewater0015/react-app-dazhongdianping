//homeHeader.js
import React,{Component} from 'react';
import "./homeHeader.less";
export default class homeHeader extends Component{
	render(){
		return(
			<div id="home-header" className="clear_fix">
				<div className="home-header-left">
					<span>{this.props.cityName}</span>
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