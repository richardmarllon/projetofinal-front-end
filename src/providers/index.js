import { DiseasesProvider } from "./DiseasesProvider";
import { ExamsProvider } from "./ExamsProvider";
import { UserProvider } from "./UserProvider";
import { AppointmentsProvider } from "./AppointmentsProvider";
const Providers = ({ children }) => {
	return (
		<UserProvider>
			<DiseasesProvider>
				<AppointmentsProvider>
					<ExamsProvider>{children}</ExamsProvider>
				</AppointmentsProvider>
			</DiseasesProvider>
		</UserProvider>
	);
};

export default Providers;
