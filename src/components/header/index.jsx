import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
	HeaderContainer,
	LogoContainer,
	LogoutContainer,
	LogOutMobile,
} from "./style";
import logoHeader from "../../images/headerLogo.svg";
import { useUsers } from "../../providers/UserProvider";
import logout from "../../images/log-out.svg";

const Header = () => {
	const [isToken, setIsToken] = useState(true);
	const { loggedUser, setLoggedUser, setUserToken } = useUsers();
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
		setLoggedUser(false);
		history.push("/");
	};

	return (
		<>
			{loggedUser && (
				<LogOutMobile onClick={logoutUserfromHome}>
					<img src={logout} alt="log out icon" />
					<p>sair</p>
				</LogOutMobile>
			)}
			<HeaderContainer>
				<LogoContainer>
					<Link to="home">
						<img src={logoHeader} alt="brand logo" />
					</Link>
				</LogoContainer>
				{loggedUser && (
					<LogoutContainer onClick={logoutUserfromHome}>
						<img src={logout} alt="log out icon" />
						<Link>sair</Link>
					</LogoutContainer>
				)}
			</HeaderContainer>
		</>
	);
};

export default Header;
