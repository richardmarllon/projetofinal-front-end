import styled from "styled-components";

export const StyledH1 = styled.h1`
	color: #0d1b2a;
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
`;

export const StyledSpan = styled.span`
	color: #3333a1;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: bold;
`;

export const StyledForm = styled.form`
	margin-top: 20vh;
	background-color: rgba(114, 217, 224, 0.2);
	border-radius: 40px 40px 0 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 2rem;
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
`;

export const StyledInput = styled.input`
	color: #0d1b2a;
	width: 80%;
	height: 3rem;
	border: none;
	font-size: 1.2rem;
	border-radius: 9px;
	padding-left: 1rem;
	&:focus {
		border: 2px double #3333a1;
		box-shadow: 0px 0px 5px #867ec8;
	}
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
	height: 5rem;
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: space-around;
	align-items: center;
	&.date {
		height: 6.5rem;
		flex-direction: column;
	}
`;
export const LogoTag = styled.img`
	transform: translateY(-50%);
`;

export const LogoContainer = styled.div`
	width: 100%;
	text-align: center;
`;

export const StyledLabel = styled.span`
	width: 80%;
	text-align: left;
`;
