import { Switch } from "react-router-dom";
import Route from "./route";
import login from "../pages/login";
import home from "../pages/home";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={login} />
			<Route exact path="/home" component={home} isPrivate />
		</Switch>
	);
};

export default Routes;
