import { UserProvider } from "./userProvider";

const Providers = ({ children }) => {
	return <UserProvider>{children}</UserProvider>;
};

export default Providers;
