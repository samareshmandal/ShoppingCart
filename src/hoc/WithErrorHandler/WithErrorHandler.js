import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";


const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		};

		componentDidMount() {
			this.reqInterceptors = axios.interceptors.request.use((req) => {
				this.setState({ error: null });
				return req;
			});
			this.resInterceptors = axios.interceptors.response.use(
				(res) => res,
				(error) => {
					this.setState({ error: error });
				}
			);
		}

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptors);
			axios.interceptors.response.eject(this.resInterceptors);
		}

		errorConfirmHandler = () => {
			this.setState({ error: null });
		};

		render() {
			return (
				<React.Fragment>
					<Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props}></WrappedComponent>
				</React.Fragment>
			);
		}
	};
};

export default withErrorHandler;
