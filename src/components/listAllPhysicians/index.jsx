import { useEffect, useState } from "react";
import { useUsers } from "../../providers/UserProvider";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { Modal, Button } from "antd";

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

	return (
		<>
			<div>
				{usersPhysicians?.slice(0, 3)?.map((user, index) => (
					<div>
						Espcialidade:
						{user?.specialty}
						CRM:
						{user?.crm}
						Contato:
						{user?.cellphoneNumber}
					</div>
				))}
			</div>
			<Button type="primary" onClick={showModal}>
				Ver Mais
			</Button>
			<Modal
				title="Basic Modal"
				visible={isModalVisible}
				onCancel={handleCancel}
				footer={null}
			>
				{usersPhysicians &&
					usersPhysicians?.length > 0 &&
					usersPhysicians?.slice(minValue, maxValue)?.map((user, index) => (
						<div>
							Espcialidade:
							{user?.specialty}
							CRM:
							{user?.crm}
							Contato:
							{user?.cellphoneNumber}
						</div>
					))}
				<Pagination
					defaultCurrent={1}
					defaultPageSize={numEachPage}
					onChange={handleChange}
					total={usersPhysicians.length}
				/>
			</Modal>
		</>
	);
};
export default ListAllPhysicians;
