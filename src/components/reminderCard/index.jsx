import React from "react";
import { CardContainer, Info, InfoContainer, Title } from "./style";
import moment from "moment";

const ReminderCard = ({ exam }) => {
	return (
		<>
			<CardContainer>
				<Title>Exame</Title>
				<InfoContainer>
					<Info>especialidade:</Info>
					<Info>{exam.physicianSpecialty}</Info>
				</InfoContainer>
				<InfoContainer>
					<Info>médico:</Info>
					<Info>{exam.physicianName}</Info>
				</InfoContainer>
				<InfoContainer>
					<Info>Descrição do Exame:</Info>
					<Info>{exam.description}</Info>
				</InfoContainer>
				<InfoContainer>
					<Info>data:</Info>
					<Info>{moment(exam.date).format('DD/MM/YYYY')}</Info>
				</InfoContainer>
			</CardContainer>
		</>
	);
};

export default ReminderCard;
