import styled from "styled-components";

export const CardContainer = styled.section`	
	margin: .5vw .5vw;
	max-width: 30vw;
	max-height: 20vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	background-color: rgba(114, 217, 224, 0.15);
	border: 2px solid  #72d9e0;
	border-radius: 10px;
`;
export const Title = styled.h3`
	min-width: 100%;
	text-align: center;
	background-color: #72d9e0;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`;

export const InfoContainer = styled.div`
	margin-right: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Info = styled.div`
	text-align:center;
	margin-bottom: .5vw;
`;
