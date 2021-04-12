import { DiseasesProvider } from "./DiseasesProvider";
import { ExamsProvider } from "./ExamsProvider";
import { UserProvider } from "./UserProvider";

const Providers = ({ children }) => {
	return (
		<UserProvider>
			<DiseasesProvider>
				<ExamsProvider>{children}</ExamsProvider>
			</DiseasesProvider>
		</UserProvider>
	);
};

export default Providers;
