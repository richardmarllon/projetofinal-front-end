import { saluteAPI } from "../../services/api";
import { useUsers } from "../UserProvider";

const { createContext, useContext, useState, useEffect } = require("react");

const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
	const { loggedUser } = useUsers();
	const [userAppointments, setUserAppointments] = useState([]);
	const [examsAppointment, setExamsAppointment] = useState([]);

	const getExamsofAppointment = async (AppointmentId) => {
		await saluteAPI
			.get(`/exams?appointmentId=${AppointmentId}`)
			.then((response) => {
				setExamsAppointment(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const getPhysicianAppointment = async (physicianId) => {
		await saluteAPI
			.get(`/appointments?physicianId=${physicianId}`)
			.then((response) => {
				setExamsAppointment(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	useEffect(() => {
		if (loggedUser) {
			let userID = loggedUser.id;

			saluteAPI
				.get(`/appointments?userId=${userID}`)
				.then((response) => {
					setUserAppointments(response.data);
				})
				.catch((error) => {
					console.log(error.response);
				});
		}
	}, [loggedUser]);

	return (
		<AppointmentsContext.Provider
			value={{
				userAppointments,
				getExamsofAppointment,
				examsAppointment,
				getPhysicianAppointment,
			}}
		>
			{children}
		</AppointmentsContext.Provider>
	);
};

export const useAppointments = () => useContext(AppointmentsContext);
