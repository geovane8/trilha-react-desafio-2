mport styled from "styled-components";
import PropTypes from "prop-types";

const ButtonContainer = styled.button background-color: #fafafa; border: 1px solid #fafafa; border-radius: 20px; height: 62px; width: 80%; margin: 20px; &:hover { background-color: #fafafa40; cursor: pointer; };

const Button = ({ onClick }) => {
return <ButtonContainer onClick={onClick}>Buscar</ButtonContainer>;
};

Button.propTypes = {
onClick: PropTypes.func.isRequired,
};

export default Button;
