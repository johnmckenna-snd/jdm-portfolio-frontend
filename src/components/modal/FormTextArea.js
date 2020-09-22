import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
	flex: 1 1;
	max-height: ${props => props.maxHeight};
	margin: .5em;
	font-size: 12px;
	color: ${colors.grey4}
`;

const FormInputField = styled.textarea`
	height: 200px;
	flex: 1;
	margin: .5em 0;
	width: 90%;
	resize: none;
	border-radius: 10px;
	border-style: solid;
	border-width: 1px;
	border-color: ${colors.grey2};
	padding: .4em 1em;
	font-size: 12px;

	&:focus {
		outline: none;
		border-color: ${colors.purple1_70};
	}
`;

const FormInput = ({label, setState, height}) => {
	const handleChange = (e) => {
		return setState(e.target.value);
	};

	return (
		<FormLabel maxHeight={height}>
			{label}
			<FormInputField type="text" onChange={handleChange} rows="20" />
		</FormLabel>
	);
};

export default FormInput;
