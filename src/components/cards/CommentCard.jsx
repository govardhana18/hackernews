import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { getComment } from '../../services';
import { timestampToDt } from '../../utils'


export const CommentCard = ({kidId}) => {
    const [comment, setComment] = useState({});
    useEffect(() => {
        getComment(kidId).then(data=>{
            setComment(data);
        }).catch(err=>{
            console.log("failed to get comment");
        })
    }, [kidId])

    return (
        <>
            {comment === null?
            null
            : 
            <>
            <div className="list-group ">
                <button type="button " className="list-group-item list-group-item-action "><b>{comment.by}: </b>{comment.text}<br/> 
                    <p style={{float:"right",marginBottom:0}}>{timestampToDt(comment.time)}</p>
                </button>
            </div>
            <br/>
            </>
            }
        </> 
    )
}

CommentCard.propTypes = {
    kidId: PropTypes.number
}