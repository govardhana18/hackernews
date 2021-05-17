import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getStory } from '../../services';
import { timestampToDt } from '../../utils'

export const CompleteStoryCard = ({storyId}) => {

    const [story, setStory] = useState({});
    useEffect(() => {
        console.log("starting...");
        getStory(storyId).then(data=>{
            setStory(data)        
            console.log(data)
        }).catch(err=>{
            console.log("failed to get story");
        })
    }, [storyId])

    return (
        <>
        {story === null ?
            null
        :
            <Link to={"/storyDetails/"+story.id}>
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action font-weight-bold">{story.id} : {story.by}<p style={{float:"right"}}>{timestampToDt(story.time)}</p>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">{story.title}
                    </button>
                </div>
                <br/>  
            </Link>
        }   
        </>
    )
}

CompleteStoryCard.propTypes = {
    storyId: PropTypes.string
}