import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { BreadCrumb } from '../components/BreadCrumb';
import { BackBtn } from '../components/actions/BackBtn';
import { StoryCard } from '../components/cards/StoryCard';
import { Heading } from '../components/Heading';
import { Loader } from '../components/actions/Loader';
import { AlertCard } from '../components/cards/AlertCard';
import { CommentCard } from '../components/cards/CommentCard';
import { getStory } from '../services';
import * as constants from '../constants';

export const Details = () => {
    let { id } = useParams();
    const [story, setStory] = useState({});
    const [commentIds, setCommentIds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        getStory(id).then(data=>{
            setStory(data);
            setCommentIds(data.kids.slice(0,constants.MAX_COMMENTS));
            setLoading(false);
        }).catch(err=>{
            setLoading(false);
            console.log("failed to get commentIds");
        })
    }, [id])

    return (
        <main role="main">
            <div className="container">
                
                <div>
                    {loading === true?
                    <Loader/>
                    :<>
                        <BackBtn timestamp={story.time}/>
                        <hr/>
                        <BreadCrumb id={story.id}/>
                        <StoryCard story={story}/>
                    </>
                    } 

                    <Heading heading={"Comments ("+commentIds.length+")"}/>
                    {loading === true?
                        <Loader/>
                    : 
                        commentIds.length === 0 ?
                            <AlertCard alert="No comments found."/>
                        :
                        <> 
                            <div style={{fontSize: 12}}>
                                {commentIds.map(kid => <CommentCard key={kid} kidId={kid}/>)}
                            </div>
                        </>
                    }
                </div>
                <div style={{marginBottom:100}}></div>
            </div>
        </main>
    )
}