import { Link } from "react-router-dom";
import { FooterContainer, LinkContainer, InfoContainer } from "./style";

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<LinkContainer>
					<Link to="/about">Sobre</Link>
					<Link to="/contact">Contato</Link>
				</LinkContainer>
				<InfoContainer>
					<span>Todos os direitos reservados</span>
					<span>Desenvolvido por: Franklin, Graziela, Illian e Richard.</span>
				</InfoContainer>
			</FooterContainer>
		</>
	);
};

export default Footer;
