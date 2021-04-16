import React from "react";
import UserBasicInfo from "../userBasicInfo";
import ListAllPhysicians from "../listAllPhysicians";
import { HomePatientContainer } from "./style";

const HomePatient = () => {
	return (
		<>
			<HomePatientContainer>
				<UserBasicInfo />
				<ListAllPhysicians />
			</HomePatientContainer>
		</>
	);
};

export default HomePatient;
