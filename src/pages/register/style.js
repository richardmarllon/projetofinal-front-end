import styled from "styled-components";

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	@media (min-width: 600px) {
		width: fit-content;
	}
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

export const DocContainer = styled.div`
	display: none;
	@media (min-width: 1000px) {
		box-sizing: border-box;
		align-self: flex-end;
		display: flex;
		justify-content: center;
		width: 50%;
	}
`;
export const DocTag = styled.img`
	@media (min-width: 1000px) {
		max-width: 600px;
	}
`;

export const RegContainer = styled.div`
	width: 100%;
	@media (min-width: 1000px) {
	}
`;
