import styled from "styled-components";
import { Pagination } from "antd";
import { Modal } from "antd";
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
	width: -webkit-fill-available;
`;

export const SytledCardInitial = styled.div`
	border-radius: 20px;
	background-color: #ccf0f4;
	padding: 1rem;
	max-width: 27em;
	border: 3px solid #72d9e0;
	margin: 0.5em;
	align-items: center;
	text-align: center;
	justify-content: center;
	width: -webkit-fill-available;
	display: grid;
`;

export const SytledEnvelop = styled.div`
	display: contents;
`;

export const SytledCard = styled.div`
	display: flex;
	max-width: 80em;
`;

export const StyledPagination = styled(Pagination)`
	text-align: center;
	width: -webkit-fill-available;
`;

export const StyledModal = styled(Modal)`
	background-color: #ccf0f4;
`;

export const SytledTitle = styled.h3`
	width: -webkit-fill-available;
`;
