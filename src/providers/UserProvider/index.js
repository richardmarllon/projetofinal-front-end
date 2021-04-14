import React, { useEffect, useState } from "react";
import { decode } from "jsonwebtoken";
import { saluteAPI } from "../../services/api";
export const UserContext = React.createContext({});

export const UserProvider = (props) => {
	const [userToken, setUserToken] = useState(
		JSON.parse(localStorage.getItem("token")) || ""
	);
	const [loggedUser, setLoggedUser] = useState(
		JSON.parse(localStorage.getItem("loggedUser")) || ""
	);
	const [user, setUser] = useState([]);
	const [allUsers, setAllUsers] = useState([]);

	const login = (userData) => {
		localStorage.removeItem("token");
		saluteAPI
			.post("/login", userData)
			.then((response) => {
				localStorage.setItem(
					"token",
					JSON.stringify(response.data.accessToken)
				);
				setUserToken(response.data.accessToken);
				getLoggedUserData(decode(response.data.accessToken).sub);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

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
				setAllUsers(response.data);
			})
			.catch((e) => e);
	};
	return (
		<UserContext.Provider
			value={{
				loggedUser,
				setUser,
				user,
				getUserData,
				setLoggedUser,
				getLoggedUserData,
				allUsers,
				setAllUsers,
				getAllUsers,
				login,
				userToken,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export const useUsers = () => React.useContext(UserContext);
