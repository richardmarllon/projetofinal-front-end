import { useUsers } from "../../providers/UserProvider";

import { DiseasesContainer } from "./style";
import DiseaseCard from "../diseaseCard";

const UserDiseasesList = () => {
	const { user } = useUsers();

	console.log(user, "no doenças do usuario");

	return (
		<>
			{user.data.previousDiseases && (
				<DiseasesContainer>
					<h1>doenças do usuário:</h1>
					{user.data.previousDiseases.map((disease) => {
						return <DiseaseCard disease={disease} />;
					})}
				</DiseasesContainer>
			)}
		</>
	);
};

export default UserDiseasesList;
