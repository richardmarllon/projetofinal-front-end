import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const ReminderContainer = styled.div`
	border-radius: 20px;
	border: 3px solid #72d9e0;
	background-color: #e2f5f8;
	display: flex;
	flex-direction: column;
	-webkit-flex-direction: column;
	flex-flow: wrap;	
	justify-content:center;	
	margin: 0 20px;
	max-height: fit-content;
	height: fit-content;
	padding: 2rem;
	width: -webkit-fill-available;
`;


export const CardSearch = styled.div`
	flex-grow: 1;
	border-radius: 40px;
	display: flex;
	justify-content: center;
`;


export const SytledEnvelop = styled.div`
	display: contents;
`;

export const SytledTitle = styled.h3`
	width: -webkit-fill-available;
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
	width: 100%;
	text-align: left;
`;
