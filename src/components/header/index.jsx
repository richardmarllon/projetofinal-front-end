import { useUsers } from "../../providers/UserProvider";
import { PageHeader, Button } from "antd";
import { useState } from "react";
const Header = () => {
	const { userToken, login } = useUsers();
	const [token] = useState(localStorage.getItem("token") || []);
	const logoutUser = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("token");
	};

	return (
		<>
			<div>
				<div>
					{localStorage.getItem("token") ? (
						<Button
							onClick={() =>
								login({
									email: "suellendavinci@gmail.com",
									password: "123456",
								})
							}
						>
							Login
						</Button>
					) : (
						<Button onClick={logoutUser}>Logout</Button>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
