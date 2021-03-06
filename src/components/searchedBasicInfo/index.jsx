import React, { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import moment from "moment";
import userAvatar from "../../images/blood/user.png";
import doctor from "../../images/blood/doctor.jpg";

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
							{user.data.allergies ? "sim" : "n??o"}
						</P>
					</Div>
				</CardsContainer>
				<Div className="details">
					<P>Detalhes</P>
					{user.data.userType === "physician" && <b>M??dico</b>}
					{user.data.allergies && (
						<P>
							<b>Alergias:</b> {user.data.allergies}
						</P>
					)}
					{user.data.pregnant && (
						<P>
							<b>Gr??vida:</b> Sim
						</P>
					)}
					{user.data.previousDiseases && (
						<Div>
							<P className="diseases">Doen??as:</P>
							<Ul>
								{chronicDisease.map((chronic, index) => (
									<Li key={index}>{chronic} </Li>
								))}
							</Ul>
						</Div>
					)}
				</Div>
			</ContainerUser>
		</>
	);
};

export default SearchedBasicInfo;
