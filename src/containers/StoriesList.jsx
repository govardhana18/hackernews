import { useState, useEffect } from 'react';
import { getStoryIds } from '../services';
import { Loader } from '../components/actions/Loader';
import { AlertCard } from '../components/cards/AlertCard';
import { CompleteStoryCard } from '../components/cards/CompleteStoryCard';
import * as constants from '../constants';

export const StoriesList = () => {
    const [storyIds, setStoryIds] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("starting...");
        getStoryIds().then(data=>{
            setStoryIds(data.slice(0,constants.MAX_STORIES))        
            setLoading(false)
        }).catch(err=>{
            setLoading(false);
            console.log("failed to get storyIds");
        })
    }, [])

    return (
        <>
            {loading === true?
                <Loader/>
            :
                <>
                    {storyIds.length === 0 ?
                        <AlertCard alert="No stories found, try again."/>
                    :   
                        storyIds.map(sid=> <CompleteStoryCard key={sid} storyId={sid}/>)
                    }
                </>
            }   
        </>
    )
}