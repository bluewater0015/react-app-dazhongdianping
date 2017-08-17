//ad.js
import React,{Component} from 'react';
import Ajax from '../../../service/baseService';
import HomeAd from '../../../components/HomeAd/homead';
export default class Ad extends Component{
	constructor(props){
		super();
		this.state = {
			adList: ''
		}
	}
	componentDidMount(){
		//console.log('---ad---');
		var _this = this;
		Ajax({
			url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
			method: 'GET',
			dataType: 'jsonp',
			success: function(data){
				console.log('---data---',data);
				_this.setState({
					adList: data
				})
			},
			'fail': function(e){
				console.log("数据请求失败");
			}
		})
	}
	render(){
		return(
			<div>
				{
					this.state.adList.length?
					<HomeAd data={this.state.adList} />:
					<div>正在加载中……</div>
				}
			</div>
		)
	}

}
