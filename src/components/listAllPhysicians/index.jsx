import { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { Modal } from "antd";
import { Carousel } from "antd";
import {
	SytledContainer,
	SytledCard,
	SytledCardInitial,
	SytledCardSeeMore,
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

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	useEffect(() => {
		getAllUsers();
	}, []);

	function onChange(a, b, c) {
		console.log(a, b, c);
	}

	return (
		<>
			<SytledContainer>
				<Carousel afterChange={onChange}>
					{/* <SytledCard> */}
					{usersPhysicians?.slice(0, 4)?.map((user, index) => (
						<SytledCardInitial>
							<Avatar src={doctor}></Avatar>
							<p>{user?.firstName}</p>
							<p>{user?.medicalSpecialty}</p>
						</SytledCardInitial>
					))}
					{/* </SytledCard> */}
					<SytledCardSeeMore onClick={showModal}>Ver Mais</SytledCardSeeMore>
				</Carousel>
				<Modal visible={isModalVisible} onCancel={handleCancel} footer={null}>
					{usersPhysicians &&
						usersPhysicians?.length > 0 &&
						usersPhysicians?.slice(minValue, maxValue)?.map((user, index) => (
							<div>
								<h3>Espcialidade:</h3>
								<p>{user?.medicalSpecialty}</p>
								<h3>CRM:</h3>
								<p>{user?.crm}</p>
								<h3>Contato:</h3>
							</div>
						))}
					<Pagination
						defaultCurrent={1}
						defaultPageSize={numEachPage}
						onChange={handleChange}
						total={usersPhysicians.length}
					/>
				</Modal>
			</SytledContainer>
		</>
	);
};
export default ListAllPhysicians;
