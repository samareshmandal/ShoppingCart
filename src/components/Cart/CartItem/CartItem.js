import React, { Component } from "react";
// import itemUrl from '../../../assets/images/item.jpg';
import classes from './CartItem.module.css'

class CartItem extends Component{
    render(){
        return (
            <div className= {classes.CartItem}>
                <div className ='row'>
                    <div className ='col-4'>
                        
                        <img src={this.props.img_url} alt ={this.props.name}></img>
                    </div>
                    <div className ='col-8'>
                        <div className='pt-4'>
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
                            <div className='d-flex'>
                                <p className='pt-3'>
                                    <span 
                                        style ={{textTransform: 'capitalize',
                                        display:'inline-block',
                                        color:'#444',            
                                        fontWeight: 'bold',
                                        padding:"5px"
                                    }}>
                                    रु{this.props.discountedPrice} </span>
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
                                        color: 'green',
                                        marginRight: '20px'
                                    }}>
                                        {this.props.discount}% Off
                                    </span>
                                    <i className="fa fa-minus-circle" 
                                    style={{fontSize:'35px'}}
                                    onClick= {this.props.subClick}>
                                    </i>                                      
                                    <span className="fa-stack fa-1x fa-lg">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <span className="fa fa-stack-1x">{this.props.quantity}</span>
                                    </span>
                                    <i className="fa fa-plus-circle" 
                                        style={{fontSize:'35px'}}
                                        onClick= {this.props.addClick}>
                                    </i>                                                                      
                                    <button type="submit" className="btn btn-default"
                                     style={{fontWeight:"bold", fontSize:'25px'}}
                                     onClick= {this.props.removeClick}>                                     
                                        REMOVE
                                    </button>  
                                </p>                            
                                {/* <div className='p-3' style={{fontSize:'25px'}}>
                                                                 
                                </div> */}
                            </div>
                    
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default CartItem;