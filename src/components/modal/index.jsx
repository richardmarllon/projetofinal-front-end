import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { ModalContainer, ModalContent } from "./style";

const Modalteste = ({ children, titleBtn, closeModal, setCloseModal }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		if (closeModal) {
			setIsModalVisible(false);
		}
		setCloseModal(false);
	}, [closeModal]);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const style = {
		background: "rgba(0,0,0);",
	};

	return (
		<ModalContainer>
			<Button onClick={showModal}>{titleBtn}</Button>
			<ModalContent
				className="teste"
				wrapClassName="vertical-center-modal"
				visible={isModalVisible}
				onCancel={handleCancel}
				width={950}
				footer={null}
				bodyStyle={style}
			>
				{children}
			</ModalContent>
		</ModalContainer>
	);
};

export default Modalteste;
