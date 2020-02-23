import React, { Component } from "react";
import {connect} from 'react-redux';
// import CartItem from './CartItem/CartItem'
import axios from '../../hoc/axiosItems';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/index';
import classes from './Sort.module.css';

class Sort extends Component{
    render(){           
        return (
            <div className ={classes.Sort}>                
                <p>
                    <span 
                        style ={{textTransform: 'capitalize',
                        display:'inline-block',
                        color:'#444',            
                        fontWeight: 'bold',
                        padding:"5px"
                    }}>
                        Sort By 
                    </span>
                    <button type="submit" className="btn btn-default"
                        style={{fontWeight:"bold", fontSize:'15px', color:'grey'}}
                        onClick= {()=> this.props.sorted(1)}>                                     
                        Price -- High Low
                    </button> 
                    <button type="submit" className="btn btn-default"
                        style={{fontWeight:"bold", fontSize:'15px', color:'grey'}}
                        onClick= {()=> this.props.sorted(2)}>                                       
                        Price -- Low High
                    </button>

                    <button type="submit" className="btn btn-default"
                        style={{fontWeight:"bold", fontSize:'15px', color:'grey'}}
                        onClick= {()=> this.props.sorted(3)}>                                      
                        Discount
                    </button>
                </p>
            </div>
        )
    }
}

export default Sort;