import { PropTypes } from 'prop-types';

export const BreadCrumb = (props) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Story</li>
                <li className="breadcrumb-item active" aria-current="page">{props.id}</li>
            </ol>
        </nav>
    )
}

BreadCrumb.propTypes = {
    id: PropTypes.number
};