import React from 'react';
// import Header from '../Header/Header';
import girlWavingHairAndHand from '../../../pics/girlWavingHairAndHand.jpg';
import coupleInTurkey from '../../../pics/coupleInTurkey.jpg';
import lookingAtMap from '../../../pics/lookingAtMap.jpg';
import './HeaderMain.css';


const HeaderMain = () => {
    const handleLearnMore = () => {
        document.getElementById('learn-more').style.display = 'block';
    }
    return (
        <main>
            <div className="items">
                <h3 className="texts">Travel your Dream Destinations!! <br /> with us</h3>
                <p className="p">Travelling is life, isn't it?</p>
                <p className="p"> After all, they say #YOLO !</p>
                <button onClick={handleLearnMore} className="btn btn-info">Learn more</button>
            </div>  
            <div id="learn-more" >
                <p>Sign up with us and let us plan everything for your trip. Choose a service of ours and our consultant will talk to you for every detailed plan of your trip.</p>
            </div>
        </main>
    );
};

export default HeaderMain;