//homead.js
import "./homead.less";
import React,{Component} from 'react';

export default class HomeAd extends Component{
	constructor(props){
		super();
		
	}
	componentDidMount(){
		console.log('---HomeAd---');

	}
	render(){
		//console.log("length",this.props.data.length);
		const data = this.props.data;
		return(
			<div className="homead">
				<h2 className="odds">超值特惠</h2>
				<ul className="odds_list clear_fix">
					{
						data.map(function(item,index){
							return(
								<li className="list_item left_float" key={index}>
									<img className="item_img" src={item.goodsListImg} />
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}

}
