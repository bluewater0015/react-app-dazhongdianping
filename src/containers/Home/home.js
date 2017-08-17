//news.js
import "./home.less";
import React,{Component} from 'react';
import { connect } from 'react-redux';

import HomeHeader from '../../components/HomeHeader/homeHeader';
import Lbt from "../../components/Categorys/lbt";
import Ad from "./subpage/ad.js";
import LikeList from './subpage/likeList';
import LocalStore from "../../util/LocalStore";
import {CITYNAME} from "../../config/localStoreKey";
import { bindActionCreators } from 'redux';
import * as userInfoActionFromOtherFile from "../../actions/userInfo";
function mapStateToProps(state){
	return{
		userInfo: state.userInfo
	}
}
function mapDispatchToProps(dispatch){
	return{
		userInfoActions: bindActionCreators(userInfoActionFromOtherFile,dispatch)
	}
}
class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			initDone: false
		}
	}
	componentDidMount(){
		//console.log("----componentDidMount----");
		//从localStorage中获取城市
		let cityName = LocalStore.getItem(CITYNAME);
		
		if( cityName == null ){
			cityName = "北京";
		}
		//将城市信息存储在redux中
		this.props.userInfoActions.update({
			cityName: cityName
		})
		//更新状态
		this.setState({
			initDone: true
		})
	}
	render(){
		//console.log(this.props.userInfo.cityName);
		return(
			<div className="home">
				<HomeHeader cityName={this.props.userInfo.cityName}/>
				<div className="home_component">
					<Lbt />
					<Ad />
					<LikeList />
				</div>
			</div>
		)
	}
	
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
