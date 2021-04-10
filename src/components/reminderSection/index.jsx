import React, { useEffect } from "react";
import { Users } from "../../providers/userProvider";
import ReminderCard from "../reminderCard";
import { ReminderContainer } from "./style";

const ReminderSection = () => {
	const { loggedUser } = Users();
	useEffect(() => {
		console.log(loggedUser, "esse");
	}, [loggedUser]);

	return (
		<>
			<ReminderContainer>
				<ReminderCard />
			</ReminderContainer>
		</>
	);
};

export default ReminderSection;
