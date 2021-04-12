import styled from "styled-components";

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1000px) {
		flex-direction: row;
		justify-content: space-around;
		width: 99vw;
		max-width: 1500px;
		margin: 0 auto;
	}
`;

export const BrandMobileContainer = styled.div`
	height: 30vh;
	margin-bottom: -30vh;
	text-align: center;
	@media (min-width: 1000px) {
		display: none;
	}
`;

export const BrandTag = styled.img`
	margin-top: 3vh;
	width: 100vw;
	max-width: 400px;
`;

export const FamilyContainer = styled.div`
	display: none;
	@media (min-width: 1000px) {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		width: 50%;
	}
`;
export const FamilyTag = styled.img`
	@media (min-width: 1000px) {
		height: 35vw;
		max-width: 900px;
	}
`;

export const LoginContainer = styled.div`
	width: 100%;
	max-width: 600px;
	@media (min-width: 1000px) {
		width: 40%;
	}
`;
