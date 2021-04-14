import React from "react";
import SearchPatient from "../searchPatient";
import UserBasicInfo from "../userBasicInfo";
import { ContentContainer } from "./style";

const HomePhysician = () => {
	return (
		<>
			<ContentContainer>
				você está na home do médico
				<UserBasicInfo />
				<SearchPatient />
			</ContentContainer>
		</>
	);
};

export default HomePhysician;
