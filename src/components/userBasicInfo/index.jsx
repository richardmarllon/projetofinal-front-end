import React, { useEffect } from "react";
import { useUsers } from "../../providers/UserProvider";
import { ContainerUser, NameUser, Div, P, Button, Avatar } from "./style";

const UserBasicInfo = () => {
	const { loggedUser, user } = useUsers();

	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<>
			<ContainerUser>
				<Avatar src=" https://picsum.photos/seed/picsum/100/100"></Avatar>
				<Button>config</Button>
				<NameUser>{loggedUser.data.firstName}, teste </NameUser>
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
		</>
	);
};

export default UserBasicInfo;
