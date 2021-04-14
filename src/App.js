// import ReminderSection from "./components/reminderSection";
import GlobalStyle from "./style/global";
import Routes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<Header />
			<Routes />
			<Footer />
			<GlobalStyle />
		</>
	);
}

export default App;
