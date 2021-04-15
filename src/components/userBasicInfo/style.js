import styled from "styled-components";
import op from "../../images/blood/o+.svg";
import om from "../../images/blood/o-.svg";
import ap from "../../images/blood/a+.svg";
import am from "../../images/blood/a-.svg";
import bp from "../../images/blood/b+.svg";
import bm from "../../images/blood/b-.svg";
import abp from "../../images/blood/ab+.svg";
import abm from "../../images/blood/ab-.svg";

export const ContainerUser = styled.div`
	background-color: rgba(114, 217, 224, 0.15);
	margin-top: 40vh;
	min-height: 70vh;
	border-radius: 40px 40px 0 0;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 1rem;
	@media (min-width: 600px) {
		border: 3px solid #72d9e0;
		max-width: 600px;
		margin: 0 auto;
		border-bottom: none;
	}
	@media (min-width: 1000px) {
		border-bottom: 3px solid #72d9e0;
		border-radius: 40px;
		margin: 0;
		height: fit-content;
		min-width: 360px;
	}
`;

export const NameUser = styled.h1`
	width: 100%;
	text-align: center;
	font-weight: 500;
	height: 5rem;
`;

export const Div = styled.div`
	background: rgba(114, 217, 224, 0.2);
	border: 3px solid #72d9e0;
	min-height: 3rem;
	border-radius: 20px;
	width: 100%;
	text-align: center;
	margin: 1rem 0;
	align-self: center;

	&.avatar {
		border: none;
		background-color: transparent;
		height: 8rem;
		img {
			width: 50%;
			max-width: 200px;
		}
		@media (min-width: 1000px) {
			height: fit-content;
		}
	}
	&.blood {
		height: 30vw;
		width: 40%;
		max-width: 160px;
		max-height: 110px;
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
			flex-grow: 1;
			border-radius: 50%;
			min-width: 50%;
		}
	}
	&.details {
		display: flex;
		flex-wrap: wrap;
		padding-left: 1rem;
		flex-direction: column;
		min-height: 8rem;
		width: 90%;
		max-width: 400px;
		p:first-child {
			font-size: 1.5rem;
		}
		div {
			border: none;
			background-color: transparent;
		}
		li {
			text-decoration: none;
			list-style: none;
			text-align: left;
			width: 95%;
			margin: 0 auto;
		}
	}
`;

export const CardsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	div.alergies {
		height: 30vw;
		width: 40%;
		max-width: 160px;
		max-height: 110px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		p {
			font-size: 3rem;
			padding: 0;
			margin: 0;
			text-align: center;
			font-weight: 700;
			${(props) =>
				props.alergic === "nao" ? `color: #0D1B2A` : `color: rgb(164,74,63,1)`};
		}
	}
`;
export const P = styled.p`
	text-align: left;
	padding-left: 1rem;
`;

export const Button = styled.button`
	display: none;

	&.vacina {
		align-self: center;
		display: initial;
		color: #0d1b2a;
		font-size: 2rem;
		border: none;
		width: 70%;
		height: 5rem;
		background-color: #72d9e0;
		border-radius: 9px;
		outline: none;
		cursor: pointer;
	}
`;

export const Avatar = styled.img`
	border: 2px solid rgb(51, 51, 161, 1);
	border-radius: 50%;
	transform: translateY(-50%);
	@media (min-width: 1000px) {
		transform: translateY(0);
	}
`;

export const Ul = styled.ul``;

export const Li = styled.li``;

export const GenericText = styled.small`
	font-size: 2rem;
`;
export const BloodImg = styled.img`
	max-width: 100px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	${(props) => props.type === "O+" && `background-image: url(${op})`};
	${(props) => props.type === "O-" && `background-image: url(${om})`};
	${(props) => props.type === "A+" && `background-image: url(${ap})`};
	${(props) => props.type === "A-" && `background-image: url(${am})`};
	${(props) => props.type === "B+" && `background-image: url(${bp})`};
	${(props) => props.type === "B-" && `background-image: url(${bm})`};
	${(props) => props.type === "AB+" && `background-image: url(${abp})`};
	${(props) => props.type === "AB-" && `background-image: url(${abm})`};
`;
