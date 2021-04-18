import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { ModalContainer, ModalContent } from "./style";
import { useHistory } from "react-router";

const ModalStyled = ({
	children,
	titleBtn,
	closeModal,
	setCloseModal,
	openModal,
	setOpenModal,
}) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const history = useHistory();
	useEffect(() => {
		// if (closeModal) {
		// 	setIsModalVisible(false);
		// }
		if (openModal) {
			setIsModalVisible(true);
		}
		// setCloseModal(false);
	}, [closeModal, openModal]);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		if (openModal) {
			setOpenModal(false);
		}
	};

	return (
		<ModalContainer>
			<Button onClick={showModal}>{titleBtn}</Button>
			<ModalContent
				wrapClassName="vertical-center-modal"
				visible={isModalVisible}
				onCancel={handleCancel}
				width={800}
				footer={null}
			>
				{children}
			</ModalContent>
		</ModalContainer>
	);
};

export default ModalStyled;
