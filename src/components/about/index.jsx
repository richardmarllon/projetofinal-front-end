import { Container, StyledText, TextContainer } from "./style";

const About = () => {
	return (
		<Container>
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
