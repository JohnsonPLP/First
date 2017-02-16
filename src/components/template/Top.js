import React from 'react';
import { connect } from 'react-redux';
import style from './Top.css';

var inputChange=(value)=>{
	return {type:"INP_CHANGE",data:value}
}


class Top extends React.Component {
	constructor(props) {
	    super(props);
	  }
	handleChange(e){
		this.props.inputChange(e.target.value)
	}
	render(){
		var {cartCount,searchData} = this.props
    	return<div className={style.top}>
    	    <span className={style.inp_span}>
       	        <input value={searchData} className={style.inp} type="text" placeholder="search more products" onChange={this.handleChange.bind(this)}></input>
	       </span>
			<span>
				<span>
				<img className={style.cart_icon} src="http://www.freeiconspng.com/uploads/grocery-cart-icon-6.png"></img>
				{cartCount}</span>
				<span className={style.cart_span}>
					<b>{this.props.children}</b>
				</span>
			</span>
        </div>
        }
    }       


export default connect((state)=>{
	return {
		cartCount:state.cartCount,
		searchData:state.productSearch
	}
},{inputChange})(Top)

