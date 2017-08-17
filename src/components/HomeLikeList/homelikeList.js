//homead.js
import "./homelikelist.less";
import React,{Component} from 'react';

export default class HomeLikeList extends Component{
	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		//console.log('---HomeLikeList---');

	}
	render(){
		//console.log("length",this.props.data.length);
		const data = this.props.data;
		return(
			<div className="homeLikeList">
				<h2 className="like">猜你喜欢</h2>
				<div className="likeList">
					{
						data.map(function(item,index){
							return(
								<dl className="list_item" key={index}>
									<dt className="item_dt">
										<img className="item_img" src={item.goodsListImg} />
									</dt>
									<dd className="item_dd">
										<p>{item.goodsName}</p>
										<p>价格：{item.price}</p>
									</dd>
								</dl>
							)
						})
					}
				</div>
			</div>
		)
	}

}
