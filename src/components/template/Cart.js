import React from 'react';
import { connect } from 'react-redux';

import style from './Top.css';

var	removeCart =(product)=>{
	return {type:"REMOVE_CART",data:product}
}
var reducePrice=(price)=>{
	return {type:"REDUCE_TOTAL",data:price}
}



class Cart extends React.Component {
	constructor(props) {
	    super(props);
	  }

	remCart(pCart,pId,price){
		var next=[]
		var c = pCart.forEach((l)=>{
			if(l.id == pId){
				pId=0							
			}else{
				next=[...next,l]			
			}		
		})
		this.props.removeCart(next)
		this.props.reducePrice(price)
		
	}	


	render(){
		var {cart,totalAmount,cartCount} = this.props
	   	return<div className={style.products}>
				<ul className={style.ul1}>
				<li className={style.cart_li}>
					<span className={style.cart_detail}>
						<h2>Total Amount:₹ {totalAmount}</h2>
						<h2 className={style.cart_detail1}><span>{cartCount+"  "}</span>Items in your Cart</h2>
					</span>
				</li>
					{
					cart.map((l,m)=>{
							return <li className={style.li} key={l.name+m}>
								<h4 className={style.pro_text}>{l.name}</h4>
								<img className={style.pro_img} src={l.img}/>
								<b>₹ {l.price}</b>	
								<button className={style.cart_remove} onClick={this.remCart.bind(this,cart,l.id,l.price)}>REMOVE FROM CART</button>				
								</li>						
							})
					}
				</ul>	
		</div>
        }
    }       


export default connect((state)=>{
	return {
		cart:state.cart,
		totalAmount:state.totalPrice,
		cartCount:state.cartCount	
	}
},{removeCart,reducePrice})(Cart)


