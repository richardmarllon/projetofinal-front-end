import React from "react";
import UserBasicInfo from "../userBasicInfo";
import {
	HomePatientContainer,
	ActionsContainer,
	BtnContainer,
	StyledBtn,
} from "./style";

const HomePatient = () => {
	return (
		<>
			<HomePatientContainer>
				<UserBasicInfo />
				<ActionsContainer>
					<BtnContainer>
						<StyledBtn>Meus Lembretes</StyledBtn>
					</BtnContainer>

					<BtnContainer>
						<StyledBtn>Ver todos médicos</StyledBtn>
					</BtnContainer>

					<BtnContainer>
						<StyledBtn>Meu histórico</StyledBtn>
					</BtnContainer>
				</ActionsContainer>
			</HomePatientContainer>
		</>
	);
};

export default HomePatient;
