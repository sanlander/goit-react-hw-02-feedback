import PropTypes from 'prop-types';
import { firstLetterToUppercase } from 'components/utils/firstLetterToUppercase';
import { Button } from './Buttons.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map((option, ind) => (
        <Button type="button" onClick={onLeaveFeedback[ind]} key={ind}>
          {firstLetterToUppercase(option)}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
