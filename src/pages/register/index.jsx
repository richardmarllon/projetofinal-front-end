import React from "react";
import FormRegister from "../../components/formRegister";
import brand from "../../images/brand.svg";
import {
	BrandMobileContainer,
	BrandTag,
	ContentContainer,
	DocContainer,
	DocTag,
	RegContainer,
} from "./style";
import docReg from "../../images/docReg.svg";

const Register = () => {
	return (
		<>
			<ContentContainer>
				<DocContainer>
					<DocTag src={docReg} />
				</DocContainer>
				<BrandMobileContainer>
					<BrandTag src={brand} />
				</BrandMobileContainer>
				<RegContainer>
					<FormRegister />
				</RegContainer>
			</ContentContainer>
		</>
	);
};

export default Register;
