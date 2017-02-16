import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createHistory} from 'history1';
import { historyMiddleWare, routing, Link,Match } from 'redux-router-middleware';

import Top from './components/template/Top';
import Left from './components/template/Left';
import Products from './components/template/Products';
import Cart from './components/template/Cart';

var products=(state=[],action)=>{
	switch(action.type){
		case "GET_PRODUCTS":
		return action.data
	}
	return state;
}


var cart=(state=[],action)=>{
	switch(action.type){
		case "ADD_CART":
		return [...state,action.data]
		case "REMOVE_CART":
		return action.data
	}
	return state;
}

var totalPrice=(state=0,action)=>{
	switch(action.type){
		case "INC_TOTAL":
		return state+action.data
		case "REDUCE_TOTAL":
		return state-action.data
	}
	return state;
}
var cartCount=(state=0,action)=>{
	switch(action.type){
		case "ADD_CART":
		return state+1
		case "REMOVE_CART":
		return state-1
	}
	return state;
}
var productSearch=(state="",action)=>{
	switch(action.type){
		case "INP_CHANGE":
		return action.data
	}
	return state;
}


var history = createHistory();


var middlewares = applyMiddleware(historyMiddleWare(history))
var urls =[
	{
		name:"home",
		pattern:"/app"
	},
	{
		name:"cart",
		pattern:"/app/cart"
	}
]

var reducers = combineReducers({products,cart,totalPrice,cartCount,productSearch,routing:routing(urls)});
var store = createStore(reducers,{products:[],cart:[],totalPrice:0,cartCount:0,productSearch:""},middlewares);


class App extends React.Component{

	
	render(){
		return <div>
				<Top>
					<Link name="cart">cart</Link>
				</Top>
				<Left/>
				<Match name="cart" >
					<Cart/>
				</Match>
				<Match name="home" isExactly={true}>
					<Products/>
				</Match>
			</div>
	}
}


ReactDOM.render(
	<Provider store={store}>	
	<App/>
	</Provider>,react)



