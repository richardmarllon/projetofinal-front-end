import { Switch } from "react-router-dom";
import Route from "./route";
import login from "../pages/login";
import home from "../pages/home";
import ReminderPage from "../pages/viewAllReminders";

const Routes = () => {
	return (
		<Switch>
		
			<Route exact path="/" component={login} />
			<Route exact path="/home" component={home} isPrivate />
			<Route exact path="/reminders" component={ReminderPage} isPrivate />
		</Switch>
	);
};

export default Routes;
