import { Switch } from "react-router-dom";
import Route from "./route";
import login from "../pages/login";
import ReminderPage from "../pages/viewAllReminders";
import Home from "../pages/home";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={login} />
			<Route exact path="/home" component={Home} isPrivate />
			<Route exact path="/reminders" component={ReminderPage} isPrivate />
		</Switch>
	);
};

export default Routes;
