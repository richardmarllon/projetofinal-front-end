import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useUsers } from "../providers/UserProvider";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
	const { userToken } = useUsers();

	return (
		<ReactDOMRoute
			{...rest}
			render={() => {
				return isPrivate === !!userToken ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: isPrivate ? "/" : "/home",
						}}
					/>
				);
			}}
		/>
	);
};

export default Route;
