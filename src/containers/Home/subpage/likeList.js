//ad.js
import React,{Component} from 'react';
import Ajax from '../../../service/baseService';
import HomeLikeList from '../../../components/HomeLikeList/homelikelist';
import LoadMore from '../../../components/LoadMore/loadmore';
export default class LikeList extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: [], //存储列表信息
			hasMore: true, //记录当前状态下，还有没有更多信息需要加载
			isLoadingMore: false,//记录当前状态下，是'加载中……'还是'点击加载更多'
			page: 1 //下一页的页码
		}
	}
	componentDidMount(){
		//获取数据
		//console.log('---likeList---');
		this.getData();
	}
	//通过ajax请求数据
	getData(){
		var _this = this;
		Ajax({
			url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
			method: 'GET',
			dataType: 'jsonp',
			success: function(data){
				//console.log('---likeList---',data);
				//console.log(_this.state);
				_this.setState({
					data: data
				})
			},
			fail: function(e){
				console.log("请求失败！");
			}
		})
	}
	//加载更多数据
	loadMoreData(){
		//点击记录状态
		this.setState({
			isLoadingMore: true
		})
		//const page = this.state.page; //下一页的页码
		//console.log('this',this);
		//this.getData();
		var _this = this;
		Ajax({
			url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
			method: 'GET',
			dataType: 'jsonp',
			success: function(data){
				//console.log('---likeList---',data);
				
				_this.setState({
					data: _this.state.data.concat()
				})
				console.log("请求到的数据：",_this.state.data.concat());
			},
			fail: function(e){
				console.log("请求失败！");
			}
		})
		this.setState({
			isLoadingMore: false
		})
		console.log(this.state);
	}
	render(){
		//console.log(this.state.likeList.length);
		//console.log("aa",this.loadMoreData.bind(this));
		return(
			<div>
				{
					this.state.data.length
					?<HomeLikeList data={this.state.data} />
					:<div>正在加载中……</div>
				}
				{
					this.state.hasMore
					?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
					:<div></div>
				}
			</div>
		)
	}

}
