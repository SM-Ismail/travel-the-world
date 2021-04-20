import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import ManageOrders from '../ManageOrders/ManageOrders';

const Admin = () => {
    const [oldId, setOldId] = useState("");
    console.log(oldId);
    const handleButton = (id) => {
        document.getElementById(id).style.display = 'block';
        if(id !== oldId && document.getElementById(oldId) !== null) {
            document.getElementById(oldId).style.display = 'none';
        }
        setOldId(id);
    }
    
    return (
        <div>
            <h4 className="text-secondary fs-3 m-5">Hello, Admin !</h4>
            <div className="d-flex justify-content-around my-5">
                <button onClick={()=>handleButton("add-service")} className="btn btn-primary">Add a Service</button>
                <button onClick={()=>handleButton("manage-orders")} className="btn btn-warning">Manage Orders</button>
                <button onClick={()=>handleButton("add-admin")} className="btn btn-danger">Make an Admin</button>
            </div>
            <div style={{display:'none'}} id="add-service">
                <AddService />
            </div>
            <div style={{display:'none'}} id="manage-orders">
                <ManageOrders />
            </div>
            <div style={{display:'none'}} id="add-admin">
                <AddAdmin />
            </div>
        </div>
    );
};

export default Admin;