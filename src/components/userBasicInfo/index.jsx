import React, { useEffect } from "react";
import { useUsers } from "../../providers/UserProvider";
import { ContainerUser, NameUser } from "./style";

const UserBasicInfo = () => {
	const { loggedUser, user } = useUsers();

	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<>
			<ContainerUser>
				<NameUser>{loggedUser.data.firstName}, teste </NameUser>
			</ContainerUser>
		</>
	);
};

export default UserBasicInfo;
