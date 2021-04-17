import styled from "styled-components";
import { PhoneOutlined } from "@ant-design/icons";

export const SectionContainer = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-color: rgba(114, 217, 224, 0.1);
	@media (min-width: 600px) {
		flex-grow: 0;
		margin-top: 10vh;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		/* border: 1px solid red; */
		/* height: 40vh; */
		border-top: 3px dotted #72d9e0;
		border-bottom: 3px dotted #72d9e0;
		padding: 3rem;
	}
`;

export const Title = styled.h1`
	/* border: 1px solid red; */
	width: 100%;
	text-align: center;
	margin: 0;
	@media (min-width: 1000px) {
		margin-bottom: 2rem;
		background-color: rgba(114, 217, 224, 0.1);
	}
`;

export const PhoneContainer = styled.div`
	border: 3px solid #72d9e0;
	background-color: rgba(114, 217, 224, 0.2);
	border-radius: 9px;
	height: 6rem;
	width: 90%;
	font-size: 1.5rem;
	padding: 0 0.5rem;
	display: flex;
	max-width: 400px;
	/* justify-content: center; */
	align-items: center;
	/* padding: 0 1rem; */
	* {
		/* border: 1px solid red; */
	}

	@media (min-width: 600px) {
		flex-direction: column;
		max-width: 200px;
		height: 150px;
	}
`;

export const PhoneIcon = styled(PhoneOutlined)`
	font-size: 2.5rem;
	width: 10%;
	@media (min-width: 600px) {
		width: 100%;
		height: 33%;
		text-align: right;
		/* flex-grow: 1; */
	}
`;

export const PhoneNumber = styled.a`
	flex-grow: 1;
	font-weight: 700;
	color: blue;
	text-align: right;
	&:hover {
		color: #72d9e0;
	}
	@media (min-width: 600px) {
		width: 100%;
		text-align: left;
		flex-grow: 0;
		height: 33%;
	}
`;

export const Info = styled.span`
	margin: 0 0.2rem;
	width: 30%;
	@media (min-width: 600px) {
		width: 100%;
	}
`;

export const PhoneSection = styled.div``;
