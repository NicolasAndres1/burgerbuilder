import React from 'react';
import Button from '../../../Components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';

import classes from './ContactData.module.css';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Nicolas Andres',
                address: {
                    street: 'Calasanz',
                    number: '450',
                    zipCode: '7600',
                    country: 'Argentina'
                },
                email: 'nikoan97@hotmail.com'
            },
            deliveryHour: 'Right now'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false,
                })
            });

    }

    render() {
        let form = (<form>
            <input className={classes.input} type='text' name='name' placeholder="Name" />
            <input className={classes.input} type='email' name='email' placeholder="E-mail" />
            <input className={classes.input} type='text' name='street' placeholder="Street" />
            <input className={classes.input} type='text' name='postalCode' placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );

        if (this.state.loading) {
            form = (<Spinner />)
        }

        return (
            <div className={classes.ContactData}>
                <h4>Your data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;