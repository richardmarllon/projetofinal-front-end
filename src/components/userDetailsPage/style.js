import styled from "styled-components";
import ModalStyled from "../modal";

export const HomePatientContainer = styled.div`
	@media (min-width: 1000px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 3%;
		overflow-x: hidden;
	}
`;

export const ActionsContainer = styled.div`
	flex-grow: 1;
	margin: 1%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const BtnContainer = styled.div`
	border: 3px solid rgba(114, 217, 224, 1);
	height: 40%;
	border-radius: 40px;
	background-color: rgba(114, 217, 224, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledBtn = styled.button`
	margin-top: 1rem;
	width: 50%;
	min-width: 150px;
	height: 5rem;
	border-radius: 9px;
	border: none;
	outline: none;
	font-size: 2rem;
	background-color: rgba(114, 217, 224, 1);
	&:hover {
		background-color: rgba(114, 217, 224, 0.7);
	}
`;

export const ModalButton = styled(ModalStyled)``;
