import React from 'react';
//import Header from '../Header/Header';
import './Destinations.css';

const Destinations = () => {
    return (
        <div className="destinations">
            <h3>Top Destinations of this Month</h3>
            <div className='row'>
                <div className='col-md-4'>
                    <h5>Asia</h5>
                    <ul>
                        <li>Bangladesh</li>
                        <li>India(South)</li>
                        <li>Pataya, Thailand</li>
                        <li>Bali, Indonesia</li>
                        <li>Osaka, Japan</li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h5>Oceania</h5>
                    <ul>
                        <li>Australia</li>
                        <li>New Zealand</li>
                        <li>French Polynesia</li>
                        <li>Fiji</li>
                        <li>Tasmania, Australia</li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h5>Africa</h5>
                    <ul>
                        <li>Tanzania(Serengeti National Park, Mount Kilimanzaro)</li>
                        <li>Okavango Delta, Botswana</li>
                        <li>Kalahari Desert, Namibia</li>
                        <li>South Africa</li>
                        <li>Morocco</li>
                        <li>Egypt</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <h5>Europe</h5>
                    <ul>
                        <li>UK(London, Edinburgh and classic English Country)</li>
                        <li>Germany(Berlin, Southern Alps region) </li>
                        <li>France(Paris, Corsica)</li>
                        <li>Vienna, Austria</li>
                        <li>Copenhagen, Denmark</li>
                        <li>Norway</li>
                        <li>Spain</li>
                        <li>Italy(Venice, Rome)</li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h5>North America</h5>
                    <ul>
                        <li>USA</li>
                        <li>Nayagra Falls, Canada</li>
                        <li>Mexico</li>
                        <li>Havana, Cuba</li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h5>South America</h5>
                    <ul>
                        <li>Brazil</li>
                        <li>Argentina</li>
                        <li>Peru</li>
                        <li>Equador</li>
                        <li>FalkLand Islands</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Destinations;