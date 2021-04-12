import { Link } from "react-router-dom";
import { useUsers } from "../../providers/UserProvider";
import { useState } from "react";
const Header = () => {
	//Apenas para teste
	// const { login } = useUsers();

	const logoutUser = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("loggedUser");
	};

	return (
		<>
			<div>
				<div>
					{localStorage.getItem("token") ? (
						<Link to="/" onClick={logoutUser}>
							Logout
						</Link>
					) : (
						// <Button
						// // onClick={() =>
						// // 	login({
						// // 		email: "suellendavinci@gmail.com",
						// // 		password: "123456",
						// // 	})
						// // }
						// ></Button>
						<div>
							<Link to="/" onClick={logoutUser}>
								Login
							</Link>
							<Link to="/register" onClick={logoutUser}>
								Register
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
