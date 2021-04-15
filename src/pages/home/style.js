import styled from "styled-components";

export const HomeContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (min-width: 1000px) {
		justify-content: center;
		height: 85vh;
	}
`;
