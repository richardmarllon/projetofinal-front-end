import styled from "styled-components";

export const StyledH1 = styled.h1`
	color: #0d1b2a;
`;

export const StyledParErr = styled.p`
	color: #ef7272;
	font-size: 1rem;
	font-weight: 700;
`;

export const StyledPar = styled.p`
	color: #0d1b2a;
`;

export const StyledType = styled.p`
	display: inline-block;
	color: #0d1b2a;
	font-size: 1.5rem;
	width: 5rem;
	margin: 1.5rem;
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
	height: 70vh;
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
	width: 70vw;
	height: 5rem;
	background-color: #72d9e0;
	border-radius: 9px;
	outline: none;
	cursor: pointer;
`;

export const StyledInput = styled.input`
	color: #0d1b2a;
	width: 80vw;
	height: 4rem;
	border: none;
	font-size: 2rem;
	border-radius: 9px;
	padding-left: 1rem;
	&:focus {
		border: 2px double #3333a1;
		box-shadow: 0px 0px 5px #867ec8;
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

export const InputContainer = styled.div`
	box-sizing: border-box;
	height: 6rem;
	width: 100%;
	text-align: center;
`;
