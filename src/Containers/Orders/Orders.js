import React from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ orders: fetchedOrders, loading: false });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        const orderList = this.state.orders[0] == null ? <h3>Nothing here, let's add some burgers!</h3>
            : this.state.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />))

        return (
            <div>
                {orderList}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);