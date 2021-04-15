import styled from "styled-components";

export const ContentContainer = styled.div`
	@media (min-width: 1000px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 5%;
		overflow-x: hidden;
	}
`;
export const DesktopOnly = styled.div`
	display: none;
	@media (min-width: 1000px) {
		flex-grow: 1;
		margin: 5%;
		display: flex;
		flex-direction: column;
	}
`;
