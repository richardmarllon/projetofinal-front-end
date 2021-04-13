import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FooterContainer, LinkContainer, InfoContainer } from "./style";

const Footer = () => {
	const [showFooter, setShowFooter] = useState(true);

	useEffect(() => {
		localStorage.getItem("token") ? setShowFooter(false) : setShowFooter(true);
	}, []);

	return (
		<>
			{showFooter && (
				<FooterContainer>
					<LinkContainer>
						<Link to="/about">Sobre</Link>
						<Link to="/contact">Contato</Link>
					</LinkContainer>
					<InfoContainer>
						<span>Todos os direitos reservados</span>
						<span>
							Desenvolvido por: Franklin, Graziela, Illian, Richard e Suellen
						</span>
					</InfoContainer>
				</FooterContainer>
			)}
		</>
	);
};

export default Footer;
