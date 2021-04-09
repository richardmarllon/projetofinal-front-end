import FormRegister from "./components/formRegister/FormRegister";
import GlobalStyle from "./style/global";

function App() {
	return (
		<>
			<h1 style={{ textAlign: "center" }}>está rodando tudo corretamente</h1>
			<h3 style={{ textAlign: "center" }}> bom trabalho pessoal! </h3>
			<p style={{ textAlign: "center" }}>
				essas informações podem ser apagadas!
			</p>
			<FormRegister />
			<GlobalStyle />
		</>
	);
}

export default App;
