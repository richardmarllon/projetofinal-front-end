import styled from "styled-components";

export const CardSearch = styled.div`
	flex-grow: 1;
	border-radius: 40px;
	display: flex;
	justify-content: center;
`;

export const Div = styled.div`
	&.btn {
		width: 60%;
		text-align: center;
	}
`;

export const Input = styled.input`
	width: 60%;
	height: 3rem;
	border-radius: 9px;
	padding-left: 1rem;
	font-size: 1.2rem;
	outline: none;
	border: 3px solid rgba(114, 217, 224, 1);
	&:focus {
		border: 3px solid #3333a1;
		box-shadow: 0px 0px 5px #867ec8;
	}
`;

export const Button = styled.button`
	margin-top: 1rem;
	width: 40%;
	min-width: 150px;
	height: 3rem;
	border-radius: 9px;
	border: none;
	outline: none;
	font-size: 2rem;
	background-color: rgba(114, 217, 224, 1);
	&:hover {
		background-color: rgba(114, 217, 224, 0.7);
	}
`;

export const FormSearch = styled.form`
	width: 80%;
	padding: 5rem 0;
	border-radius: 40px;
	background-color: rgba(114, 217, 224, 0.2);
	height: fit-content;
	border: 3px solid rgba(114, 217, 224, 1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const StyledTitle = styled.h3`
	padding: 0.5rem 0;
	width: 60%;
	&::before {
		content: "-";
		color: #3333a1;
		margin-right: 0.5rem;
		background-color: #3333a1;
		min-width: 5px;
		min-height: 2rem;
	}
`;
