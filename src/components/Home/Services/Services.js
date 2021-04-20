import React, { useEffect, useState } from 'react';
import InfoBox from '../InfoBox/InfoBox';


const Services = () => {
    const [servicesInfos, setServicesInfos] = useState([]);
    useEffect(() => {
        fetch("https://damp-scrubland-47351.herokuapp.com/allServices")
        .then(res => res.json())
        .then(data => setServicesInfos(data))
    }, [])
    console.log(servicesInfos);
    return (
        <section>
            <div>
                <h3 className="text-center fs-2 text-warning my-4">Our Customized Services for You</h3>
            </div>
            <div className="row my-4">
                {
                    servicesInfos.map(info => <InfoBox info={info}></InfoBox>)
                }
            </div>
        </section>
    );
};

export default Services;