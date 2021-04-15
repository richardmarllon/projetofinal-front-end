import styled from "styled-components";

export const StyledH1 = styled.h1`
	color: #0d1b2a;
	@media (min-width: 600px) {
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
		/* border: 1px solid red; */
		border: 3px solid #72d9e0;
		margin-top: 5%;
		max-width: 800px;
		height: 70vh;
		border-radius: 40px;
	}
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
	height: 5rem;
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* border: 1px solid red; */

	&.date {
		height: 4rem;
		width: 80%;
	}

	@media (min-width: 600px) {
		max-width: 250px;
		/* border: 1px solid red; */
		height: 4rem;

		&.date {
			height: 4rem;
		}
		&.email {
			min-width: 95%;
		}
		&.type {
			width: 95%;
			select {
				width: 50%;
			}
		}
		&.personal {
			min-width: 95%;
		}
	}
	@media (min-width: 1000px) {
		justify-content: space-around;
		align-items: center;
		&.type {
			select {
				width: 50%;
			}
		}
	}
`;
export const LogoTag = styled.img`
	transform: translateY(-50%);
`;

export const LogoContainer = styled.div`
	width: 100%;
	text-align: center;
	/* border: 1px solid red; */
	height: 5rem;
	/* position: relative;
	top: -12%; */
	/* transform: translateY(-50%); */
`;

export const StyledLabel = styled.span`
	width: 80%;
	text-align: left;
	@media (min-width: 600px) {
		display: none;
	}
`;

export const SendBtnContainer = styled.div`
	/* border: 1px solid green; */
	width: 100%;
	text-align: center;
	@media (min-width: 600px) {
		margin-top: 1rem;
	}
`;
export const ContentContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
`;
