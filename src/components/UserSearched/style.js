import styled from "styled-components";
import { BloodImg } from "../userBasicInfo/style";

export const Container = styled.div`
	flex-grow: 1;
	border-radius: 40px;
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	height: 30%;
	background-color: rgba(114, 217, 224, 0.2);
	border: 3px solid rgba(114, 217, 224, 1);
	margin: 0 auto;
`;

export const Title = styled.h3``;

export const GenericText = styled.small`
	font-size: 1.2rem;
`;

export const BloodResult = styled(BloodImg)`
	justify-self: flex-start;
	width: 80%;
	height: 100%;
	border-radius: 40px 0 0 40px;
	border-right: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Info = styled.div`
	padding: 1rem;
	flex-grow: 1;
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Blood = styled.div`
	height: 100%;
	display: flex;
	width: 10%;
	min-width: 100px;
	align-items: center;
`;
export const StyledBtn = styled.button`
	margin-top: 1rem;
	width: 40%;
	min-width: 150px;
	max-width: 250px;
	height: 3rem;
	border-radius: 9px;
	transform: translateX(-20%);
	border: none;
	outline: none;
	margin: 0 auto;
	font-size: 2rem;
	background-color: rgba(114, 217, 224, 1);
	&:hover {
		background-color: rgba(114, 217, 224, 0.7);
	}
`;
