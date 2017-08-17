//homead.js
import "./loadmore.less";
import React,{Component} from 'react';

export default class LoadMore extends Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log("---isLoadingMore---",this.props.isLoadingMore);
		return(
			<div className="loadmore">
				{
					this.props.isLoadingMore
					?<div>加载中……</div>
					:<span onClick={this.loadMoreHandle.bind(this)} className="more  center">加载更多</span>
				}
			</div>
		)
	}
	loadMoreHandle(){
		//执行传递过来的loadMoreData函数
		this.props.loadMoreFn()
	}
	componentDidMount(){
		// window.addEventListener('scroll',function(){
		// 	console.log(123);
		// }.bind(this),false)
		window.addEventListener("scroll", this.orderScroll.bind(this));
	}
	orderScroll(){
		console.log(123);
	}
}
