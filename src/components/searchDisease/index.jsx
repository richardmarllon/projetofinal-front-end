import React, { useState } from "react";
import { useDisease } from "../../providers/DiseasesProvider";
import { useUsers } from "../../providers/UserProvider";
import { saluteAPI } from "../../services/api";
import {
	AddBtn,
	DiseaseDetails,
	ResultContainer,
	SearchContainer,
	StyledBtn,
	StyledInput,
	Title,
} from "./style";

const SearchDisease = () => {
	const [value, setValue] = useState("");
	const { diseases } = useDisease();
	const [resultValue, setResultValue] = useState();
	const { loggedUser, userToken } = useUsers();

	const handleSearch = () => {
		if (value !== "") {
			const result = diseases.filter((item) => {
				return item.nome.toLowerCase().includes(value.toLowerCase());
			});
			setResultValue(result[0]);
		}
	};

	const handleAdd = () => {
		console.log("adciona");
		const authConfig = { Authorization: `${"Bearer " + userToken}` };
		loggedUser.data.previousDiseases.push(resultValue);
		const serializerData = loggedUser.data.previousDiseases;
		console.log(serializerData, "token");

		saluteAPI
			.patch(
				`/users/${loggedUser.data.id}`,
				{
					previousDiseases: serializerData,
				},
				{
					headers: authConfig,
				}
			)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err, "erro");
			});
	};
	

	console.log("esse", userToken);
	return (
		<SearchContainer>
			<StyledInput
				type="text"
				onChange={(evt) => {
					setValue(evt.target.value);
				}}
			/>
			<StyledBtn
				onClick={() => {
					handleSearch();
				}}
			>
				buscar
			</StyledBtn>
			{resultValue && (
				<ResultContainer>
					<Title>{value}</Title>
					<DiseaseDetails>CID: {resultValue.codigo}</DiseaseDetails>
					<DiseaseDetails>Detalhes: {resultValue.nome}</DiseaseDetails>
					<AddBtn
						onClick={() => {
							handleAdd();
						}}
					>
						Adicionar ao paciente
					</AddBtn>
				</ResultContainer>
			)}
		</SearchContainer>
	);
};

export default SearchDisease;
