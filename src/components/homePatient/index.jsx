import React, { useState } from "react";
import ListAppointments from "../listAppointments";
import UserBasicInfo from "../userBasicInfo";
import ReminderSection from "../reminderSection";
import ListAllPhysicians from "../listAllPhysicians";
import {
	HomePatientContainer,
	ActionsContainer,
	BtnContainer,
	StyledBtn,
} from "./style";

const HomePatient = () => {
	const [isRemember, setIsRemember] = useState(false);
	const [isAllPhysician, setIsAllPhysician] = useState(false);
	const [isHistoric, setIsHistoric] = useState(false);
	const [isShow, setIsShow] = useState(true);

	const showAll = () => {
		setIsShow(true);
		setIsRemember(false);
		setIsAllPhysician(false);
		setIsHistoric(false);
	};

	const handleClick = () => {
		setIsShow(!isShow);
	};

	return (
		<>
			<HomePatientContainer>
				<UserBasicInfo />

				{isRemember && (
					<ActionsContainer>
						<ReminderSection showAll={showAll} />
					</ActionsContainer>
				)}

				{isAllPhysician && (
					<ActionsContainer>
						<ListAllPhysicians showAll={showAll} />
					</ActionsContainer>
				)}

				{isHistoric && (
					<ActionsContainer>
						<ListAppointments showAll={showAll} />
					</ActionsContainer>
				)}

				{isShow && (
					<ActionsContainer>
						<BtnContainer>
							<StyledBtn
								onClick={() => handleClick(setIsRemember(!isRemember))}
							>
								Meus Lembretes
							</StyledBtn>
						</BtnContainer>

						<BtnContainer>
							<StyledBtn
								onClick={() => handleClick(setIsAllPhysician(!isAllPhysician))}
							>
								Ver todos médicos
							</StyledBtn>
						</BtnContainer>
						<BtnContainer>
							<StyledBtn
								onClick={() => handleClick(setIsHistoric(!isHistoric))}
							>
								Meu histórico
							</StyledBtn>
						</BtnContainer>
					</ActionsContainer>
				)}
			</HomePatientContainer>
		</>
	);
};

export default HomePatient;
