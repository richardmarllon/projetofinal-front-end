import { useEffect } from "react";
import { useUsers } from "../../providers/UserProvider";
import "antd/dist/antd.css";
import { Pagination } from "antd";

const ListAllPhysicians = () => {
	const { allUsers, getAllUsers } = useUsers();
	const FilterPhysician = (a) => {
		if (a.userType === "physician") {
			return a;
		}
	};
	let usersPhysicians = allUsers?.filter(FilterPhysician);

	useEffect(() => {
		getAllUsers();
	}, []);
	console.log(usersPhysicians);
	return (
		<>
			{usersPhysicians?.map((user, index) => (
				<div>
					Espcialidade:
					{user.specialty}
					CRM:
					{user.crm}
					Contato:
					{user.cellphoneNumber}
				</div>
			))}
			<Pagination defaultCurrent={1} total={usersPhysicians.length} />
		</>
	);
};
export default ListAllPhysicians;
