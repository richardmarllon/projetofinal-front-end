// import ReminderSection from "./components/reminderSection";
import GlobalStyle from "./style/global";
import Routes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";
import FormLogin from "./components/formLogin";


function App() {
	return (
		<>
			<Header />
			<Routes />
			<GlobalStyle />
		</>
	);
}

export default App;
