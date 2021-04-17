import styled from "styled-components";
import { LogoContainer, LogoTag } from "../../components/formLogin/style";

export const ContactContainer = styled.div`
	box-sizing: border-box;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1000px) {
		height: 80vh;
	}
`;

export const StyledLogoContainer = styled(LogoContainer)`
	box-sizing: border-box;
	height: 15vh;
	max-height: 120px;
	display: flex;
	max-width: 95vw;
	padding-top: 1rem;
	@media (min-width: 1000px) {
		display: none;
	}
`;

export const StyledTag = styled(LogoTag)`
	transform: translateY(0%);
	width: 30%;
	margin-left: 1rem;
`;
export const StyledBrand = styled.img`
	width: 70%;
`;

export const HomeContainer = styled.div`
	background-color: rgba(114, 217, 224, 0.08);
	text-align: center;
	width: 100%;
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	svg {
		font-size: 2rem;
	}
	img {
		height: 2rem;
	}

	@media (min-width: 600px) {
		justify-content: flex-end;
		border-bottom: 1px solid rgba(114, 217, 224);
	}
	@media (min-width: 1000px) {
		transform: translateY(-100%);
	}
`;
export const BtnContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	font-weight: 700;
	width: 6rem;
	flex-direction: column;
	margin: 0 1rem;
	:hover {
		cursor: pointer;

		color: #3333a1;
		svg,
		img {
			filter: invert(54%) sepia(52%) saturate(370%) hue-rotate(207deg)
				brightness(87%) contrast(93%);
		}
	}
`;
