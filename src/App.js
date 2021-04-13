import ReminderSection from "./components/reminderSection";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
import FormAddConsultation from "./components/formAddConsultation";
import Routes from "./routes";
import Home from "./pages/home";
import SearchDisease from "./components/searchDisease";
import UserDiseasesList from "./components/userDiseasesList";
import FormRegister from "./components/formRegister";

function App() {
	const { login } = useUsers();

	// useEffect(() => {
	// 	login({
	// 		email: "suellendavinci@gmail.com",
	// 		password: "123456",
	// 	});
	// }, []);

	return (
		<>
			<Routes />
			{/* <FormRegister /> */}
			{/* <SearchDisease />
			<UserDiseasesList /> */}
			<FormAddConsultation />
			<GlobalStyle />
		</>
	);
}

export default App;
