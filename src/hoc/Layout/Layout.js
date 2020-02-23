import React, { Component } from "react";
import {connect} from 'react-redux';
import Header from "../../components/Navigation/Toolbar/Header";
import classes from "./Layout.module.css";
import * as actions from '../../store/actions/index';

class Layout extends Component {
	
	applySearch = (search) => {        
        this.props.onSearch(search);        
    }
	render() {		
		return (
			<React.Fragment>
				<Header onSearch ={this.applySearch}></Header>
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
        onSearch: (sort)=>{dispatch(actions.updateSearch(sort))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
