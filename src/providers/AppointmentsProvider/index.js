import { saluteAPI } from "../../services/api";
import { useUsers } from "../UserProvider";

const { createContext, useContext, useState, useEffect } = require("react");

const AppointmentsContext = createContext();

export const ExamsProvider = ({ children }) => {
	const { loggedUser } = useUsers();
	const [userAppointments, setUserAppointments] = useState([]);

	useEffect(() => {
		if (loggedUser) {
			let userID = loggedUser.id;

			saluteAPI
				.get(`/exams?userId=${userID}`)
				.then((response) => {
					setUserAppointments(response.data);
				})
				.catch((error) => {
					console.log(error.response);
				});
		}
	}, [loggedUser]);

	return (
		<AppointmentsContext.Provider value={{ userAppointments }}>
			{children}
		</AppointmentsContext.Provider>
	);
};

export const useAppointments = () => useContext(AppointmentsContext);
