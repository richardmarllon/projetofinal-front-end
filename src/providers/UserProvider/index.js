import React, { useState } from "react";
//import jwt_decode from "jwt-decode";
// import { decode } from "jsonwebtoken";
import { saluteAPI } from "../../services/api";



export const UserContext = React.createContext({});

export const UserProvider = (props) => {
	const [userToken] = useState(
		JSON.parse(localStorage.getItem("token")) || ""
	);
	const [loggedUser, setLoggedUser] = useState(
		JSON.parse(localStorage.getItem("loggedUser")) || ""
	);
	const [user, setUser] = useState([]);
	const [allUsers, setAllUsers] = useState([]);

	const getLoggedUserData = (idLoggedUser) => {
		saluteAPI
			.get(`/users/${idLoggedUser}/`)
			.then((response) => {
				localStorage.setItem("loggedUser", JSON.stringify(response));
				setLoggedUser(response);
			})
			.catch((e) => e);
	};

	const getUserData = (id) => {
		saluteAPI
			.get(`/users/${id}/`)
			.then((response) => {
				setUser(response);
			})
			.catch((e) => e);
	};

	const getAllUsers = () => {
		saluteAPI
			.get(`/users/`)
			.then((response) => {
				setAllUsers(response);
			})
			.catch((e) => e);
	};

	return (
		<UserContext.Provider
			value={{
				loggedUser,
				user,
				getUserData,
				setLoggedUser,
				getLoggedUserData,
				allUsers,
				setAllUsers,
				getAllUsers,
				// login,
				userToken,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export const useUsers = () => React.useContext(UserContext);
