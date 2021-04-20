import React from 'react';
import { useHistory } from 'react-router';

const InfoBox = ({info}) => {
    const {service, description, price, imageURL, _id} = info;
    let history = useHistory();
    const handleBuyNow = (id) => {
        history.push(`/checkout/${id}`);
    }
    return (
        <div class="card col-md-3 m-auto" style={{width: "18rem"}}>
            <img src={imageURL} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{service}</h5>
                <p class="card-text">{description}</p>
                <h4 class="card-text">{price}</h4>
                <button onClick={()=>handleBuyNow(_id)} class="btn btn-primary">Take the Package</button>
            </div>
        </div>
    );
};

export default InfoBox;