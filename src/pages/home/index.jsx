import HomePhysician from "../../components/homePhysician"
import HomePatient from "../../components/homePatient"
import { useUsers } from "../../providers/UserProvider"
const Home = () => {
	const { loggedUser } = useUsers();

	return (
		<div>
			
			{loggedUser && loggedUser.data.userType === "physician" ? (
				<HomePhysician />
			) : (
				<HomePatient />
			)}
		</div>
	);
};

export default Home;
