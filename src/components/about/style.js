import styled from "styled-components";
import { LogoContainer, LogoTag } from "../formUserUpdateInfo/style";

export const Container = styled.div`
	/* border: 2px solid blue; */
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: rgba(114, 217, 224, 0.15);
	@media (min-width: 1000px) {
		align-items: center;
	}
`;

export const StyledLogoContainer = styled(LogoContainer)`
	margin-top: 2rem;
	/* border: 1px solid red; */
	height: fit-content;
	@media (min-width: 1000px) {
		display: none;
	}
`;

export const StyledLogoTag = styled(LogoTag)`
	margin-top: 0;
	transform: translateY(0%);
	width: 100%;
`;

export const StyledText = styled.p`
	margin: 0 0 3rem 0;
	border: 3px solid rgba(114, 217, 224, 7);
	width: 90%;
	padding: 1rem;
	text-align: justify;
	border-radius: 9px;
	background-color: rgba(114, 217, 224, 0.2);
`;
export const TextContainer = styled.div`
	flex-grow: 1;
	background-color: rgba(114, 217, 224, 0.15);
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1000px) {
		/* border: 1px solid red; */
		padding-top: 4rem;
		max-width: 80%;
		background-color: transparent;
	}
`;

export const BtnContainer = styled.div`
	border-top: 3px solid rgba(114, 217, 224, 0.7);
	/* padding: 1rem 0; */
	background-color: rgba(114, 217, 224, 0.15);
	text-align: center;
	font-size: 3rem;
	height: 5rem;
	@media (min-width: 1000px) {
		display: none;
	}
`;
