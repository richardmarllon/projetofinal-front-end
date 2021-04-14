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

	const handleConsult = () => {
		setAddConsult(true);
	};
	return (
		<>
			<HomePatientContainer>
				<SearchedBasicInfo />
				<ActionsContainer>
					{!addConsult && (
						<>
							<BtnContainer>
								<ModalButton titleBtn={"Adicionar Consulta"}>
									<FormAddConsultation />
								</ModalButton>
								{/* <StyledBtn
									onClick={() => {
										handleConsult();
									}}
								>
									Adicionar Consulta
								</StyledBtn> */}
							</BtnContainer>
							<BtnContainer>
								<StyledBtn>Ver histórico</StyledBtn>
							</BtnContainer>
						</>
					)}
					{/* {addConsult} */}
				</ActionsContainer>
			</HomePatientContainer>
		</>
	);
};

export default UserDetailsPage;
