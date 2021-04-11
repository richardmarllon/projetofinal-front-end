import React from "react";
import { CardContainer, Info, InfoContainer, Title } from "./style";

const ReminderCard = ({ exam }) => {
	return (
		<>
			<CardContainer>
				<Title>consulta</Title>
				<InfoContainer>
					<Info>especialidade:</Info>
					<Info>{exam.physicianSpecialty}</Info>
				</InfoContainer>
				<InfoContainer>
					<Info>médico:</Info>
					<Info>{exam.physicianName}</Info>
				</InfoContainer>
				<InfoContainer>
					<Info>data:</Info>
					<Info>{exam.date}</Info>
				</InfoContainer>
			</CardContainer>
		</>
	);
};

export default ReminderCard;
