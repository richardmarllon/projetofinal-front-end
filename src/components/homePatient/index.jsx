import React from "react";
import UserBasicInfo from "../userBasicInfo";
import ListAppointments from "../listAppointments";
import { HomePatientContainer } from "./style";

const HomePatient = () => {
	return (
		<>
			<HomePatientContainer>
				<UserBasicInfo />
				<ListAppointments />
			</HomePatientContainer>
		</>
	);
};

export default HomePatient;
