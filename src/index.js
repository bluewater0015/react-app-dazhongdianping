//index.js
import "./static/css/reset.css";
import "./static/css/common.css";
import "./static/css/font.css";

import React,{ Component } from 'react';
import { render } from 'react-dom';
import RouterMap from './router/routerMap';
import configureStore from './store/configureStore';
import { hashHistory } from 'react-router';
import {Provider} from 'react-redux';
//import { getData,postData } from './fetch/test';
//import { getData,postData } from './fetch/data';
//import { getData,fetchJsonp } from './fetch/data';
//创建store
const store = configureStore()
// Provider 组件
// connect方法生成容器组件之后，需要让容器组件拿到state对象。
//才能生成UI组件的参数。
//getData();
//postData();
//fetchJsonp();

render(
	<Provider store={store}>
		<RouterMap history={hashHistory}/>
	</Provider>,
	document.getElementById('root')
)