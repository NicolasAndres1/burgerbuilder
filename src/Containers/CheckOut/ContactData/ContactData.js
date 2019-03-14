import React from 'react';
import Button from '../../../Components/UI/Button/Button';

import classes from './ContactData.module.css';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Your data</h4>
                <form>
                    <input className={classes.input} type='text' name='name' placeholder="Name"/>
                    <input className={classes.input} type='email' name='email' placeholder="E-mail"/>
                    <input className={classes.input} type='text' name='street' placeholder="Street"/>
                    <input className={classes.input} type='text' name='postalCode' placeholder="Postal Code"/>
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;