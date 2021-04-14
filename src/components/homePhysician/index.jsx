import React from "react";
import SearchPatient from "../searchPatient";
import UserBasicInfo from "../userBasicInfo";
import { ContentContainer, DesktopOnly } from "./style";

const HomePhysician = () => {
	return (
		<>
			<ContentContainer>
				<UserBasicInfo />
				<DesktopOnly>
					<SearchPatient />
				</DesktopOnly>
			</ContentContainer>
		</>
	);
};

export default HomePhysician;
