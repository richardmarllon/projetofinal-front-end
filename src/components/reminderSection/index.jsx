import React, { useEffect } from "react";
import { useExams } from "../../providers/ExamsProvider";
import ReminderCard from "../reminderCard";
import moment from "moment";

import { 
		ReminderContainer, CardSearch,StyledArrow
} from "./style";


const ReminderSection = ({showAll}) => {

	const { userExams,loadApi } = useExams();	

	useEffect(() =>{
		loadApi();		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	const today = moment().format("YYYY-MM-DD");
	
	const futureExams = userExams.filter((exam) => {
		let examsDate = moment(Number(exam.date)).format("YYYY-MM-DD");		
		return moment(examsDate).isAfter(today);
	}).sort((a,b) => a.date - b.date);

	return (		
		<>
			<StyledArrow
				onClick={() => {					
					showAll();
				}}
			/>	
			<ReminderContainer>
				{futureExams.length < 1  ? 
					<CardSearch>
						<h3>Sem exames para ser feito!</h3>			
					</CardSearch>
				:
					<>
						{futureExams.map((exam) =>{ 
							return (
								<CardSearch>
									<ReminderCard key={exam.id} exam={exam} />
								</CardSearch>
							)})
						}						
					</>
				}
			</ReminderContainer>
		</>
	);
};

export default ReminderSection;
