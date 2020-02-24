import React from "react";
import {NavLink} from 'react-router-dom';
import classes from "./Header.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import 'font-awesome/css/font-awesome.min.css';


const headerComp = (props) => (
	<header className={classes.HeaderComp}>
		{/* <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle> */}
		<div className='container-fluid'>
			<div style={{float:"left"}}>
				<NavLink to="/" >
					<i className="fa fa-star pt-3" style={{color:'rgb(247,205,34)', 'fontSize':'40px'}} ></i>
				</NavLink>
			</div>
			<div style={{float:"right"}}>
				<nav className={classes.DesktopOnly}>
					<NavigationItems onSearch ={props.onSearch}/>
				</nav>
			</div>			
			
		</div>
	</header>
);

export default headerComp;
