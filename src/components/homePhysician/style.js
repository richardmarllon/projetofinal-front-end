import styled from "styled-components";

export const ContentContainer = styled.div`
	@media (min-width: 1000px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 3%;
		overflow-x: hidden;
	}
`;
export const DesktopOnly = styled.div`
	display: none;
	@media (min-width: 1000px) {
		/* border: 1px solid red; */
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		min-height: 600px;
	}
`;
