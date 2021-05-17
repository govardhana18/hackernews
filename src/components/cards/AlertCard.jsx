import { PropTypes } from 'prop-types';

export const AlertCard = (props) => {
    return (
        <div className="alert alert-secondary" style={{textAlign:"center"}}>{props.alert}</div>
    )
}

AlertCard.propTypes = {
    alert: PropTypes.string
}