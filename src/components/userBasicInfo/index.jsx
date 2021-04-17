import React, { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import moment from "moment";
import userAvatar from "../../images/blood/user.png";
import doctor from "../../images/blood/doctor.jpg";
import { SettingOutlined } from "@ant-design/icons";

import {
	ContainerUser,
	NameUser,
	Div,
	P,
	Button,
	Avatar,
	Ul,
	Li,
	CardsContainer,
	GenericText,
	BloodImg,
	StyledEdit,
	UpdateInfoForm,
} from "./style";
import ModalStyled from "../modal";

const UserBasicInfo = () => {
	const { loggedUser, user } = useUsers();
	const [open, setOpen] = useState(false);
	const [chronicDisease, setChronicDisease] = useState([]);
	const [closeModal, setCloseModal] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		listChronicDisease();
	}, [user]);

	const listChronicDisease = () => {
		if (loggedUser.data.previousDiseases) {
			const listDiseases = loggedUser.data.previousDiseases
				.filter((disease) => disease.chronicDisease)
				.map((disease) => disease.nome);
			setChronicDisease(listDiseases);
		}
	};

	const calcAge = (date) => {
		date = moment(Number(date)).format("DD/MM/YYYY");
		let bornDate = date.split("/"),
			bornYear = bornDate[2],
			bornMonth = bornDate[1],
			currentDate = new Date(),
			currentYear = currentDate.getFullYear(),
			currentMonth = currentDate.getMonth() + 1,
			currentDay = currentDate.getDate(),
			totalAge = currentYear - bornYear;

		if (
			currentMonth < bornMonth ||
			(currentMonth === bornMonth && currentDay < totalAge--)
		) {
			return totalAge < 0 ? 0 : totalAge;
		}
		return totalAge;
	};

	return (
		<>
			<ContainerUser>
				<StyledEdit>
					<SettingOutlined
						onClick={() => {
							setOpenModal(true);
						}}
					/>
					<ModalStyled
						closeModal={closeModal}
						titleBtn="teste"
						setCloseModal={setCloseModal}
						openModal={openModal}
						setOpenModal={setOpenModal}
					>
						<UpdateInfoForm className="profile" setCloseModal={setCloseModal} />
					</ModalStyled>
				</StyledEdit>
				<Div className="avatar">
					{loggedUser.data.userType === "patient" ? (
						<Avatar src={userAvatar}></Avatar>
					) : (
						<Avatar src={doctor}></Avatar>
					)}
				</Div>
				<Button onClick={() => setOpen(true)}>config</Button>
				<NameUser>
					{loggedUser.data.firstName}, {calcAge(loggedUser.data.birthDate)}
				</NameUser>

				<CardsContainer>
					<Div className="blood">
						<GenericText>sangue:</GenericText>
						<BloodImg
							type={loggedUser.data.bloodType + loggedUser.data.rhFactor}
						/>
					</Div>
					<Div className="alergies">
						<GenericText>alergias:</GenericText>
						<P alergic={loggedUser.data.allergies ? "sim" : "nao"}>
							{loggedUser.data.allergies ? "sim" : "não"}
						</P>
					</Div>
				</CardsContainer>
				<Div className="details">
					<P>detalhes:</P>
					{loggedUser.data.userType === "physician" && "Médico"}
					{loggedUser.data.allergies && (
						<P>alergico a: {loggedUser.data.allergies}</P>
					)}
					{loggedUser.data.pregnant && <P>Grávida: Sim</P>}
					{loggedUser.data.previousDiseases && (
						<Div>
							Doenças:
							<Ul>
								{chronicDisease.map((chronic, index) => (
									<Li key={index}>{chronic} </Li>
								))}
							</Ul>
						</Div>
					)}
				</Div>

				<Button className="vacina">vacinas</Button>
			</ContainerUser>
		</>
	);
};

export default UserBasicInfo;
