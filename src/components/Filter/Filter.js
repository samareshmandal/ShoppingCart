import React, { Component } from "react";
import {connect} from 'react-redux';
// import CartItem from './CartItem/CartItem'
import axios from '../../hoc/axiosItems';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/index';
import classes from './Filter.module.css';
import '../../App.css'
class Filter extends Component{
    state= {
        filterMin:0,
        filterMax:1000
    }
    rangeInputChangeEventHandler =(event, inpCtrlName) => {
                
        var minBtn = document.getElementsByName('range_1')[0],
        maxBtn = document.getElementsByName('range_2')[0],
        range_min = document.getElementsByName('range_min')[0],
        range_max = document.getElementsByName('range_max')[0],
        maxVal =0, minVal=0;
        console.log(origin);
        if(inpCtrlName==='min')
        {            
            minVal = event.target.value
            maxVal = parseInt(maxBtn.value)
            if(maxVal - minVal>20){
                this.setState({filterMin:minVal});                
                range_min.innerText=minVal
            }                        
        }
        else
        {
            minVal = parseInt(minBtn.value)
            maxVal = event.target.value
            if(maxVal - minVal> 20){
                this.setState({filterMax:maxVal});
                range_max.innerText=maxVal;
            }            
        }
    }
    render(){     
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div>
                            <span 
                                style ={{textTransform: 'capitalize',
                                display:'inline-block',
                                color:'#444',            
                                fontWeight: 'bold',
                                padding:"5px"
                                }}>
                                Filters 
                            </span>
                        </div>
                        <div>
                            <div className="rangeslider">
                                <input className="min" name="range_1" type="range" min="1" max="1000" value={this.state.filterMin} onChange ={(event)=> this.rangeInputChangeEventHandler(event,'min')} />
                                <input className="max" name="range_2" type="range" min="1" max="1000" value={this.state.filterMax} onChange ={(event)=> this.rangeInputChangeEventHandler(event,'max')} />
                                <span className="range_min light left" name ="range_min">{this.state.filterMin}</span>
                                <span className="range_max light right" name ="range_max">{this.state.filterMax}</span>
                                
                            </div>
                        </div>
                        <div>
                            <div>
                                <button className="applyBtn" onClick= {() => this.props.clicked(this.state)}>
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Filter