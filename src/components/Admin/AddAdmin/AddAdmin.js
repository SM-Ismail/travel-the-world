import React from 'react';
import { useForm } from "react-hook-form";


const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = newAdminData =>{ 
        console.log(newAdminData);
        fetch("https://damp-scrubland-47351.herokuapp.com/addAdmin",{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAdminData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%" }} className="m-auto">
                {/* register your input into the hook by invoking the "register" function */}
                <input className="form-control" placeholder="Name" {...register("name", { required: true })} />

                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <input className="form-control" placeholder="Email" {...register("email", { required: true })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className='text-danger'>This field is required</span>}
                <br />
                <input className="form-control bg-light" type="submit" />
            </form>
        </div>
    );
};

export default AddAdmin;