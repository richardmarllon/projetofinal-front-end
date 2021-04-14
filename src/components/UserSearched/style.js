import styled from "styled-components";
import { BloodImg } from "../userBasicInfo/style";

export const Container = styled.div`
	border: 1px solid red;
	flex-grow: 1;
	border-radius: 40px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-evenly;
	width: 80%;
	/* align-items: center; */
	height: 30%;
	background-color: rgba(114, 217, 224, 0.2);
	border: 1px solid red;
	border: 3px solid rgba(114, 217, 224, 1);
	margin: 0 auto;
`;

export const Title = styled.h3``;

export const GenericText = styled.small`
	font-size: 1.2rem;
`;

export const BloodResult = styled(BloodImg)`
	justify-self: flex-start;
	/* border: 1px solid red; */
	width: 80%;
	height: 100%;
	/* border-radius: 50%; */
	border-radius: 40px 0 0 40px;
	border-right: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Info = styled.div`
	/* border: 1px solid red; */
	/* flex-grow: 1; */
	width: 60%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
export const Blood = styled.div`
	height: 100%;
	width: 20%;
	display: flex;
	align-items: center;
`;
export const StyledBtn = styled.button`
	margin-top: 1rem;
	width: 40%;
	min-width: 150px;
	height: 3rem;
	border-radius: 9px;
	border: none;
	outline: none;
	margin: 0 auto;
	font-size: 2rem;
	background-color: rgba(114, 217, 224, 1);
	&:hover {
		background-color: rgba(114, 217, 224, 0.7);
	}
`;
