import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import colors from '../../styles/colors';

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1040;
	width: 100vw;
	height: 100vh;
	background-color: ${colors.grey3};
	opacity: .5;
`;

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1050;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	outline: 0;

`;

const ModalContainer = styled.div`
	z-index: 100;
	background: ${colors.grey2};
	position: relative;
	margin: 1.75rem auto;
	border-radius: 10px;
	width: 30%;
	flex: 1 1;
	padding: 2rem;

	@media (max-width: 1300px) {
		width: 50%;
	}

	@media (max-width: 1000px) {
		width: 70%;
	}

	@media (max-width: 600px) {
		width: 70%;
	}
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const ModalCloseButton = styled.button`
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1;
	color: ${colors.grey3};
	cursor: pointer;
	border: none;
	background: none;
	outline: none;
`;

const ModalCloseX = styled.span`
	&:hover {
		color: ${colors.purple1};
	}
`;

const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
	<React.Fragment>
		<ModalOverlay onClick={hide} />
		<ModalWrapper tabIndex={-1} role="dialog">
			<ModalContainer>
				<ModalHeader>
					<ModalCloseButton type="button" data-dismiss="modal" onClick={hide}>
						<ModalCloseX>&times;</ModalCloseX>
					</ModalCloseButton>
				</ModalHeader>
				{children}
			</ModalContainer>
		</ModalWrapper>
	</React.Fragment>, document.body
) : null;

export default Modal;
