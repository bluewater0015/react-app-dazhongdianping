
/* 封装ajax函数
 * @param { string } opt.type连接的方式，包括get和post两种方式
 * @param { string } opt.url 请求数据的路径
 * @param { boolean } opt.async 是否为异步请求，true为异步的，false为同步的
 * @param { object } opt.data 发送的参数，格式为对象类型
 * @param { function } opt.success ajax发送并成功接收数据之后调用的函数
 * 
 */

 function ajax(opt){
 	opt = opt || {};
 	opt.method = opt.method.toUpperCase() || 'POST';
 	opt.url = opt.url || '';
 	opt.async = opt.async || true;
 	opt.data = opt.data || null;
 	opt.success = opt.success || function() {},
 	opt.dataType = opt.dataType || 'json';
 	var xhr = null;
 	if( XMLHttpRequest ){
 		xhr = new XMLHttpRequest;
 	}else{
 		xhr = new ActiveXObject('Microsoft.XMLHTTP');
 	}
 	var params = [];
 	for( var key in opt.data){
 		params.push( key + '=' + opt.data[key] );
 	}
 	var postData = params.join('&');
 	if( opt.method.toUpperCase() === 'POST'){
 		xhr.open( opt.method,opt.url,opt.async );
 		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
 		xhr.send(postData);
 	}else if( opt.method.toUpperCase() === "GET"){
 		xhr.open( opt.method, opt.url + '?' + postData, opt.async );
 		xhr.send(postData);
 	}
 	xhr.onreadystatechange = function(){
 		if( opt.dataType != 'jsonp'){
 			if( xhr.status == 200 && xhr.readyStatus == 4){
 				opt.success( xhr.responeText );
 			}else{
 				if( xhr.status == 200 && xhr.readyStatus == 4){
 					var oScript = document.createElement("script");
 					document.body.appendChild( oScript );

 					var callbackname = "callback";
 					oScript.src = opt.url + '?' + postData + '&callback=' + callbackname;

 					window['callback'] = function(data){
 						opt.success( data );
 						document.body.removeChild(oScript);
 					}
 				}
 			}
 		}
 	}
 }

 export default ajax;