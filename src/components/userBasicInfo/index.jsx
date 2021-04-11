import React, { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import {
	ContainerUser,
	NameUser,
	Div,
	P,
	Button,
	AvatarPatient,
	AvatarDoctor,
} from "./style";

const UserBasicInfo = () => {
	const { loggedUser, user } = useUsers();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		// console.log(user);
	}, [user]);

	const calcAge = (date) => {
		let bornDate = date.slice(0, 10).split("-"),
			bornYear = bornDate[0],
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
					{loggedUser.data.firstName}, {calcAge(loggedUser.data.birthDate)}{" "}
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
