import { diseaseAPI } from "../../services/api";

const { createContext, useContext, useState, useEffect } = require("react");

const DiseaseContext = createContext();

export const DiseasesProvider = ({ children }) => {
	const [diseases, setDiseases] = useState([]);

	useEffect(() => {
		diseaseAPI
			.get()
			.then((response) => {
				const result = response.data.map((item) => {
					return {
						nome: item.nome,
						codigo: item.codigo,
						chronicDisease: false,
					};
				});
				setDiseases(result);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);


	return (
		<DiseaseContext.Provider value={{ diseases }}>
			{children}
		</DiseaseContext.Provider>
	);
};

export const useDisease = () => useContext(DiseaseContext);
