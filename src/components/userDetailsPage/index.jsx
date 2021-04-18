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
import ListPatientHistory from "../listPatientHystory";

const UserDetailsPage = () => {
	const [addConsult, setAddConsult] = useState(false);
	const [closeModal, setCloseModal] = useState(false);
	const [isHistoric, setIsHistoric] = useState(false);
	const [isShow, setIsShow] = useState(true);

	const handleClickHistoric = () => {
		setIsHistoric(!isHistoric);
		setIsShow(!isShow);
	};

	return (
		<>
			{isHistoric && (
				<>
					<HomePatientContainer>
						<SearchedBasicInfo />
						<ActionsContainer>
							<ListPatientHistory handleClickHistoric={handleClickHistoric} />
						</ActionsContainer>
					</HomePatientContainer>
				</>
			)}

			{isShow && (
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
							<StyledBtn onClick={handleClickHistoric}>Ver histórico</StyledBtn>
						</BtnContainer>
					</ActionsContainer>
				</HomePatientContainer>
			)}
		</>
	);
};

export default UserDetailsPage;
