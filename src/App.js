import ReminderCard from "./components/reminderCard";
import GlobalStyle from "./style/global";

function App() {
	return (
		<>
			<h1 style={{ textAlign: "center" }}>está rodando tudo corretamente</h1>
			<h3 style={{ textAlign: "center" }}> bom trabalho pessoal! </h3>
			<p style={{ textAlign: "center" }}>
				essas informações podem ser apagadas!
			</p>

			<ReminderCard />
			<GlobalStyle />
		</>
	);
}

export default App;
