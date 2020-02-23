import React from "react";
import {connect} from 'react-redux';
import classes from "./NavigationItems.module.css";
import {NavLink} from 'react-router-dom';
import * as actions from '../../../store/actions/index';


const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		{/* <NavigationItem link="/" exact>Home</NavigationItem> */}
		{/* <NavigationItem link="/search" ><i class="fa fa-search" style={{'font-size':'30px'}}></i></NavigationItem>
		<NavigationItem link="/cart" ><i class="fa fa-shopping-cart" style={{'font-size':'30px'}}></i></NavigationItem> */}
		<li >
			<div className='SearchWrap d-flex'>
				<input  type ="text" placeholder="Search"></input>
				<i className="fa fa-search" style={{'fontSize':'30px'}}></i>
				{/* <NavLink to="/search">
					
				</NavLink> */}
			</div>
		</li>
		<li>
			{/* <span className="fa-stack fa-2x has-badge" data-count="5">
				
				<i  className="fa fa-shopping-cart fa-stack-2x white-cart"></i>
			</span> */}
			<div className='SearchWrap d-flex'>
				<NavLink to="/cart" >
					<span className="fa-stack fa-2x has-badge"
						style={{height:'40px'}} 
						data-count={props.cartItems.reduce((sum,item)=> sum + item.quantity,0)}>							
                            				
						<i  className="fa fa-shopping-cart fa-stack-2x white-cart" style={{'fontSize':'40px'}}></i>
					</span>				
				</NavLink>
			</div>
			
		</li>
	</ul>
);

const mapStateToProps = state => {
    return{        
        cartItems: state.cart.cartItems
    };
}

export default connect(mapStateToProps)(navigationItems);
