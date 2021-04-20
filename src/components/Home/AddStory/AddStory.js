import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddStory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = storyData => {
        console.log(storyData);
        storyData = {...storyData, imageURL };
        fetch("https://damp-scrubland-47351.herokuapp.com/addStory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(storyData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
        //You can enjoy travelling all alone. Whether it is mountain or ocean you will only be with yourself.
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
                <input className="form-control" placeholder="Your Name" {...register("name", { required: true })} />
                {errors.name && <span className='text-danger'>This field is required</span>} 
                <br/>
                <input className="form-control" placeholder="Your Email" {...register("email", { required: true })} />
                <br/>
                {errors.email && <span className='text-danger'>This field is required</span>}
                <br/>
                <input className="form-control" placeholder="Title for your story" {...register("storyTitle", { required: true })} />
                {errors.storyTitle && <span className='text-danger'>This field is required</span>}
                <br/>
                <input className="form-control" placeholder="Tell your story to the world" {...register("storyText", { required: true })} />
                {errors.storyText && <span className='text-danger'>This field is required</span>}
                <p>Upload a photo: </p>
                <input className="form-control" type="file" name ="image" onChange={handleImageUpload}/>
                <br/>
                <input className="form-control bg-light" type="submit" />
            </form>
        </div>
    );
};

export default AddStory;