import React, { useState } from "react";
import Modalteste from "../modal";
import SearchedBasicInfo from "../searchedBasicInfo";
import FormAddConsultation from "../formAddConsultation";
import {
	ActionsContainer,
	BtnContainer,
	HomePatientContainer,
	ModalButton,
	StyledBtn,
} from "./style";

const UserDetailsPage = () => {
	const [addConsult, setAddConsult] = useState(false);
	const [closeModal, setCloseModal] = useState(false);

	return (
		<>
			<HomePatientContainer>
				<SearchedBasicInfo />
				<ActionsContainer>
					<BtnContainer>
						<ModalButton
							titleBtn={"Adicionar Consulta"}
							closeModal={closeModal}
							setCloseModal={setCloseModal}
						>
							<FormAddConsultation setCloseModal={setCloseModal} />
						</ModalButton>
					</BtnContainer>
					<BtnContainer>
						<StyledBtn>Ver histórico</StyledBtn>
					</BtnContainer>
				</ActionsContainer>
			</HomePatientContainer>
		</>
	);
};

export default UserDetailsPage;
