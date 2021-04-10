import { ExamsProvider } from "./ExamsProvider";
import { UserProvider } from "./UserProvider";

const Providers = ({ children }) => {
	return (
		<UserProvider>
			<ExamsProvider>{children}</ExamsProvider>
		</UserProvider>
	);
};

export default Providers;
