import React, { Component } from 'react';
import Modal from '../Components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            });
        }

        hideErrorHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <>
                    <Modal
                        showModal={this.state.error}
                        modalClosed={this.hideErrorHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withErrorHandler;