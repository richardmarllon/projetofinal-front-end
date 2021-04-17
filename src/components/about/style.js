import styled from "styled-components";
import about from "../../images/about/about.jpg";

export const Container = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	background-color: rgba(114, 217, 224, 0.15);
	background-image: url(${about});
	background-size: cover;
	background-position: center;
`;

export const StyledText = styled.p`
	margin: 0 0 3rem 0;
	border: 3px solid rgba(114, 217, 224, 7);
	width: 90%;
	padding: 2rem;
	font-weight: 550;
	margin-top: 1rem;
	text-align: justify;
	border-radius: 9px;
	background-color: rgba(134, 126, 200, 0.4);
	backdrop-filter: blur(15px);
	max-width: 500px;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	@media (min-width: 1000px) {
		font-size: 1.5rem;
	}
`;
export const TextContainer = styled.div`
	flex-grow: 1;
	background-color: rgba(114, 217, 224, 0.15);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 1000px) {
		padding-top: 4rem;
		max-width: 50%;
		background-color: transparent;
	}
`;
