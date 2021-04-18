import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
	display: none;

	@media (min-width: 1000px) {
		display: inherit;
		height: 15vh;
		max-height: 160px;
		min-height: 130px;
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

const transition = keyframes`
from {border: 1px solid rgba(255, 255, 255, 0.5);
background-color: transparent
}
to { border: 1px solid #3333a1;
	background-color: rgba(255, 255, 255, 0.2);
	}

`;

export const LogoutContainer = styled.div`
	display: flex;
	width: 100px;
	margin-right: 5rem;
	flex-direction: column;
	align-items: center;
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 9px;
	padding: 1rem;
	cursor: pointer;

	a {
		font-size: 1.5rem;
		color: #3333a1;
		outline: none;
		font-weight: 700;
	}
	img {
		height: 2rem;
	}
	:hover {
		border: 1px solid #867ec8;
		animation-name: ${transition};
		animation-duration: 2000ms;
		animation-fill-mode: forwards;
		a {
			color: #867ec8;
		}
	}
`;

export const LogOutMobile = styled.div`
	position: absolute;
	right: 1rem;
	top: 1rem;
	justify-content: flex-end;
	text-align: right;
	height: 4rem;
	img {
		height: 2rem;
	}

	@media (min-width: 1000px) {
		display: none;
	}
`;
