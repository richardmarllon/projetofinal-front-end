import { saluteAPI } from "../../services/api";
import { useUsers } from "../UserProvider";

const { createContext, useContext, useState, useEffect } = require("react");

const ExamsContext = createContext();

export const ExamsProvider = ({ children }) => {
	const { loggedUser } = useUsers();
	const [userExams, setUserExams] = useState([]);

	useEffect(() => {
		if (loggedUser) {
		let userID = loggedUser.data.id;

		saluteAPI
			.get(`/exams?userId=${userID}`)
			.then((response) => {
				setUserExams(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
		}
	}, [loggedUser]);


	return (
		<ExamsContext.Provider value={{ userExams }}>
			{children}
		</ExamsContext.Provider>
	);
};

export const useExams = () => useContext(ExamsContext);