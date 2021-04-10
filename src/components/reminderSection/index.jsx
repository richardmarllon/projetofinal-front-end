import React from "react";
import { useExams } from "../../providers/ExamsProvider";
import ReminderCard from "../reminderCard";
import { ReminderContainer } from "./style";
import moment from "moment";

const ReminderSection = () => {
	const { userExams } = useExams();
	const today = moment();

	const futureExams = userExams.filter((exam) => {
		return moment(exam.date).isAfter(today);
	});

	return (
		<>
			<ReminderContainer>
				{futureExams.map((exam) => {
					return <ReminderCard key={exam.id} exam={exam} />;
				})}
			</ReminderContainer>
		</>
	);
};

export default ReminderSection;
