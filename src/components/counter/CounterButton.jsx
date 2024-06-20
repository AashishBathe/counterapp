import { PropTypes } from 'prop-types';

export function CounterButton({ by, incrementCounterParent, decrementCounterParent }) {

    return (
        <div className="CounterButton">
            <div>
                <button className="countButton"
                    onClick={() => incrementCounterParent(by)}
                > +{by}</button>
                <button className="countButton"
                    onClick={() => decrementCounterParent(by)}
                > -{by}</button>
            </div>
        </div>
    );
}
CounterButton.propTypes = {
    by: PropTypes.number
};
CounterButton.defaultProps = {
    by: 1
};
