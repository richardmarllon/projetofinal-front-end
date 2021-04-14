import React from "react";
import UserBasicInfo from "../userBasicInfo";
import { HomePatientContainer } from "./style";

const HomePatient = () => {
	return (
		<>
			<HomePatientContainer>
				<UserBasicInfo />
			</HomePatientContainer>
		</>
	);
};

export default HomePatient;
