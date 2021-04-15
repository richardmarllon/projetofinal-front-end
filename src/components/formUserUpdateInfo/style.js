import styled from "styled-components";

export const StyledH1 = styled.h1`
	color: #0d1b2a;
	font-size: 2rem;
	@media (min-width: 600px) {
		font-size: 3rem;
		width: 100%;
		text-align: center;
		margin: 0;
	}
`;

export const StyledSmall = styled.small`
	color: #ef7272;
	font-size: 0.9rem;
	font-weight: bold;
	margin: 0.2em 1rem;
`;

export const StyledPar = styled.p`
	text-align: center;
	color: #0d1b2a;
	font-size: 1.2rem;
	margin: 1em;
	padding: 0.25em 0.5em;
`;

export const StyledType = styled.p`
	display: inline-block;
	color: #0d1b2a;
	font-size: 1.5rem;
	width: 5rem;
	@media (min-width: 1000px) {
		width: fit-content;
		margin: 0;
	}
`;

export const StyledSpan = styled.span`
	color: #3333a1;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: bold;
`;

export const StyledForm = styled.form`
	margin-top: 30vh;
	background-color: rgba(114, 217, 224, 0.2);
	border-radius: 40px 40px 0 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 2rem;

	@media (min-width: 600px) {
		border: 3px solid #72d9e0;
		border-bottom: none;
		min-width: 50%;
		max-width: 650px;
		flex-direction: row;
		flex-wrap: wrap;
		height: fit-content;
		justify-content: space-evenly;
		margin: 30vh auto;
	}
	@media (min-width: 1000px) {
		border: 3px solid #72d9e0;
		margin-top: 5%;
		max-width: 800px;
		border-radius: 40px;
	}
	${(props) =>
		props.type === "modal" &&
		`border-radius: 0px !important; margin: 0;
		
		${LogoContainer}{
			display: none;
		}
		
		`}
`;

export const StyledButton = styled.input`
	color: #0d1b2a;
	font-size: 2rem;
	border: none;
	width: 70%;
	height: 5rem;
	background-color: #72d9e0;
	border-radius: 9px;
	outline: none;
	cursor: pointer;
	max-width: 300px;
`;

export const StyledInput = styled.input`
	color: #0d1b2a;
	width: 100%;
	height: 3rem;
	border: none;
	font-size: 1.2rem;
	border-radius: 9px;
	padding-left: 1rem;
	&:focus {
		border: 2px double #3333a1;
		box-shadow: 0px 0px 5px #867ec8;
	}
	@media (min-width: 600px) {
	}
`;

export const StyledTextarea = styled.input`
	margin: 1rem 1rem;
	padding: 0.5rem 0.5rem;
	width: 96%;
	font-size: 1.2rem;
	border-radius: 8px;
	resize: none;
	border: none;
`;

export const StyledSelect = styled.select`
	color: #0d1b2a;
	font-size: 1.2rem;
	padding: 1rem;
	background-color: #ffff;
	border: none;
	border-radius: 9px;
	cursor: pointer;
`;
export const InputContainer = styled.div`
	box-sizing: border-box;
	width: 90%;
	display: flex;
	margin: 0.5rem 0;
	flex-direction: column;
	max-width: 300px;

	@media (min-width: 1000px) {
		margin: 0 2.5% 0.2rem 0;
	}
`;
export const LogoTag = styled.img`
	transform: translateY(-50%);
`;

export const LogoContainer = styled.div`
	width: 100%;
	text-align: center;
	height: 5rem;
`;

export const StyledLabel = styled.span`
	font-size: 1.2rem;
	color: rgba(51, 51, 161, 1);
	width: 90%;
	font-weight: 700;
	padding-left: 1rem;
	text-align: left;
	transform: translateY(50%);
`;

export const SendBtnContainer = styled.div`
	width: 100%;
	text-align: center;
	@media (min-width: 600px) {
		margin-top: 1rem;
	}
`;

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
`;

export const SectionContainer = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.15);
	margin-bottom: 1rem;
	display: flex;
	width: 90%;
	justify-content: center;
	flex-wrap: wrap;
	@media (min-width: 1000px) {
		justify-content: flex-start;
		padding: 1rem 5%;
	}
`;

export const StyledLabelForm = styled.label`
	text-transform: capitalize;
`;
