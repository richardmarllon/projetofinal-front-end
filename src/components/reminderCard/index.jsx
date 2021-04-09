import React from "react";
import { CardContainer, Info, InfoContainer, Title } from "./style";

const ReminderCard = () => {
	return (
		<>
			<CardContainer>
				<Title>consulta</Title>
				<InfoContainer>
					<Info>especialidade:</Info>
					<Info>cardiologista</Info>
				</InfoContainer>
				<InfoContainer>
					<Info>médico:</Info>
					<Info>Rafaela</Info>
				</InfoContainer>
				<InfoContainer>
					<Info>data:</Info>
					<Info>19-07-2020</Info>
				</InfoContainer>
			</CardContainer>
		</>
	);
};

export default ReminderCard;
