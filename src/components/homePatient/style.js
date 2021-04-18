import styled from "styled-components";

export const HomePatientContainer = styled.div`
	@media (min-width: 1000px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 5%;
		overflow-x: hidden;
	}
`;

export const ActionsContainer = styled.div`
	flex-grow: 2;
	margin: 3%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	max-width: 600px;
	margin: 0 auto;
	@media (min-width: 1000px) {
		min-height: 85vh;
		max-width: 100%;
		margin: 0;
		justify-content: flex-start;
		align-items: center;
	}
`;
export const BtnContainer = styled.div`
	border: 3px solid rgba(114, 217, 224, 1);
	height: 20%;
	border-radius: 40px;
	background-color: rgba(114, 217, 224, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5%;
	@media (min-width: 1000px) {
		height: 40%;
		min-width: 80%;

		margin: 0 0 5% 0;
	}
`;

export const StyledBtn = styled.button`
	margin: 1rem 0;
	width: 60%;
	min-width: 150px;
	height: 5rem;
	border-radius: 9px;
	border: none;
	outline: none;
	font-size: 1.5rem;
	background-color: rgba(114, 217, 224, 1);
	&:hover {
		background-color: rgba(114, 217, 224, 0.7);
	}
	@media (min-width: 1000px) {
		height: 7rem;
		font-size: 2rem;
	}
`;
