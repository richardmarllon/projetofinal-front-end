import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: none;

	@media (min-width: 1000px) {
		display: inherit;
		height: 15vh;
		max-height: 160px;
		/* position: fixed; */
		width: 100%;
		background: rgba(114, 217, 224, 0.7);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	height: 90%;

	img {
		max-height: 70%;
	}
`;

export const LogoutContainer = styled.div`
	display: flex;
	width: 100px;

	a {
		font-size: 2rem;
		color: #3333a1;
		outline: none;
		font-weight: 700;
		&:hover {
			color: #867ec8;
		}
	}
`;
