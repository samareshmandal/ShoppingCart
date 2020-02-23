import React, { Component } from "react";
import {connect} from 'react-redux';
import CartItem from './Item/Item'
import axios from '../../hoc/axiosItems';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter';
import * as actions from '../../store/actions/index';

class Home extends Component{
    state = {
        search:null,
        filter:10000,
        sort: 0 //0- highLow.1- LowHigh.2-Discoount        
    }

    componentDidMount()
    {        
        this.props.onFetchItems();        
        let filterItems = this.props.items.filter(item => item.price> this.state.filter);        
    }

    handleAddClick = (id)=>{    
        let item = this.props.items.find(item=> id === item.id)        
        this.props.onAddToCart(item); 
    }
    handleFilterChange= (e) =>{
        this.setState({ filter: e.target.value });
      }

    applyFilterHandler = () => {        
        this.props.onFilter(this.state.filter);        
    }

    applySortHandler = (sort) => {        
        this.props.onSort(sort);        
    }

    render(){        
        let items = <Spinner/>;
        if(!this.props.loading)
        {
            let filterItems = this.props.items.filter(item => item.price < this.props.filter);
            filterItems = this.props.items.filter(item => item.price < this.props.filter);            
            switch(this.props.sort+'')
            {
                case '1':                    
                    filterItems.sort((a, b) => (b.price - a.price));
                    break;
                case '2':                    
                    filterItems.sort((a, b) => (a.price - b.price));
                    break;
                case '3':                    
                    filterItems.sort((a, b) => (b.discount - a.discount));
                    break;
            }                                    
            items=filterItems.map(item => 
                <CartItem key={item.id}
                id = {item.id}
                name= {item.name}
                originalPrice = {item.price}
                price= {(item.price *(100- item.discount)/100)}
                img_url = {item.img_url}
                discount= {item.discount}
                addClick = {()=> this.handleAddClick(item.id)}
                />
            );
        }
        return (
            <React.Fragment>                
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-3'>
                        <Filter filterChange = {this.handleFilterChange} clicked = {this.applyFilterHandler} />
                    </div>
                    <div className='col-12 col-md-12 col-lg-9'>
                        <div className="row">
                            <Sort sorted = {this.applySortHandler} />                        
                        </div>
                        <div className="row">
                                            
                            {items}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );        
    }
}

const mapStateToProps = state => {
    return{        
        items:state.prod.items,
        loading: state.prod.loading,
        cartItems: state.cart.cartItems,
        filter: state.prod.filter,
        sort: state.prod.sort
    };
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchItems: () => dispatch(actions.fetchItems()),
        onAddToCart: (item)=>{dispatch(actions.addToCart(item))},
        onFilter: (filter)=>{dispatch(actions.updateFilter(filter))},
        onSort: (sort)=>{dispatch(actions.updateSort(sort))}
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));
