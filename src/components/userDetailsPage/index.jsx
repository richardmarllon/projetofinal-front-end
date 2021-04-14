import React from "react";
import SearchedBasicInfo from "../searchedBasicInfo";
import { HomePatientContainer } from "./style";

const UserDetailsPage = () => {
	return (
		<>
			<HomePatientContainer>
				<SearchedBasicInfo />
			</HomePatientContainer>
		</>
	);
};

export default UserDetailsPage;
