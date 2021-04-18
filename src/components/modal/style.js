import { Modal } from "antd";
import styled from "styled-components";

export const ModalContainer = styled.div`
	&.ant-modal-body {
		width: 600px;
	}
	button.ant-btn {
		margin-top: 1rem;
		width: 30vw;
		min-width: 150px;
		height: 5rem;
		border-radius: 9px;
		border: none;
		outline: none;
		font-size: 2rem;
		background-color: rgba(114, 217, 224, 1);
		&:hover {
			background-color: rgba(114, 217, 224, 0.7);
			color: #0d1b2a;
		}
	}
`;
export const ModalContent = styled(Modal)`
	.ant-modal-body {
		background-color: transparent;
		border: none;
		margin: 0;
		padding: 0;
	}
`;
