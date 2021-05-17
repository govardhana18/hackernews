import { PropTypes } from 'prop-types';

export const StoryCard = (props) => {
    return (
        <>
            <div className="list-group">
                <button type="button" className="list-group-item list-group-item-action ">{props.story.title}<br/> <br/> 
                    <p style={{float:"right",marginBottom:0}}>By: {props.story.by}</p>
                </button>
            </div>
        </> 
    )
}

StoryCard.propTypes = {
    title: PropTypes.string,
    by: PropTypes.string
}