import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onAddFeedback }) => {
  const stateArray = Object.keys(options);
  return (
    <div>
      {stateArray.map(option => (
        <button
          className={css.btn}
          type="button"
          key={option}
          name={option}
          onClick={() => onAddFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  onAddFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
