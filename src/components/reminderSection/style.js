import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";


export const ReminderContainer = styled.div`
 	@media (min-width: 1000px) {
 		display: flex;
 		flex-direction: row;
 		justify-content: flex-start;
 		padding: 3%;
 		overflow-x: hidden;		
 	}
`;

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

export const StyledArrow = styled(ArrowLeftOutlined)`
	font-size: 2rem;
`;
