import HomePhysician from "../../components/homePhysician";
import HomePatient from "../../components/homePatient";
import { useUsers } from "../../providers/UserProvider";
import { HomeContainer } from "./style";
import { BrandMobileContainer, BrandTag } from "../login/style";
import { useEffect, useState } from "react";

import brand from "../../images/brand.svg";
import { saluteAPI } from "../../services/api";
import { decode } from "jsonwebtoken";

const Home = () => {
	const { loggedUser, userToken, setLoggedUser } = useUsers();
	const [render, setRender] = useState(false);

	useEffect(() => {
		if (userToken) {
			async function getLoggedUserData() {
				const response = await saluteAPI.get(
					`/users/${decode(userToken).sub}/`
				);
				setLoggedUser(response);
				setRender(true);
			}
			getLoggedUserData();
		}

	}, [userToken]);

	return (
		<>
			{render && (
				<HomeContainer>
					<BrandMobileContainer>
						<BrandTag src={brand} />
					</BrandMobileContainer>
					{loggedUser && loggedUser.data.userType === "physician" ? (
						<HomePhysician />
					) : (
						<HomePatient />
					)}
				</HomeContainer>
			)}
		</>
	);
};

export default Home;
