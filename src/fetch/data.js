
import { get } from './get';
//import { post } from './post';

export function getData(){
	var url = 'http://datainfo.duapp.com/shopdata/getGoods.php';
	var result = get(url);
	result.then(res =>{
		return res.json()
	}).then(json =>{
		console.log(json);
	})

	var result1 = get(url);
	result1.then(res=>{
		return res.text()
	}).then(text =>{
		console.log(text);
	})
}
// export function postData(){
// 	var url ='http://datainfo.duapp.com/shopdata/getGoods.php';
// 	var result = post(url,{
// 		a:100,
// 		b:200
// 	});
// 	result.then(res=>{
// 		return res.json()
// 	}).then(json=>{
// 		console.log(json);
// 	})
// }
export function fetchJsonp(){
	var url = 'http://datainfo.duapp.com/shopdata/getGoods.php';
	var result = get(url);
	result.then(res =>{
		return res.json()
	}).then(json =>{
		console.log(json);
	})
}