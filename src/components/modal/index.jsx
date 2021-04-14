import React, { useState } from "react";
import { Modal, Button } from "antd";
import { ModalContainer } from "./style";

const Modalteste = ({ children, titleBtn }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<ModalContainer>
			<Button type="primary" onClick={showModal}>
				{titleBtn}
			</Button>
			<Modal
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={950}
				footer={null}
			>
				{children}
			</Modal>
		</ModalContainer>
	);
};

export default Modalteste;
