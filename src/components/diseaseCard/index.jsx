import React, { useState } from "react";
import { DiseaseContainer, DiseaseInfo, StyledDelBtn } from "./style";
import { DeleteOutlined } from "@ant-design/icons";
import { useUsers } from "../../providers/UserProvider";
import { saluteAPI } from "../../services/api";

const DiseaseCard = ({ disease }) => {
	const [loading, setLoading] = useState(false);
	const { user, getUserData } = useUsers();

	const handleRemove = (disease) => {
		setLoading(true);

		const userDiseases = user.data.previousDiseases.filter(
			(item) => item.nome !== disease.nome
		);

		saluteAPI
			.patch(`/users/${user.data.id}`, {
				previousDiseases: userDiseases,
			})
			.then((response) => {
				getUserData(user.data.id);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err, "erro");
			});
	};

	return (
		<DiseaseContainer>
			<DiseaseInfo key={disease.codigo}>CID: {disease.codigo}</DiseaseInfo>
			<DiseaseInfo>{disease.nome}</DiseaseInfo>
			<DiseaseInfo>
				<b>{disease.chronicDisease ? "É " : "Não é "}uma doença crônica</b>
			</DiseaseInfo>
			<StyledDelBtn
				type="primary"
				icon={<DeleteOutlined />}
				loading={loading}
				onClick={() => {
					handleRemove(disease);
				}}
			></StyledDelBtn>
		</DiseaseContainer>
	);
};

export default DiseaseCard;
