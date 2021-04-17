import { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import "antd/dist/antd.css";
import {
	SytledContainer,
	SytledCard,
	SytledCardInitial,
	SytledCardSeeMore,
	SytledTitle,
	StyledPagination,
	Avatar,
} from "./style";
import doctor from "../../images/blood/doctor.jpg";

const ListAllPhysicians = () => {
	const { allUsers, getAllUsers } = useUsers();

	const [isModalVisible, setIsModalVisible] = useState(false);
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
	}, []);

	return (
		<>
			<SytledContainer>
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
