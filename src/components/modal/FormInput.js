import React, {useState} from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
	flex: 0 1;
	height: ${props => props.maxHeight};
	margin: .5em;
	width: 90%;
	font-size: 12px;
	color: ${colors.grey4}
`;

const FormInputField = styled.input`
	height: 100%;
	flex: 1;
	margin: .5em 0;
	border-radius: 30px;
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

const FormInput = ({label, setState, height, regexValidator}) => {
	const [valid, setValid] = useState(true);

	const regex = RegExp(regexValidator);

	const handleChange = (e) => {
		if (!regex.test(e.target.value)) {
			setValid(false);
			return setState(null);
		}
		setValid(true);
		return setState(e.target.value);
	};

	return (
		<FormLabel maxHeight={height}>
			{valid ? label : `${label} - Invalid Input`}
			<FormInputField type="text" onChange={handleChange} />
		</FormLabel>
	);
};

export default FormInput;
