import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Row from '../Admin/Row/Row';

const DashBoard = () => {
    const [userLoggedIn] = useContext(UserContext);
    const [orderInfo, setOrderInfo] = useState([]);
    useEffect(()=>{
        fetch("https://damp-scrubland-47351.herokuapp.com/orders?email="+userLoggedIn.email)
        .then(res => res.json())
        .then(data => setOrderInfo(data))
    },[userLoggedIn.email])
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
                        orderInfo.map(order => <Row order={order}/>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DashBoard;