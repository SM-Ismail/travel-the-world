import React, { useState }  from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = reviewData => {
        console.log(reviewData);
        reviewData = {...reviewData, imageURL };
        fetch("https://damp-scrubland-47351.herokuapp.com/addReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '35454ff9895106ad18a19b3f14a69082');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(imageURL);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{width:"50%"}} className="m-auto">
                <input className="form-control" placeholder="Name" {...register("name", { required: true })} />
                {errors.name && <span className='text-danger'>This field is required</span>}
                <br/>
                <input className="form-control" placeholder="email" {...register("email", { required: true })} />
                <br/>
                {errors.email && <span className='text-danger'>This field is required</span>}
                <br/>
                <input className="form-control" placeholder="Your review please" {...register("review", { required: true })} />
                {errors.review && <span className='text-danger'>This field is required</span>}
                <br/>
                <p>Upload your best photo from the tour: </p>
                <input className="form-control" type="file" name ="image" onChange={handleImageUpload}/>
                <br />
                <input className="form-control bg-light" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;