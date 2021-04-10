import { useUsers } from "../../providers/UserProvider";

const ListAllPhysicians = () => {
	const { allUsers } = useUsers();

	return (
		<>
			{allUsers
				?.filter((user) => {
					user.userType === "physician";
				})
				.map(({ user, index }) => {
					<div key={index}>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
					</div>;
				})}
		</>
	);
};

export default ListAllPhysicians;
