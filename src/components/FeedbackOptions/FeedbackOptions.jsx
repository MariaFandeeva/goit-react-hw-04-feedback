import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onAddFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.btn}
          type="button"
          key={option}
          name={option}
          onClick={onAddFeedback}
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
