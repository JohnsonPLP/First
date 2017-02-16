import React from 'react';
import { connect } from 'react-redux';

import style from './Top.css';

var getProductList =(products)=>{
	return {type:"GET_PRODUCTS",data:products}
}
var addCart =(product)=>{
	return {type:"ADD_CART",data:product}
}

var increasePrice =(amount)=>{
	return {type:"INC_TOTAL",data:amount}
}


class Products extends React.Component {
	constructor(props) {
	    super(props);
	  }


componentWillMount() {
  	global.fetch("/api/total/products").then((res)=>{
			res.json().then((json1)=>{
				this.props.getProductList(json1)
			});
		})
  	}
	
	cart(product,amount){
		this.props.increasePrice(amount)
		this.props.addCart(product)
	}

	render(){
		var {product,searchData} = this.props;
		var check=true;
		
		return<div className={style.products}>
				<ul className={style.ul1}>
			{
				product.map((l,m)=>{
					if (l.name.toLowerCase().indexOf(searchData.toLowerCase())!=-1 || l.type.toLowerCase().indexOf(searchData.toLowerCase())!=-1){
						return <li className={style.li} key={l.name+m}>
							<h4 className={style.pro_text}>{l.name}</h4>
							<img className={style.pro_img} src={l.img}></img>
							<b>Price: ₹ {l.price}</b>	
							<ul className={style.ul2}>
								<li><h2>Features:</h2></li>								
								{
									l.features.map((name,i)=>{
										return <li key={name+i}>{name}</li>								
									})									
								}							
							</ul>	
							<button className={style.addCart} onClick={this.cart.bind(this,l,l.price)}>ADD TO CART</button>				
						</li>	
					}
				})
			}
		</ul>	
		</div>
        }
    }       



export default connect((state)=>{
	return {
		product:state.products,
		searchData:state.productSearch
		
	}
},{getProductList,addCart,increasePrice})(Products)






