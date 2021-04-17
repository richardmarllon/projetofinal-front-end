import { saluteAPI } from "../../services/api";
import { useUsers } from "../UserProvider";

const { createContext, useContext, useState, useEffect } = require("react");

const ExamsContext = createContext();

export const ExamsProvider = ({ children }) => {
	const { loggedUser } = useUsers();
	const [userExams, setUserExams] = useState([]);


	const loadApi = async () => {
		await saluteAPI
			.get(`/exams?userId=${loggedUser.data.id}`)
			.then((response) => {
				console.log(`loaded exams API do user ${loggedUser.data.id} - ${response.data}`);
				setUserExams(response.data);
			})
			.catch((error) => {
				console.log("Erro ao carregar exames", error.response);
			});
	}

	return (
		<ExamsContext.Provider value={{ userExams, loadApi }}>
			{children}
		</ExamsContext.Provider>
	);
};

export const useExams = () => useContext(ExamsContext);
