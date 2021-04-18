import { useUsers } from "../../providers/UserProvider";

import { DiseasesContainer, Title } from "./style";
import DiseaseCard from "../diseaseCard";

const UserDiseasesList = () => {
	const { user } = useUsers();

	console.log(user, "no doenças do usuario");

	return (
		<>
			{user.data.previousDiseases && (
				<DiseasesContainer>
					{user.data.previousDiseases.map((disease) => {
						return <DiseaseCard disease={disease} />;
					})}
				</DiseasesContainer>
			)}
		</>
	);
};

export default UserDiseasesList;
