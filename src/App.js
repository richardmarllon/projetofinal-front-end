import ReminderSection from "./components/reminderSection";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
import FormRegister from "./components/formRegister";
import Routes from "./routes";
import Home from "./pages/home";
import SearchDisease from "./components/searchDisease";
import Header from "./components/header";

function App() {
	// const { login } = useUsers();

	// useEffect(() => {
	// 	login({
	// 		email: "suellendavinci@gmail.com",
	// 		password: "123456",
	// 	});
	// }, []);

	return (
		<>
			<h1 style={{ textAlign: "center" }}>está rodando tudo corretamente</h1>
			<h3 style={{ textAlign: "center" }}> bom trabalho pessoal! </h3>
			<p style={{ textAlign: "center" }}>
				essas informações podem ser apagadas!
			</p>
			{/* <Routes /> */}
			<Header></Header>
			{/* <FormRegister />
			<SearchDisease />
			<GlobalStyle /> */}
		</>
	);
}

export default App;
