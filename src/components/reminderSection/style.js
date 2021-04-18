import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";


export const ReminderContainer = styled.div`
	border-radius: 20px;
	border: 3px solid #72d9e0;
	background-color: #e2f5f8;
	display: flex;
	-webkit-flex-direction: column;
	flex-flow: wrap;
	justify-content: center;
	margin: 0 20px;
	margin-top: 15px;
	max-height: fit-content;
	height: fit-content;
	padding: 1rem;
	width: -webkit-fill-available;
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

export const StyledTitle = styled.h3`
	width: -webkit-fill-available;
`;

export const SytledEnvelop = styled.div`
	display: contents;
`;

export const StyledArrow = styled(ArrowLeftOutlined)`
	font-size: 2rem;
	width: 100%;
	text-align: left;
`;
