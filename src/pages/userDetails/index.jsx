import React, { useEffect } from "react";
import { useHistory } from "react-router";
import UserDetailsPage from "../../components/userDetailsPage";
import { useUsers } from "../../providers/UserProvider";

const UserDetails = () => {
	const { user } = useUsers();
	const history = useHistory();

	useEffect(() => {
		if (!user.data) {
			history.push("/");
		}
	}, []);

	return <div>{user.data && <UserDetailsPage />}</div>;
};

export default UserDetails;
