import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';
import AdminMain from '../AdminMain/AdminMain';

const Admin = () => {
    const [userLoggedIn] = useContext(UserContext);
    let history = useHistory();
    useEffect(()=>{
        fetch("https://damp-scrubland-47351.herokuapp.com/check?email="+userLoggedIn.email)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data === true){
                document.getElementById("admin").style.display='block';
            } 
        })
    }, [history, userLoggedIn.email])
        
    return (
        <div style={{display : 'none'}} id='admin'>
            <AdminMain></AdminMain>
        </div>
    );
};

export default Admin;