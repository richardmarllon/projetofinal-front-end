import styled from "styled-components";

export const SytledContainer = styled.div`
	border-radius: 20px;
	border: 3px solid #72d9e0;
	background-color: #e2f5f8;
	width: 60vw;
	display: flex;
	margin: 20px 20px;
	max-width: 60em;
	max-height: 30vh;
	height: fit-content;
	padding: 1rem;
	margin-top: 0px;
	margin-right: 0px;
`;

export const SytledCardInitial = styled.div`
	border-radius: 20px;
	background-color: #ccf0f4;
	padding: 1rem;
	max-width: 20em;
	border: 3px solid #72d9e0;
	margin: 0.5em;
	align-items: center;
	text-align: center;
	justify-content: center;
	display: grid;
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
