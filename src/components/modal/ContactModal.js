import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import RoundedButton from '../button/RoundedButton';
import LoadingSpinnerSmall from '../loading-spinner/LoadingSpinnerSmall';
import colors from '../../styles/colors';

const apiUrl = process.env.REACT_APP_EMAIL_API;

const EmailContactForm = styled.form`
	display: flex;
	flex-direction: column;
	height: 80%;
	flex: 1;
	align-content: flex-start;
`;

const EmailContactH1 = styled.h1`
	font-size: 32px;
	margin: 0px 0px 20px 28px;
	padding: 0px;
	color: ${colors.grey3};
`;

const ErrorP = styled.p`
	color: ${colors.yellow1};
`;

const EmailRegexValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailContactModal = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [formError, setFormError] = useState(false);
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);

	console.log('email in modal', email);
	console.log('message in modal', message);

	const handleClick = async (e) => {
		e.preventDefault();
		if (!name || !email || !message) return setFormError(true);
		console.log('submit!', name, email, message);
		setSending(true);
		try {
			const result = await axios.post(apiUrl, { 'name': name, 'email': email, 'content': message });
			console.log(result);
			if (result.status === 200) return [setSending(false), setSent(true)];
		} catch (err) {
			console.log(err);
		}
	};

	return (
			sent
				? <EmailContactH1>Thank you!</EmailContactH1>
				: <Fragment>
					<EmailContactH1>get in touch</EmailContactH1>
					<EmailContactForm>
						<FormInput label="name" setState={setName} height="15%" />
						<FormInput label="email" setState={setEmail} height="15%" regexValidator={EmailRegexValidator} />
						<FormTextArea label="message" setState={setMessage} height="55%" />
						{formError ? <ErrorP>Please fill out all fields and make sure they are valid</ErrorP> : ''}
						{sending ? <LoadingSpinnerSmall /> : <RoundedButton onClick={handleClick} children="Send!" />}
					</EmailContactForm>
				</Fragment>
	);
};

export default EmailContactModal;
