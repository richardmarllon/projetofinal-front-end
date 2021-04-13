import ReminderSection from "./components/reminderSection";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
import FormRegister from "./components/formRegister";
import Routes from "./routes";
import Home from "./pages/home";
import SearchDisease from "./components/searchDisease";
import SearchPatient from "./components/searchPatient";
import UserDiseasesList from "./components/userDiseasesList";

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
			{/* <SearchPatient /> */}
			<Routes />
			{/* <FormRegister />
			<SearchDisease />
			<UserDiseasesList /> */}
			<GlobalStyle />
		</>
	);
}

export default App;
