import { useHistory, Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, LogoutContainer } from "./style";
import logoHeader from "../../images/headerLogo.svg";
import { useUsers } from "../../providers/UserProvider";

const Header = () => {
	const history = useHistory();
	const { loggedUser } = useUsers();
	const logoutUserfromHome = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("loggedUser");
		document.location.reload();
	};

	return (
		<>
			<HeaderContainer>
				<LogoContainer>
					<img src={logoHeader} />
				</LogoContainer>
				{loggedUser && (
					<LogoutContainer>
						<Link to="/" onClick={logoutUserfromHome}>
							sair
						</Link>
					</LogoutContainer>
				)}
			</HeaderContainer>
		</>
	);
};

export default Header;
