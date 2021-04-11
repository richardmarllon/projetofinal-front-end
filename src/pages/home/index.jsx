import React from "react";
import HomePatient from "../../components/homePatient";
import HomePhysician from "../../components/homePhysician";
import { useUsers } from "../../providers/UserProvider";

const Home = () => {
	const { loggedUser } = useUsers();

	return (
		<div>
			{loggedUser.data.userType === "physician" ? (
				<HomePhysician />
			) : (
				<HomePatient />
			)}
		</div>
	);
};

export default Home;
