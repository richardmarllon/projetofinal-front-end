import ReminderSection from "./components/reminderSection";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
function App() {
	// login para teste
	const { login } = useUsers();

	useEffect(() => {
		login({
			email: "suellendavinci@gmail.com",
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

			<ReminderSection />
			<GlobalStyle />
		</>
	);
}

export default App;
