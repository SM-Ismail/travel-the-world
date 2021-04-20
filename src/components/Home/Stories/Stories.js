import React, { useEffect, useState } from 'react';
import StoryBox from '../StoryBox/StoryBox';

const Stories = () => {
    const [stories, setStories] = useState([]);
    useEffect(()=>{
        fetch("https://damp-scrubland-47351.herokuapp.com/stories")
        .then(res=>res.json())
        .then(data=>setStories(data))
    },[])
    console.log(stories);
    
    return (
        <section>
            <div>
                <h3 className="text-center fs-2 text-warning my-5">Stories made . . . </h3>
            </div>
            <div className="row my-4">
                {
                    stories.map(story => <StoryBox story={story}></StoryBox>)
                }
            </div>
        </section>
    );
};

export default Stories;