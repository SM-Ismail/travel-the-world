import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch("https://damp-scrubland-47351.herokuapp.com/allOrders")
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">email</th>
                        <th scope="col">service</th>
                        <th scope="col">price</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <Row order={order}/>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;