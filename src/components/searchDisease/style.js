import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";

export const SearchContainer = styled.div`
	/* border: 2px solid red; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* flex-wrap: wrap; */
`;

export const StyledInput = styled.input`
	width: 50%;
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

export const StyledBtn = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	width: 3rem;
	height: 3rem;
	margin-left: -2rem;
	border-radius: 50%;
	:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}
`;

export const ResultContainer = styled.span`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h3`
	text-align: center;
	margin: 0;
`;

export const DiseaseDetails = styled.p`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	width: 100%;
	padding: 0 1rem;
	margin: 0.5rem 0 0 0;
`;
export const AddBtn = styled(Button)`
	color: #0d1b2a;
	font-size: 1.5rem;
	margin-top: 1.5%;
	height: 3rem;
	/* padding: 0.5rem; */
	width: 40%;
	background-color: #72d9e0;
	border-radius: 8px;
	border: none;
	outline: none;
	:hover {
		background-color: rgba(114, 217, 224, 0.7);
		color: black;
	}
`;

export const StyledCheck = styled.input``;

export const StyledDiv = styled.div`
	width: 100%;
	height: 4rem;

	display: flex;
	flex-grow: wrap;
	justify-content: space-evenly;
	align-items: center;
	h3 {
		border: 0;
		margin: 0;
		/* border: 1px solid red; */
		font-size: 1.2rem;
	}
`;

export const SearchIcon = styled(SearchOutlined)`
	font-size: 2rem;
`;
