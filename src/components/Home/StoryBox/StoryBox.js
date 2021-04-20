import React from 'react';

const StoryBox = ({story}) => {
    const {name, storyText, imageURL, storyTitle} = story;
    return (
            <div class="card col-md-3 m-auto" style={{width: "18rem"}}>
                <img src={imageURL} class="card-img-top" alt="..." />
                <div class="card-body">

                    <h4 class="card-title">{storyTitle} </h4>
                    <p class="card-text">{storyText}</p>
                    <h5 class="card-text">{name}</h5>
                </div>
            </div>
    );
};

export default StoryBox;