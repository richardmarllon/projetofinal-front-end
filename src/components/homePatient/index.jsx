import React, { useState } from "react";
import UserBasicInfo from "../userBasicInfo";
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

	const handleClickReminders = () => {
		setIsRemember(!isRemember);
		setIsShow(!isShow);
	};

	const handleClickAllPhysician = () => {
		setIsAllPhysician(!isAllPhysician);
		setIsShow(!isShow);
	};

	const handleClickHistoric = () => {
		setIsHistoric(!isHistoric);
		setIsShow(!isShow);
	};

	return (
		<>
			<HomePatientContainer>
				<UserBasicInfo />

				{isRemember && (
					<ActionsContainer>
						<p> COMPONENTE LEMBRETES </p>
					</ActionsContainer>
				)}

				{isAllPhysician && (
					<ActionsContainer>
						<ListAllPhysicians />
					</ActionsContainer>
				)}

				{isHistoric && (
					<ActionsContainer>
						<p> COMPONENTE HISTORICO</p>
					</ActionsContainer>
				)}

				{isShow && (
					<ActionsContainer>
						<BtnContainer>
							<StyledBtn onClick={handleClickReminders}>
								Meus Lembretes
							</StyledBtn>
						</BtnContainer>

						<BtnContainer>
							<StyledBtn onClick={handleClickAllPhysician}>
								Ver todos médicos
							</StyledBtn>
						</BtnContainer>
						<BtnContainer>
							<StyledBtn onClick={handleClickHistoric}>Meu histórico</StyledBtn>
						</BtnContainer>
					</ActionsContainer>
				)}
			</HomePatientContainer>
		</>
	);
};

export default HomePatient;
