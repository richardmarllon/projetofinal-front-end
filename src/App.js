import ReminderSection from "./components/reminderSection";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
import Routes from "./routes";
function App() {
	// login para teste
	const { login } = useUsers();

	useEffect(() => {
		login({
			email: "richard@richard.com",
			password: "123456",
		});
	}, []);

	return (
		<>
			<h1 style={{ textAlign: "center" }}>está rodando tudo corretamente</h1>
			<h3 style={{ textAlign: "center" }}> bom trabalho pessoal! </h3>
			<p style={{ textAlign: "center" }}>
				essas informações podem ser apagadas!
			</p>
			{/* <Routes /> */}
			<GlobalStyle />
		</>
	);
}

export default App;
