import { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import "antd/dist/antd.css";
import {
	SytledContainer,
	SytledCardInitial,
	SytledTitle,
	StyledPagination,
	Avatar,
	StyledArrow,
} from "./style";

import doctor from "../../images/blood/doctor.jpg";

const ListAllPhysicians = ({ showAll }) => {
	const { allUsers, getAllUsers } = useUsers();

	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(4);
	const numEachPage = 4;

	const FilterPhysician = (a) => {
		if (a.userType === "physician") {
			return a;
		}
	};

	const usersPhysicians = allUsers?.filter(FilterPhysician);

	const handleChange = (value) => {
		setMinValue((value - 1) * numEachPage);
		setMaxValue(value * numEachPage);
	};

	useEffect(() => {
		getAllUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<SytledContainer>
				<StyledArrow
					onClick={() => {
						showAll();
					}}
				/>
				<SytledTitle>Médicos</SytledTitle>
				{usersPhysicians &&
					usersPhysicians?.length > 0 &&
					usersPhysicians?.slice(minValue, maxValue)?.map((user, index) => (
						<SytledCardInitial>
							<div>
								<Avatar src={doctor}></Avatar>
								<h3>{user?.firstName}</h3>
							</div>
							<div>
								<h4>Espcialidade:</h4>
								<p>{user?.medicalSpecialty}</p>
								<h4>CRM:</h4>
								<p>{user?.crm}</p>
								<h4>Contato:</h4>
								<p>{user?.cellphoneNumber}</p>
							</div>
						</SytledCardInitial>
					))}

				<StyledPagination
					defaultCurrent={1}
					defaultPageSize={numEachPage}
					onChange={handleChange}
					total={usersPhysicians.length}
				/>
			</SytledContainer>
		</>
	);
};
export default ListAllPhysicians;
