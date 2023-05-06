import styled from "styled-components";
import PropTypes from "prop-types";

const InputContainer = styled.div border: 1px solid #fafafa; border-radius: 20px; height: 62px; width: 80%; margin: 20px; input { background: transparent; border: 0; width: 90%; height: 62px; padding: 0 20px; color: #ffffff; font-size: 20px; };

const Input = ({ value, onChange }) => {
return (
<InputContainer>
<input value={value} onChange={onChange} />
</InputContainer>
);
};

Input.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};

export default Input;
