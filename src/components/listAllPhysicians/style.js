import styled from "styled-components";
import { Pagination } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const SytledContainer = styled.div`
	border-radius: 20px;
	border: 3px solid #72d9e0;
	background-color: #e2f5f8;
	display: flex;
	-webkit-flex-direction: column;
	flex-flow: wrap;
	justify-content: center;
	margin: 0 20px;
	max-height: fit-content;
	height: fit-content;
	padding: 1rem;
`;

export const SytledCardInitial = styled.div`
	border-radius: 20px;
	background-color: #ccf0f4;
	padding: 1rem;
	max-width: 32em;
	border: 3px solid #72d9e0;
	margin: 0.5em;
	align-items: center;
	text-align: center;
	justify-content: center;
	width: -webkit-fill-available;
	display: grid;
	@media (min-width: 1514px) {
		display: flex;
		justify-content: center;
		place-content: space-around;
	}
`;

export const Avatar = styled.img`
	border: 2px solid rgb(51, 51, 161, 1);
	border-radius: 50%;
	width: 8rem;
	// transform: translateY(-50%);
`;

export const SytledCardSeeMore = styled.div`
	border-radius: 20px;
	background-color: #ccf0f4;
	padding: 1rem;
	max-width: 20em;
	border: 3px solid #72d9e0;
	font-size: x-large;
	margin: 0.5em;
	align-items: center;
	text-align: center;
	justify-content: center;
	display: grid;
	&:hover {
		color: white;
		background-color: #1890ff;
		cursor: pointer;
	}
`;

export const SytledCard = styled.div`
	display: flex;
	max-width: 80em;
`;

export const StyledPagination = styled(Pagination)`
	text-align: center;
	width: -webkit-fill-available;
`;

export const SytledTitle = styled.h3`
	width: -webkit-fill-available;
`;

export const StyledArrow = styled(ArrowLeftOutlined)`
	font-size: 2rem;
`;