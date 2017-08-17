
import React,{ Component } from 'react';
import { render } from 'react-dom';
import RouterMap from '../router/routerMap';
import LocalStore from "../util/LocalStore";
import {CITYNAME} from "../config/localStoreKey";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionFromOtherFile from "../actions/userInfo";

class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			initDone: false
		}
	}
	render(){
		//console.log("children",this.props.children);
		return (
			<div className="container">
				{
					this.state.initDone?
					this.props.children
					:<div>正在加载中……</div>
				}
			</div>
		)
	}
	componentDidMount(){
		console.log("----componentDidMount----");
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
}

//mapStateToProps
//建立一个从（外部的）state对象到（UI组件的）props对象的映射关系。
function mapStateToProps(state){
	return{
		
	}
}
//mapDispatchToProps 是connect函数的第2个参数，
//用来建立UI组件的参数到store.dispatch方法的映射。
//也就是说哪些用户的操作应该当做Action，传给store。
//它可以是一个函数，也可以是一个对象。
function mapDispatchToProps(dispatch){
	return{
		userInfoActions: bindActionCreators(userInfoActionFromOtherFile,dispatch)
	}
}
//connect 用于从UI组件生成容器组件。connect的意思，就是将这两种组件连接起来。
//App是UI组件，export default 抛出去的组件就是由React-Redux通过connect方法
//自动生成的容器组件

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
