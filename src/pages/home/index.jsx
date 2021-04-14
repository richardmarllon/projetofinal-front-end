import HomePhysician from "../../components/homePhysician";
import HomePatient from "../../components/homePatient";
import { useUsers } from "../../providers/UserProvider";
import { HomeContainer } from "./style";
import { BrandMobileContainer, BrandTag } from "../login/style";
import brand from "../../images/brand.svg";

const Home = () => {
	const { loggedUser } = useUsers();

	return (
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
	);
};

export default Home;
