import { useEffect } from "react";
import { useUsers } from "../../providers/UserProvider";
import PhysicianCard from "../physicianCard";

const ListAllPhysicians = () => {
	const { allUsers, getAllUsers } = useUsers();
	let usersPhysicians = [];
	const FilterPhysician = (a) => {
		if (a.userType === "patient") {
			return a;
		}
	};
	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<>
			{allUsers?.map((user, index) => (
				<PhysicianCard key={index} userPhysician={user}></PhysicianCard>
			))}
			Olá
		</>
	);
};
export default ListAllPhysicians;
