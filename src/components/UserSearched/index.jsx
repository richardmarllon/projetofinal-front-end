import React from "react";
import { useHistory } from "react-router";
import { useUsers } from "../../providers/UserProvider";
import {
	BloodResult,
	Container,
	GenericText,
	Title,
	Info,
	Blood,
	StyledBtn,
} from "./style";

const UserSearched = () => {
	const { user } = useUsers();
	const history = useHistory();

	const handleMore = () => {
		history.push("/patientDetails");
	};
	return (
		<Container>
			<Blood>
				<BloodResult type={user.data.bloodType + user.data.rhFactor} />
			</Blood>
			<Info>
				<Title>Nome: {user.data.firstName}</Title>
				{user.data.allergies && (
					<GenericText>alergias: {user.data.allergies}</GenericText>
				)}
				<StyledBtn
					onClick={() => {
						handleMore();
					}}
				>
					ver mais
				</StyledBtn>
			</Info>
		</Container>
	);
};

export default UserSearched;
