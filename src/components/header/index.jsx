import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, LogoutContainer } from "./style";
import logoHeader from "../../images/headerLogo.svg";
import { useUsers } from "../../providers/UserProvider";

const Header = () => {
	const [isToken, setIsToken] = useState(true);
	const { loggedUser, setUserToken } = useUsers();
	const history = useHistory();

	useEffect(() => {
		if (!isToken) {
			logOut();
		}
		setIsToken(true);
	}, [isToken]);

	const logoutUserfromHome = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("loggedUser");
		setIsToken(false);
	};

	const logOut = () => {
		setUserToken(false);
		history.push("/");
	};

	return (
		<>
			<HeaderContainer>
				<LogoContainer>
					<img src={logoHeader} />
				</LogoContainer>
				{loggedUser && (
					<LogoutContainer>
						<Link onClick={logoutUserfromHome}>sair</Link>
					</LogoutContainer>
				)}
			</HeaderContainer>
		</>
	);
};

export default Header;
