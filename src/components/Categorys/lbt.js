//lbt.js
import "./lbt.less";
import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';

class Lbt extends Component{
	constructor(props){
		super(props);
		this.state = {
			index: 0
		}
	}
	render(){
		var opt = {
			auto: 2000,
			callback: function(index){
				this.setState({
					index: index
				})
			}.bind(this)
		}
		return(
			<div id="home-category">
				<ReactSwipe className="carousel" swipeOptions={opt}>
					<div className="carousel_item">
						<ul className="item_list clear_fix">
							<li className="left_float jingdian">景点</li>
							<li className="left_float ktv">KTV</li>
							<li className="left_float gouwu">购物</li>
							<li className="left_float shenghuofuwu">生活服务</li>
							<li className="left_float jianshen">健身</li>
							<li className="left_float meifa">美发</li>
							<li className="left_float qinzi">亲子</li>
							<li className="left_float xiaochi">小吃</li>
							<li className="left_float zizhucan">自助餐</li>
							<li className="left_float jiuba">酒吧</li>
						</ul>
					</div>
					<div className="carousel_item">
						<ul className="item_list  clear_fix">
							<li className="left_float meishi">美食</li>
							<li className="left_float dianying">电影</li>
							<li className="left_float jiudian">酒店</li>
							<li className="left_float xiuxianyule">休闲娱乐</li>
							<li className="left_float waimai">外卖</li>
							<li className="left_float huoguo">火锅</li>
							<li className="left_float liren">丽人</li>
							<li className="left_float dujiachuxing">度假出行</li>
							<li className="left_float zuliaoanmo">足疗按摩</li>
							<li className="left_float zhoubianyou">周边游</li>
						</ul>
					</div>
					<div className="carousel_item">
						<ul className="item_list  clear_fix">
							<li className="left_float renbencai">人本菜</li>
							<li className="left_float spa">SPA</li>
							<li className="left_float jiehun">结婚</li>
							<li className="left_float xuexipeixun">学习培训</li>
							<li className="left_float huochejipiao">火车机票</li>
							<li className="left_float xican">西餐</li>
							<li className="left_float shaokao">烧烤</li>
							<li className="left_float jiazhuang">家装</li>
							<li className="left_float chongwu">宠物</li>
							<li className="left_float quanbufenlei">全部分类</li>
						</ul>
					</div>
				</ReactSwipe>
				<div className="carousel_btn">
					<ul className="btn_list center">
						<li className={ this.state.index=== 0 ? 'select': '' }></li>
						<li className={ this.state.index=== 1 ? 'select': '' }></li>
						<li className={ this.state.index=== 2 ? 'select': '' }></li>
					</ul>
				</div>
			</div>
		)
	}
}
export default Lbt;