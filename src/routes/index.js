import { Switch } from "react-router-dom";
import Route from "./route";
import Login from "../pages/login";
import ReminderPage from "../pages/viewAllReminders";
import Home from "../pages/home";
import Register from "../pages/register";
import Contact from "../components/contact";
import AboutPage from "../pages/aboutPage";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/home" component={Home} isPrivate />
			<Route exact path="/reminders" component={ReminderPage} isPrivate />
			<Route exact path="/about" component={AboutPage} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	);
};

export default Routes;
