import 'whatwg-fetch';
import 'es6-promise';

export function getData(){
	var result = fetch('http://datainfo.duapp.com/shopdata/getGoods.php',{
		//传cookie的设置
		credentials: 'include',
		headers: {
			'Accept': 'application/json,text/plain,*/*'
		}
	});
	result.then(res => {
		return res.json()
	}).then( json =>{
		console.log("请求到的数据：",json);
	})

	var result1 = fetch('http://datainfo.duapp.com/shopdata/selectGoodes.php',{
		credentials: 'include',
		headers: {
			'Accept': 'application/json,text/plain,*/*'
		}
	})
	result1.then(res =>{
		return res.text()
	}).then( text =>{
		console.log("请求到的数据:",text);
	})
}
export function postData(){
	var result = fetch('http://datainfo.duapp.com/shopdata/getGoods.php',{
		method: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json,text/plain,*/*',
			'Content-Type':'_application/x-www-form-urlencoded'
		},
		//注意body参数的形式
		body: "a=100&b=200"
	})
	result.then(res =>{
		return res.json()
	}).then( json =>{
		console.log(json);
	})
}