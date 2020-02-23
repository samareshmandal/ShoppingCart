import React, { Component } from "react";
import {connect} from 'react-redux';
import CartItem from './CartItem/CartItem'
import axios from '../../hoc/axiosItems';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/index';
import classes from './Cart.module.css';

class Cart extends Component{
    
    handleRemoveClick = (id)=>{    
        let item = this.props.items.find(item=> id === item.id)        
        this.props.onRemoveItem(item); 
    }
    
    handleAddQuantityClick = (id)=>{    
        let item = this.props.items.find(item=> id === item.id)        
        this.props.onAddQuantity(item); 
    }
    handleSubtractQuantityClick = (id)=>{    
        let item = this.props.items.find(item=> id === item.id)        
        this.props.onSubtractQuantity(item); 
    }

    render(){        
        return (
            <div className="row">
                <div className='col-8'>
                    {this.props.cartItems.map(item => 
                    <CartItem key={item.id}
                    id = {item.id}
                    name= {item.name}
                    originalPrice = {item.price}
                    discountedPrice= {(item.price - item.discountAmt)}
                    img_url = {item.img_url}
                    discount= {item.discount}
                    quantity = {item.quantity}
                    addClick = {()=> this.handleAddQuantityClick(item.id)}
                    subClick = {()=> this.handleSubtractQuantityClick(item.id)}
                    removeClick = {()=> this.handleRemoveClick(item.id)}
                    />)}   
                </div>
                <div className='col-4' >
                <div className ={classes.CartSummary}>
                        <div style={{
                             fontSize: '20px', fontWeight:"bold", color:'grey',
                             marginBottom:'10px', borderBottom:"1px solid grey"
                             }}>
                            PRICE DETAILS
                              
                        </div>
                        <div>
                        <div className="row">
                            <div className='col-6'>Price ({this.props.cartItems.reduce((sum,item)=> sum + item.quantity,0)} item(s))</div>
                            <div>:</div>
                            <div className='col-4'>
                                रु{this.props.cartItems.reduce((sum,item)=> sum+ item.price*item.quantity,0)}
                            </div>                            
                            
                        </div>
                        <div className="row" style={{borderBottom:"1px solid grey", padding: "10px"}}>
                            <div className='col-6'>Discount</div>
                            <div>:</div>
                            <div className='col-4'>
                                रु{this.props.cartItems.reduce((sum,item)=> sum+ item.discountAmt*item.quantity,0)}
                            </div>   
                        </div>
                        <div className="row" style={{
                             fontSize: '20px', fontWeight:"bold"                             
                             }}>
                            <div className='col-7'>Total Payable</div>
                            <div className='col-4'> रु{this.props.total}</div>                            
                            
                        </div>
                        </div>
                        
                    </div>
                </div>
                             
            </div>
        );        
    }
}

const mapStateToProps = state => {
    return{       
        items:state.prod.items, 
        cartItems: state.cart.cartItems,
        total: state.cart.total
    };
}

const mapDispatchToProps = dispatch => {
    return{
        onRemoveItem: (item) => dispatch(actions.removeItem(item)),
        onAddQuantity: (item)=>{dispatch(actions.addQuantity(item))},
        onSubtractQuantity: (item)=>{dispatch(actions.subtractQuantity(item))}        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Cart, axios));
