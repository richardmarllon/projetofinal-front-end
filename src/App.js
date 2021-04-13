import ReminderSection from "./components/reminderSection";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
import FormAddConsultation from "./components/formAddConsultation";
import Routes from "./routes";
import Home from "./pages/home";
import SearchDisease from "./components/searchDisease";
import UserDiseasesList from "./components/userDiseasesList";
import Header from "./components/header";
import Footer from "./components/footer";
import { useAppointments } from "./providers/AppointmentsProvider";
import ListAppointments from "./components/listAppointments";

function App() {
	const { login } = useUsers();
	// const { userAppointments } = useAppointments();

	useEffect(() => {
		login({
			email: "suellendavinci@gmail.com",
			password: "123456",
		});
	}, []);

	return (
		<>
			<Header />
			<Routes />
			<Footer />
			{/* <FormRegister />
			<SearchDisease />
			<UserDiseasesList /> */}
			<FormAddConsultation />
			<GlobalStyle />
		</>
	);
}

export default App;
