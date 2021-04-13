import { Link, useHistory } from "react-router-dom";
import { HeaderContainer, LogoContainer, LogoutContainer } from "./style";
import logoHeader from "../../images/headerLogo.svg";
const Header = () => {
	const logoutUser = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("loggedUser");
	};

	return (
		<HeaderContainer>
			<LogoContainer>
				<img src={logoHeader} />
			</LogoContainer>
			{localStorage.getItem("token") && (
				<LogoutContainer>
					<Link to="/" onClick={logoutUser}>
						sair
					</Link>
				</LogoutContainer>
			)}
		</HeaderContainer>
	);
};

export default Header;
