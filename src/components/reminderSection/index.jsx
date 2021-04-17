import React, { useEffect } from "react";
import { useExams } from "../../providers/ExamsProvider";
import ReminderCard from "../reminderCard";
import { ReminderContainer, CardSearch, Button } from "./style";
import moment from "moment";



const ReminderSection = () => {
	const { userExams,loadApi } = useExams();
	
	const today = moment().format("YYYY/MM/DD");
	console.log('today',today);
	console.log('exams',userExams)

	useEffect(() =>{

		loadApi();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	// moment('2010-10-20').isAfter('2010-01-01', 'year');
	const futureExams = userExams.filter((exam) => {
		let examsDate = moment(Number(exam.date)).format("YYYY/MM/DD");
		console.log('reminder time',moment(examsDate).isAfter(today,'year'))
		return moment(examsDate).isAfter(today);
	});

	console.log('futureExams', futureExams)

	return (
		<>
			<ReminderContainer>
				{futureExams.map((exam) => {
					return (
						<CardSearch>
							<ReminderCard key={exam.id} exam={exam} />
						</CardSearch>
					)
				})}
				<Button> Mais Inf. </Button>
			</ReminderContainer>
		</>
	);
};

export default ReminderSection;
