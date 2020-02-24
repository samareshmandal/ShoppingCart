import React, { Component } from "react";
import {connect} from 'react-redux';
import Header from "../../components/Navigation/Toolbar/Header";
import classes from "./Layout.module.css";
import * as actions from '../../store/actions/index';

class Layout extends Component {
	
	gotoHome = () => {		
		this.props.history.push('/');
	};

	applySearch = () => {
		this.props.onSearch(document.getElementById("txtSearch").value);        
	};
	
	render() {		
		return (
			<React.Fragment>
				<Header onSearch ={this.applySearch} onHome ={this.gotoHome}></Header>
				<main className={classes.Content}>
					<div className='container-fluid'>
						{this.props.children}
					</div>
				</main>			
				<div className={classes.Footer}>@Copyright</div>	
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => {
    return{               
        search: state.prod.search
    };
}

const mapDispatchToProps = dispatch => {
    return{        
        onSearch: (search)=>{dispatch(actions.updateSearch(search))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
