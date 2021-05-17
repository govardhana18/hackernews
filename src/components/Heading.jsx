import { PropTypes } from 'prop-types';

export const Heading = (props) => {
    return (
        <>
        <br/>
        <h6 className="display-5">{props.heading}</h6>
        <hr/>
        </>
    )
}
Heading.propTypes = {
    heading: PropTypes.string
}