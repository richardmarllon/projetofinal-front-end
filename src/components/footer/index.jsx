import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div>
				<Link to="/about">Sobre</Link>
				<Link to="/contact">Contato</Link>
			</div>
			<div>
				<span>Todos os direitos reservados</span>
				<span>
					Desenvolvido por: Franklin, Graziela, Illian, Richard e Suellen
				</span>
			</div>
		</>
	);
};

export default Footer;
