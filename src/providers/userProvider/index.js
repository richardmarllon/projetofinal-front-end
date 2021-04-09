import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { saluteAPI } from "../../services/api";

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
	const [id, setId] = useState([]);
	const [loggedUser, setLoggedUser] = useState([]);
	const [allUsers, setAllUsers] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setId(jwt_decode(localStorage.getItem("token")).user_id);

			saluteAPI
				.get(`/users/${id}/`)
				.then((response) => {
					setLoggedUser(response);
				})
				.catch((e) => e);
		}
	}, [id]);

	return (
		<UserContext.Provider
			value={{
				id,
				setId,
				loggedUser,
				setLoggedUser,
				allUsers,
				setAllUsers,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export const Users = () => React.useContext(UserContext);
