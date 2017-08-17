import 'whatwg-fetch';
import 'es6-promise';

export function fetchJsonp(url){
	var result = fetch(url,{
		jsonpCallback: 'custom_callback'
	})
	return result;
}