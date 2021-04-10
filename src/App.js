import ReminderSection from "./components/reminderSection";
import GlobalStyle from "./style/global";

function App() {
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
