import React, { useState } from "react";
import { useDisease } from "../../providers/DiseasesProvider";
import { useUsers } from "../../providers/UserProvider";
import { saluteAPI } from "../../services/api";
import {
	AddBtn,
	DiseaseDetails,
	ResultContainer,
	SearchContainer,
	SearchIcon,
	StyledBtn,
	StyledCheck,
	StyledDiv,
	StyledInput,
	Title,
} from "./style";

const SearchDisease = () => {
	const [value, setValue] = useState("");
	const { diseases } = useDisease();
	const [resultValue, setResultValue] = useState();
	const { user, getUserData } = useUsers();
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

		user.data.previousDiseases.push(updateDisease);
		const serializerData = user.data.previousDiseases;

		saluteAPI
			.patch(`/users/${user.data.id}`, {
				previousDiseases: serializerData,
			})
			.then((response) => {
				setUpdate(false);
				setResultValue("");
				setValue("");
				getUserData(user.data.id);
				setIsChronic(false);
			})
			.catch((err) => {
				console.log(err, "erro");
			});
	};

	return (
		<SearchContainer>
			<StyledDiv>
				<Title>digite o nome da doença:</Title>
				<StyledInput
					type="text"
					value={value}
					placeholder={"ex: Cólera"}
					onChange={(evt) => {
						setValue(evt.target.value);
					}}
				/>
				<StyledBtn
					onClick={() => {
						handleSearch();
					}}
				>
					<SearchIcon />
				</StyledBtn>
			</StyledDiv>
			{!found && <h4>Doença não encontrada</h4>}
			{resultValue && (
				<ResultContainer>
					<Title>{value}</Title>
					<DiseaseDetails>
						<b>CID:</b> {resultValue.codigo}
					</DiseaseDetails>
					<DiseaseDetails>
						<b>Detalhes:</b> {resultValue.nome}
					</DiseaseDetails>
					<DiseaseDetails>
						É uma doença crônica? SIM &nbsp;
						<StyledCheck
							type="checkbox"
							onChange={() => {
								setIsChronic(!isChronic);
							}}
						/>
					</DiseaseDetails>

					<AddBtn
						loading={update}
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
