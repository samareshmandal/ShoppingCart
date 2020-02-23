import React, { Component } from "react";
import itemUrl from '../../../assets/images/item.jpg';
import classes from './Item.module.css'

class CartItem extends Component{
    render(){
        return (
            <div className= {classes.CartItem}>
                <img src={this.props.img_url} alt ={this.props.name}></img>

                {/* <h3 style={{padding:"5px"}}>{this.props.name}</h3> */}
                <p>
                    <span 
                        style ={{textTransform: 'capitalize',
                        display:'inline-block',
                        color:'#444',            
                        fontWeight: 'bold',
                        padding:"5px"
                    }} >
                        {this.props.name}
                    </span>

                </p>

                <p>
                    <span 
                        style ={{textTransform: 'capitalize',
                        display:'inline-block',
                        color:'#444',            
                        fontWeight: 'bold',
                        padding:"5px"
                    }}>
                    रु{this.props.price} </span>
                    <span 
                        style ={{textTransform: 'capitalize',
                        display:'inline-block',
                        fontWeight: 'bold',
                        textDecoration: 'line-through',
                        padding:"5px"
                    }}>
                    {this.props.originalPrice} </span>
                    <span 
                        style ={{textTransform: 'capitalize',
                        fontWeight: 'bold',
                        display:'inline-block',
                        color: 'green'
                    }}>
                    {this.props.discount}% Off</span>
                </p>
                
                <div align="center">
                    <button onClick= {this.props.addClick}>
                        Add to Cart
                    </button>
                    
                </div>

                
            </div>
        )
    }
}

export default CartItem;