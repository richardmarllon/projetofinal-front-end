import React from "react";
import { useUsers } from "../../providers/UserProvider";
import { BloodImg } from "../userBasicInfo/style";
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

	const handleMore = () => {
		console.log("ver mais");
	};
	// console.log(user);
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
