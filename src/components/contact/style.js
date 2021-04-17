import styled from "styled-components";
import { PhoneOutlined } from "@ant-design/icons";
import call from "../../images/contact/contact.svg";

export const SectionContainer = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	justify-content: space-evenly;
	background-color: rgba(114, 217, 224, 0.1);
	@media (min-width: 600px) {
		flex-grow: 0;
		margin-top: 10vh;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		border-top: 3px dotted #72d9e0;
		border-bottom: 3px dotted #72d9e0;
		padding: 3rem;
	}

	@media (min-width: 1000px) {
		background-image: url(${call});
		background-size: contain;
		background-repeat: no-repeat;
		margin-top: 15vh;
	}
`;

export const Title = styled.h1`
	width: 100%;
	text-align: center;
	margin: 0;
	@media (min-width: 1000px) {
		width: 70%;
		margin-left: 30%;
		margin-bottom: 2rem;
		background-color: rgba(114, 217, 224, 0.2);
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
	align-items: center;
	:hover {
		background-color: rgba(114, 217, 224, 0.4);
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
	}
`;

export const PhoneNumber = styled.a`
	flex-grow: 1;
	font-weight: 550;
	color: blue;
	text-align: right;
	&:hover {
		color: #0d1b2a;
		font-weight: 700;
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

export const PhoneSection = styled.div`
	display: none;
	@media (min-width: 1000px) {
		display: initial;
		width: 30%;
		height: 80%;
	}
`;
