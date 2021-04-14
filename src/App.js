// import ReminderSection from "./components/reminderSection";
import UserBasicInfo from "./components/userBasicInfo";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
import FormRegister from "./components/formRegister";
import Routes from "./routes";
import Home from "./pages/home";
import SearchDisease from "./components/searchDisease";
import SearchPatient from "./components/searchPatient";
import UserDiseasesList from "./components/userDiseasesList";
import FormUserUpdateInfo from "./components/formUserUpdateInfo"
import FormAddConsultation from "./components/formAddConsultation";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
	const { login } = useUsers();

	useEffect(() => {
		login({
			email: "suellendavinci@gmail.com",
			password: "123456",
		});
	}, []);

	return (
		<>
			<SearchPatient />
			<Routes />
			<FormRegister />
			<SearchDisease />
			{/* <UserDiseasesList /> */}
			<FormAddConsultation />
			<FormUserUpdateInfo />
			<GlobalStyle />
		</>
	);
}

export default App;
