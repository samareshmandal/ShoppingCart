import React, { Component } from "react";
import {connect} from 'react-redux';
// import CartItem from './CartItem/CartItem'
import axios from '../../hoc/axiosItems';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/index';
import classes from './Filter.module.css';
class Filter extends Component{

    render(){            
        return (
            <React.Fragment>
                <span 
                    style ={{textTransform: 'capitalize',
                    display:'inline-block',
                    color:'#444',            
                    fontWeight: 'bold',
                    padding:"5px"
                    }}>
                    Filters 
                </span>
                <label for="vol">Price (between 100 and 1000)</label>
                <input type="range" id="vol" name="vol" min="100" max="1000" style={{width:'100%'}} onChange= {this.props.filterChange}/>
                <button className={classes.applyBtn} onClick= {this.props.clicked}>
                        Apply
                </button>
            </React.Fragment>
        )
    }
}

export default Filter