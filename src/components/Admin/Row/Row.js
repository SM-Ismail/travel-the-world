import React from 'react';

const Row = (props) => {
    const order = props.order;
    console.log(order);
    return (
        <tr>
            <th scope="row">{order.paymentId}</th>
            <td>{order.email}</td>
            <td>{order.service}</td>
            <td>{order.price}</td>
            <td></td>
        </tr>
    );
};

export default Row;