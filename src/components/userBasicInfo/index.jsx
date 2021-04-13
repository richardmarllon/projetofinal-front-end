import React, { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import moment from "moment";
import {
	ContainerUser,
	NameUser,
	Div,
	P,
	Button,
	AvatarPatient,
	AvatarDoctor,
	Ul,
	Li,
} from "./style";

const UserBasicInfo = () => {
	const { loggedUser, user } = useUsers();
	const [open, setOpen] = useState(false);
	const [chronicDisease, setChronicDisease] = useState([]);

	useEffect(() => {
		listChronicDisease();
	}, [user]);

	const listChronicDisease = () => {
		const listDiseases = loggedUser.data.previousDiseases
			.filter((disease) => disease.chronicDisease)
			.map((disease) => disease.nome);
		setChronicDisease([listDiseases]);
		console.log(listDiseases);
	};

	const calcAge = (date) => {
		date = moment(Number(date)).format("DD/MM/YYYY");
		console.log(date);
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
			console.log(totalAge);

			return totalAge;
		}
		return totalAge;
	};

	return (
		<>
			<ContainerUser>
				<Div>
					{loggedUser.data.userType === "patient" ? (
						<AvatarPatient src=" https://picsum.photos/seed/picsum/100/100"></AvatarPatient>
					) : (
						<AvatarDoctor src=" https://picsum.photos/seed/picsum/100/100"></AvatarDoctor>
					)}
				</Div>
				<Button onClick={() => setOpen(true)}>config</Button>
				<NameUser>
					{loggedUser.data.firstName}, {calcAge(loggedUser.data.birthDate)}
				</NameUser>
				<Div>
					sangue:
					<P>{loggedUser.data.bloodType + loggedUser.data.rhFactor}</P>
				</Div>
				<Div>
					<P>alergias:</P>
					<P>{loggedUser.data.allergies ? "sim" : "nao"}</P>
				</Div>

				<Div>
					<P>detalhes:</P>
					{loggedUser.data.allergies && (
						<P>alergico a: {loggedUser.data.allergies}</P>
					)}
					{loggedUser.data.pregnant && <P>Grávida: Sim</P>}
					{loggedUser.data.previousDiseases && (
						<Ul>
							{chronicDisease.map((chronic, index) => (
								<Li key={index}> {chronic} </Li>
							))}
						</Ul>
					)}
				</Div>

				<Button>vacinas</Button>
			</ContainerUser>
			{open && (
				<Div>
					<P>teste</P>
				</Div>
			)}
		</>
	);
};

export default UserBasicInfo;
