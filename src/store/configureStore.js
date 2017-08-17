import { createStore } from 'redux';
import rootReducer from '../reducer/reducer';

export default function configureStore(initialState){
	//创建一个store，store是唯一的。
	// rootReducer 是哪种行为
	// initialState 初始化的state
	const store = createStore(rootReducer,initialState,
		//触发redux-devtools
		window.devToolsExtension?window.devToolsExtension():undefined
	)
	return store;
}