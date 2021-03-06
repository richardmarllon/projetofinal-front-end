import HomePhysician from "../../components/homePhysician";
import HomePatient from "../../components/homePatient";
import { useUsers } from "../../providers/UserProvider";
import { HomeContainer } from "./style";
import { BrandMobileContainer, BrandTag } from "../login/style";
import { useEffect, useState } from "react";

import brand from "../../images/brand.svg";
import { useHistory } from "react-router";

const Home = () => {
	const { loggedUser } = useUsers();
	const [render, setRender] = useState(false);
	const history = useHistory();
	
	useEffect(() => {
		if (loggedUser) {
			if (!loggedUser.data.bloodType) {
				history.push("/finishRegister");
			} else {
				setRender(true);
			}
		}
	}, [loggedUser]);

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
