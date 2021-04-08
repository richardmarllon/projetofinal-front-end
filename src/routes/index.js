import { Switch } from "react-router-dom";
import Route from "./route";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/home" exact component={Home} isPrivate />
		</Switch>
	);
};

export default Routes;
