import { Button } from "antd";
import styled from "styled-components";

export const DiseaseContainer = styled.div`
	/* border: 1px solid green; */
	border: 1px solid rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

export const DiseaseInfo = styled.p`
	/* border: 1px solid red; */
	margin: 0;
`;

export const StyledDelBtn = styled(Button)`
	font-size: 1.2rem;
	width: 20%;
	border-radius: 5px;
	justify-self: flex-end;
	align-self: flex-end;
	position: relative;
`;
