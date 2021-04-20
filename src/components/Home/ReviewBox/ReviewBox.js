import React from 'react';

const ReviewBox = ({rev}) => {
    const {name, review, imageURL} = rev;
    return (
            <div class="card col-md-3 m-auto" style={{width: "18rem"}}>
                <img src={imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{review}</p>
                </div>
            </div>
    );
};

export default ReviewBox;