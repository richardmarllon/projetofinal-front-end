import React from "react";
import FormRegister from "../../components/formRegister";
import FooterContainer from "../../components/footer";
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
			<FooterContainer />
		</>
	);
};

export default Register;
