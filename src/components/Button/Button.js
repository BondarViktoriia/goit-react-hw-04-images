import PropTypes from 'prop-types';
import { LoadMore,ButtonContainer } from './Button.styled';

export const Button = ({ onClick }) => {
  return (<ButtonContainer><LoadMore onClick={onClick}>Load More</LoadMore></ButtonContainer>);
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
