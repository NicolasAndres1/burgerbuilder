import React from 'react';
import Order from '../../Components/Order/Order';


class Orders extends React.Component {
    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;