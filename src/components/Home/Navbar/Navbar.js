import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [userLoggedIn] = useContext(UserContext);
    
    return (
        <section className="d-flex justify-content-between bg-light">
            <div>
                <h4 className="mt-3 ms-3 fs-3" style={{color:"green"}}>TravelTheWorld.com</h4>
                <p className="mt-1 ms-3 fs-6 text-warning">{userLoggedIn.name}</p>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/admin">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/addReview">Review</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/myTours">My Tours</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/addStory">Story</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/login">Log In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/contactUs">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </section>
    );
};

export default Navbar;