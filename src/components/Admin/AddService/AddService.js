import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = serviceData => {
        console.log(serviceData);
        serviceData = {...serviceData, imageURL };
        fetch("https://damp-scrubland-47351.herokuapp.com/addService", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(serviceData)
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
                <input className="form-control" placeholder="New Service Name" {...register("service", { required: true })} />
                {errors.service && <span className='text-danger'>This field is required</span>}
                <br/>
                <input className="form-control" placeholder="Description of the service" {...register("description", { required: true })} />
                <br/>
                {errors.description && <span className='text-danger'>This field is required</span>}
                <br/>
                <input className="form-control" placeholder="price" {...register("price", { required: true })} />
                {errors.price && <span className='text-danger'>This field is required</span>}
                <p>Upload a photo: </p>
                <input className="form-control" type="file" name ="image" onChange={handleImageUpload}/>
                <br/>
                <input className="form-control bg-light" type="submit" />
            </form>
        </div>
    );
};

export default AddService;