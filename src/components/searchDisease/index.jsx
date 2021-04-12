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
	StyledCheck,
	StyledInput,
	Title,
} from "./style";

const SearchDisease = () => {
	const [value, setValue] = useState("");
	const { diseases } = useDisease();
	const [resultValue, setResultValue] = useState();
	const { loggedUser, userToken, getLoggedUserData } = useUsers();
	const [update, setUpdate] = useState(false);
	const [isChronic, setIsChronic] = useState(false);
	const [found, setFound] = useState(true);

	const handleSearch = () => {
		setFound(true);
		if (value !== "") {
			const result = diseases.filter((item) => {
				return item.nome.toLowerCase().includes(value.toLowerCase());
			});
			result[0] ? setResultValue(result[0]) : setFound(false);
		}
	};

	const handleAdd = () => {
		setUpdate(true);

		const updateDisease = {
			...resultValue,
			chronicDisease: isChronic ? true : false,
		};

		const authConfig = { Authorization: `${"Bearer " + userToken}` };
		loggedUser.data.previousDiseases.push(updateDisease);
		const serializerData = loggedUser.data.previousDiseases;

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
				setUpdate(false);
				setResultValue("");
				setValue("");
				getLoggedUserData(loggedUser.data.id);
				setIsChronic(false);
			})
			.catch((err) => {
				console.log(err, "erro");
			});
	};

	return (
		<SearchContainer>
			<h2>buscar uma doença:</h2>
			<StyledInput
				type="text"
				placeholder={"digite o nome da doença"}
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
			{!found && <h4>Doença não encontrada</h4>}
			{resultValue && (
				<ResultContainer>
					<Title>{value}</Title>
					<DiseaseDetails>CID: {resultValue.codigo}</DiseaseDetails>
					<DiseaseDetails>Detalhes: {resultValue.nome}</DiseaseDetails>
					<DiseaseDetails>
						é uma doença crônica? SIM
						<StyledCheck
							type="checkbox"
							onChange={() => {
								setIsChronic(!isChronic);
							}}
						/>
					</DiseaseDetails>

					<AddBtn
						onClick={() => {
							handleAdd();
						}}
					>
						Adicionar ao paciente
					</AddBtn>
					{update && <h4>Adicionando...</h4>}
				</ResultContainer>
			)}
		</SearchContainer>
	);
};

export default SearchDisease;
