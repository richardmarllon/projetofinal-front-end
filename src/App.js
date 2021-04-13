// import ReminderSection from "./components/reminderSection";
import UserBasicInfo from "./components/userBasicInfo";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
import FormRegister from "./components/formRegister";
import Routes from "./routes";
import Home from "./pages/home";
import SearchDisease from "./components/searchDisease";
import UserDiseasesList from "./components/userDiseasesList";
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
			{/* <SearchDisease /> */}

			{/* <UserBasicInfo></UserBasicInfo> */}
			{/* <Routes /> */}
			{/* <FormRegister /> */}

			<GlobalStyle />
		</>
	);
}

export default App;
