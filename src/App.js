import ReminderSection from "./components/reminderSection";
import { useEffect } from "react";
import GlobalStyle from "./style/global";
import { useUsers } from "./providers/UserProvider";
import FormAddConsultation from "./components/formAddConsultation";
import Routes from "./routes";
import Home from "./pages/home";
function App() {

	return (
		<>
			<h1 style={{ textAlign: "center" }}>está rodando tudo corretamente</h1>
			<h3 style={{ textAlign: "center" }}> bom trabalho pessoal! </h3>
			<p style={{ textAlign: "center" }}>
				essas informações podem ser apagadas!
			</p>
			{/* <Routes /> */}
			<FormAddConsultation />
			<GlobalStyle />
		</>
	);
}

export default App;
