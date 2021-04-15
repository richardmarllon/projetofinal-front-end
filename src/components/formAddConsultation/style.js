import styled from "styled-components";
import { Button } from "antd";

export const StyledH3 = styled.h3`
	text-align: center;
	color: #0d1b2a;
	font-size: 2rem;
	margin: 1em;
	padding: 0.25em 1em;
`;

export const StyledSmall = styled.small`
	color: #ef7272;
	font-size: 0.9rem;
	font-weight: bold;
	margin: 0.2em 1rem;
`;

export const StyledPar = styled.p`
	color: #0d1b2a;
	font-size: 1.2rem;
	margin: 0.25rem;
	padding: 0.25em 0.5em;
	&.exam {
		border: 1px solid rgba(0, 0, 0, 0.15);
		/* text-align: left; */
		display: flex;
		/* justify-content: flex-start; */
	}
`;

export const StyledSpan = styled.span`
	color: #3333a1;
	font-size: 1.2rem;
	font-weight: bold;
`;

export const StyledForm = styled.form`
	margin-top: 1rem;
	margin-left: 1rem;
	width: 330px;
	border: 2px solid #72d9e0;
	border-radius: 10px;
	background-color: rgba(114, 217, 224, 0.2);
`;

export const StyledButton = styled.input`
	color: #0d1b2a;
	font-size: 1.2em;
	margin: 0.5% 2.5%;
	padding: 0.25em;
	width: 18%;
	height: 2.5%;
	background-color: #72d9e0;
	border-radius: 8px;
	border-color: transparent;
	cursor: pointer;
`;

export const StyledButtonAnt = styled(Button)`
	color: #0d1b2a;
	font-size: 1.5rem;
	margin: 1.5% 2.5%;
	padding: 0.25em 0.25rem;
	width: 25%;
	height: 2.5%;
	background-color: #72d9e0;
	border-radius: 8px;
	border: none;
	outline: none;
`;

export const StyledInput = styled.input`
	color: #0d1b2a;
	font-size: 1.3rem;
	margin: 0.5% 1.5%;
	width: 35%;
	padding: 0.5rem 0.3rem;
	border-radius: 5px;
	border: 1px solid #ffff;
	background-color: #ffff;
	&.date {
		cursor: pointer;
	}
`;

export const StyledTextarea = styled.textarea`
	padding-left: 1rem;
	width: 100%;
	font-size: 1.2rem;
	border-radius: 8px;
	resize: none;
	border: none;
`;

export const StyleBlockDiv = styled.div`
	color: #0d1b2a;
	font-size: 1.3rem;
	margin: 0.5rem auto;
	padding: 1rem;
	width: 95%;
	border: 2px solid #72d9e0;
	border-radius: 10px;
	background-color: rgba(114, 217, 224, 0.2);
	&.colapse {
		div {
			font-size: 1.2rem;
			text-align: left;
			background-color: transparent;
		}
	}
	div.ant-collapse-header {
		background-color: rgba(255, 255, 255, 0.5);
	}
`;

export const SytledHead = styled.div`
	padding: 3%;
	font-size: 2rem;
	text-align: center;
	font-weight: bold;
	background-color: #72d9e0;
`;
export const SytledContainer = styled.div`
	margin: auto;
	width: 100%;
	text-align: center;
	border-radius: 10px;
	background-color: rgba(114, 217, 224, 0.2);
`;

export const BasicText = styled.small`
	font-size: 1.2rem;
	padding: 0 1rem;
	:first-child {
		min-width: 5%;
	}
	:last-child {
		flex-grow: 1;
		text-align: right;
		padding-right: 1rem;
	}
`;
