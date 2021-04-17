import { LogoTag } from "../formUserUpdateInfo/style";
import {
	BtnContainer,
	Container,
	StyledLogoContainer,
	StyledLogoTag,
	StyledText,
	TextContainer,
} from "./style";
import { HomeOutlined } from "@ant-design/icons";
import logo from "../../images/brand.svg";

const About = () => {
	return (
		<Container>
			<StyledLogoContainer>
				<StyledLogoTag src={logo} />
			</StyledLogoContainer>
			<BtnContainer>
				<HomeOutlined />
			</BtnContainer>
			<TextContainer>
				<StyledText>
					A Salute Uno é uma plataforma digital com acesso ao histórico de saúde
					completo de uma pessoa, desde seu nascimento até a fase adulta.
				</StyledText>
				<StyledText>
					Com a unificação dos dados será possível além de um acesso fácil ao
					acervo pessoal do paciente, como: carteirinha de vacinação, alergias,
					histórico de doenças e comorbidades, laudos de lesões e histórico de
					tratamentos, utilizá-los para pesquisas/censo, mapeamento e
					tratamentos precoces.
				</StyledText>
			</TextContainer>
		</Container>
	);
};

export default About;
