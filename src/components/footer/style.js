import styled from "styled-components";

export const FooterContainer = styled.footer`
	display: none;
	@media (min-width: 1000px) {
		display: flex;
		min-width: 100%;
		justify-content: space-between;
		background: rgba(114, 217, 224, 0.7);
		height: 5vh;
		max-height: 70px;
	}
`;

export const LinkContainer = styled.div`
	width: 20%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	a {
		font-size: 1.2rem;
		color: #0d1b2a;
		font-weight: 700;
		&:hover {
			color: #3333a1;
		}
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-around;
	margin-right: 1rem;

	span:first-child {
		font-weight: 700;
	}
`;
