import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer } from './styles';

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
