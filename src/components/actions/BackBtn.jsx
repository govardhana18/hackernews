import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import backer from '../../assets/backer.png';
import { timestampToDt } from '../../utils';

export const BackBtn = (props) => {
    let history = useHistory();
    return (
        <h5 className="display-5 mt-3">
            <img src={backer} onClick={history.goBack} alt="back"/>
            <p style={{float:'right',fontSize: 13}}>{timestampToDt(props.timestamp)}</p>
        </h5>
    )
}

BackBtn.propTypes = {
    timestamp: PropTypes.number
};