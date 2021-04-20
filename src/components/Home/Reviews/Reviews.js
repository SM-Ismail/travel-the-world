import React, { useEffect, useState } from 'react';
import ReviewBox from '../ReviewBox/ReviewBox';

const Reviews = () => {
    const [reviewsInfos, setReviewsInfos] = useState([]);
    useEffect(()=>{
        fetch("https://damp-scrubland-47351.herokuapp.com/reviews")
        .then(res=>res.json())
        .then(data=>setReviewsInfos(data))
    },[])

    return (
        <section>
            <div>
                <h3 className="text-center fs-2 text-warning my-5">Reviews from Our Tourists</h3>
            </div>
            <div className="row my-4">
                {
                    reviewsInfos.map(rev => <ReviewBox rev={rev}></ReviewBox>)
                }
            </div>
        </section>
    );
};

export default Reviews;