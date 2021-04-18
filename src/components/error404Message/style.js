import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const Div = styled.div`
	justify-content: center;
	flex-direction: column;
`;

export const Small = styled.small``;

export const HomeContainer = styled.div`
	background-color: rgba(114, 217, 224, 0.15);
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 5%;
	@media (min-width: 1000px) {
		justify-content: center;
		height: 100vh;
	}
`;

export const ContainerError = styled.div`
	background-color: #f6f9fb;
	height: 70vh;
	margin-top: 10vh;
	min-height: 70vh;
	border-radius: 40px 40px 0 0;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 1rem;
	@media (min-width: 600px) {
		height: 100%;
		border-radius: 0;
		width: 100vw;
		margin-top: 0;
		border-bottom: none;
	}
	@media (min-width: 1000px) {
		width: 99vw;
		margin-top: 0;
		text-align: center;
		height: a00%;
		min-width: 360px;
	}
`;

export const ImageReference = styled.a`
	margin-left: 1rem;
	text-align: end;
	@media (min-width: 1000px) {
		text-align: center;
	}
`;

export const ImgError = styled.img`
	max-width: 370px;
	@media (min-width: 1000px) {
		max-width: 750px;
		width: 600px;
		height: 600px;
	}
`;

export const StyledArrow = styled(ArrowLeftOutlined)`
	width: 8vw;
	font-size: 2rem;
	color: #0d1b2a;
`;
