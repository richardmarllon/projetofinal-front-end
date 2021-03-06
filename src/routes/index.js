import { Switch } from "react-router-dom";
import Route from "./route";
import Login from "../pages/login";
import ReminderPage from "../pages/viewAllReminders";
import Home from "../pages/home";
import Register from "../pages/register";
import Contact from "../components/contact";
import AboutPage from "../pages/aboutPage";
import UserDetails from "../pages/userDetails";
import FinishRegister from "../pages/finishRegister";
import ErrorsMessages from "../pages/errorsMessages";
import ContactPage from "../pages/contact";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/home" component={Home} isPrivate />
			<Route exact path="/reminders" component={ReminderPage} isPrivate />
			<Route exact path="/about" component={AboutPage} />
			<Route exact path="/contact" component={ContactPage} />
			<Route exact path="/patientDetails" component={UserDetails} isPrivate />
			<Route
				exact
				path="/finishRegister"
				component={FinishRegister}
				isPrivate
			/>
			<Route component={ErrorsMessages} />
		</Switch>
	);
};

export default Routes;
