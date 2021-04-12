import React, { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";

import { DiseasesContainer } from "./style";
import DiseaseCard from "../diseaseCard";

const UserDiseasesList = () => {
	const { loggedUser } = useUsers();

	return (
		<>
			{loggedUser.data.previousDiseases && (
				<DiseasesContainer>
					<h1>doenças do usuário:</h1>
					{loggedUser.data.previousDiseases.map((disease) => {
						return <DiseaseCard disease={disease} />;
					})}
				</DiseasesContainer>
			)}
		</>
	);
};

export default UserDiseasesList;
