import React, { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import moment from "moment";
import userAvatar from "../../images/blood/user.png";
import doctor from "../../images/blood/doctor.jpg";
import { ArrowLeftOutlined } from "@ant-design/icons";

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
	StyledArrow,
} from "./style";
import { useHistory } from "react-router";

const SearchedBasicInfo = () => {
	const { user, setUser } = useUsers();
	const [open, setOpen] = useState(false);
	const [chronicDisease, setChronicDisease] = useState([]);
	const history = useHistory();

	useEffect(() => {
		listChronicDisease();
	}, [user]);

	const listChronicDisease = () => {
		if (user.data.previousDiseases) {
			const listDiseases = user.data.previousDiseases
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
			<StyledArrow
				onClick={() => {
					setUser("");
					history.push("/home");
				}}
			/>
			<ContainerUser>
				<Div className="avatar">
					{user.data.userType === "patient" ? (
						<Avatar src={userAvatar}></Avatar>
					) : (
						<Avatar src={doctor}></Avatar>
					)}
				</Div>
				<Button onClick={() => setOpen(true)}>config</Button>
				<NameUser>
					{user.data.firstName}, {calcAge(user.data.birthDate)}
				</NameUser>
				<CardsContainer>
					<Div className="blood">
						<GenericText>sangue:</GenericText>
						<BloodImg type={user.data.bloodType + user.data.rhFactor} />
					</Div>
					<Div className="alergies">
						<GenericText>alergias:</GenericText>
						<P alergic={user.data.allergies ? "sim" : "nao"}>
							{user.data.allergies ? "sim" : "não"}
						</P>
					</Div>
				</CardsContainer>
				<Div className="details">
					<P>detalhes:</P>
					{user.data.allergies && <P>alergico a: {user.data.allergies}</P>}
					{user.data.pregnant && <P>Grávida: Sim</P>}
					{user.data.previousDiseases && (
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
			{open && (
				<Div>
					<P>teste</P>
				</Div>
			)}
		</>
	);
};

export default SearchedBasicInfo;
