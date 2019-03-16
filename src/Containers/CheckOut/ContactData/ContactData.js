import React from 'react';
import Button from '../../../Components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Forms/Input/Input'

import classes from './ContactData.module.css';

class ContactData extends React.Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name '
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street '
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code '
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country '
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail '
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    option: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
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

    inputChangedHandler = (event ,inputID) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const formElement = {
            ...updatedOrderForm[inputID]
        };
        formElement.value = event.target.value;
        updatedOrderForm[inputID] = formElement;
        this.setState({orderForm: updatedOrderForm});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (<form>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            ))}
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