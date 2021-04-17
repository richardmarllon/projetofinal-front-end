import styled from "styled-components";
import { LogoContainer, LogoTag } from "../../components/formLogin/style";

export const ContactContainer = styled.div`
	box-sizing: border-box;
	height: 100vh;
	display: flex;
	flex-direction: column;
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
