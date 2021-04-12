import { Switch } from "react-router-dom";
import Route from "./route";
import Login from "../pages/login";
import ReminderPage from "../pages/viewAllReminders";
import Home from "../pages/home";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/home" component={Home} isPrivate />
			<Route exact path="/reminders" component={ReminderPage} isPrivate />
		</Switch>
	);
};

export default Routes;
