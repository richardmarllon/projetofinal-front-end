import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import formatCPF from "../../util/formartCPF";
import dateToTimestamp from "../../util/convertDateToTimestamp";
import { saluteAPI } from "../../services/api";
import {
	StyledForm, 
	StyledButton,
	StyledSmall,
	StyledType,
	StyledInput,
	StyledSelect,	
	InputContainer,
	LogoContainer,
	LogoTag,
	StyledLabel,
	StyledH1,
	SendBtnContainer,
	StyledTextarea
} from "../formUserUpdateInfo/style";

import { useState } from "react";
import logo from "../../images/logoMobile.svg";
import { useHistory } from "react-router";

const FormUserUpdateInfo = () => {
	const history = useHistory();
	const schema = yup.object().shape({
		
		firstName: yup.string().required("Campo obrigatório"),
		lastName: yup.string().required("Campo obrigatório"),
		date: yup.date("Formato dia/mes/ano").required("Campo obrigatório"),		
		userType: yup.string().required("Campo obrigatório!"),
		cpf: yup
			.string()
			.min(11, "CPF com erro!")
			.max(14, "CPF com erro!")
			.required("Campo obrigatório!"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [isWoman, setIsWoman] = useState(true);
	const [isPhysician, setPhysician] = useState(false);
	const [isCpfError, setIsCpfError] = useState(false);

	const onSubmit = (data) => {
		// format cpf
		const _cpf = formatCPF(data.cpf);
		if (!_cpf) {
			setIsCpfError(true);			
			return;
		}
		data.cpf = _cpf;

		// format date for unix stamptime
		let birthDate = dateToTimestamp(data.date);
		data = { ...data, birthDate };

		//finally data readdle to post =)
		const { firstName, lastName, userType, cpf, crm, } = data;
		const sendData = {
			firstName,
			lastName,
			birthDate,						
			userType,
			cpf,
			crm,
		};
		setUserRegister(sendData);
	};

	const setUserRegister = (data) => {
		// saluteAPI
		// 	.post(`/users`, data)
		// 	.then((response) => {
		// 		history.push("/");
		// 		setPhysician(false);
		// 		reset();
		// 	})
		// 	.catch((e) => {
		// 		console.log("ocorreu um erro: ", e);
		// 	});
	};

	// const handleclose = () => {
	// 	console.log(history)
	// 	// history.push("/");
	// };

	const handleUserType = (event) => {
		const option = event.target.options.selectedIndex;
		// target.options... if 0 is patient then false to show crm.
		option ? setPhysician(true) : setPhysician(false);
	
	};

	const handleUserGender = (event) => {
		const option = event.target.options.selectedIndex;
		// target.options... if 0 is woman then show pregnant fied.
		!option ? setIsWoman(true) : setIsWoman(false);
	
	};

	const handleCpf = () => {
		setIsCpfError(false);
	}


	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<LogoContainer>
					<LogoTag src={logo} />
				</LogoContainer>
				
				<StyledH1>Atualizar Perfil</StyledH1>			
				
				<InputContainer>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="Primeiro nome"
						{...register("firstName")}
					/>
					{errors.firstName && (
						<StyledSmall>{errors.firstName.message}</StyledSmall>
					)}
				</InputContainer>

				<InputContainer>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="Último nome"
						{...register("lastName")}
					/>
					{errors.lastName && (
						<StyledSmall>{errors.lastName.message}</StyledSmall>
					)}

				</InputContainer>
				<InputContainer className="date">
					<StyledLabel>Data de nascimento:</StyledLabel>
					<StyledInput
						required
						type="date"
						placeholder="data de nascimento"
						{...register("date")}
					/>
					{errors.date && <StyledSmall>{errors.date.message}</StyledSmall>}
				</InputContainer>

				<InputContainer className="type">
					<StyledType>gênero:</StyledType>
					<StyledSelect {...register("gender")} onChange={handleUserGender}>
						<option value="woman">Mulher</option>
						<option value="man">Homem</option>
					</StyledSelect>
				</InputContainer>

				
				{ isWoman && 
				<InputContainer className="type">
					<StyledType>está grávida:</StyledType>
					<StyledSelect {...register("pregnant")}>
						<option value="false">Não</option>
						<option value="true">Sim</option>
					</StyledSelect>
				</InputContainer>
				}

				<InputContainer className="type">
					<StyledType>eu sou:</StyledType>
					<StyledSelect {...register("userType")} onChange={handleUserType}>
						<option value="patient">Paciente</option>
						<option value="physician">Médico</option>
					</StyledSelect>
				</InputContainer>

				<InputContainer className={!isPhysician && "personal"}>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="CPF"
						{...register("cpf")}
						onChange={handleCpf}
					/>
					{errors.cpf && <StyledSmall>{errors.cpf.message}</StyledSmall>}
					{isCpfError && <StyledSmall>CPF com erro, favor revisar!</StyledSmall>}
				</InputContainer>

				{isPhysician && (
					<InputContainer>
						<StyledInput
							required
							type="text"
							size="25"
							placeholder="CRM"
							{...register("crm")}
						/>
						{errors.crm && <StyledSmall>{errors.crm.message}</StyledSmall>}
					</InputContainer>
				)}


{/* ------ MUDAR CLASSNAME */}

				<InputContainer  className={!isPhysician && "personal"}>
					<StyledInput					 	
						type="text"							
						placeholder="alergias"
						{...register("allergies")}
					/>				
				</InputContainer>

				
				<InputContainer className="bloodType">
					<StyledType>tipo sanguíneo:</StyledType>
					<StyledSelect {...register("bloodType")}>
						<option value="a-">A-</option>
						<option value="a+">A+</option>						
						<option value="ab-">AB-</option>
						<option value="ab+">AB+</option>
						<option value="b-">B-</option>
						<option value="b+">B+</option>
						<option value="o-">O-</option>
						<option value="o+">O+</option>
					</StyledSelect>
				</InputContainer>
				
{/* ------ MUDAR CLASSNAME */}
				<InputContainer  className={!isPhysician && "personal"}> 
					<StyledInput																
					 	type="text"
						placeholder="doenças prévias"
						{...register("previousDiseases")}
					/>				
				</InputContainer>
		

				<InputContainer>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="rua/av"
						{...register("street")}
					/>
					{errors.street && (
						<StyledSmall>{errors.street.message}</StyledSmall>
					)}
				</InputContainer>	

				<InputContainer>
					<StyledInput
						required
						type="text"
						size="15"
						placeholder="number"
						{...register("number")}
					/>
					{errors.number && (
						<StyledSmall>{errors.number.message}</StyledSmall>
					)}
				</InputContainer>	

				<InputContainer>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="bairro"
						{...register("district")}
					/>
					{errors.district && (
						<StyledSmall>{errors.district.message}</StyledSmall>
					)}
				</InputContainer>	

				<InputContainer>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="cidade"
						{...register("city")}
					/>
					{errors.city && (
						<StyledSmall>{errors.city.message}</StyledSmall>
					)}
				</InputContainer>

				<InputContainer>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="cidade"
						{...register("state")}
					/>
					{errors.state && (
						<StyledSmall>{errors.state.message}</StyledSmall>
					)}
				</InputContainer>

				<InputContainer>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="CEP"
						{...register("zipCode")}
					/>
					{errors.zipeCode && (
						<StyledSmall>{errors.zipeCode.message}</StyledSmall>
					)}
				</InputContainer>		

				<InputContainer>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="telefone"
						{...register("phone")}
					/>
					{errors.phone && (
						<StyledSmall>{errors.phone.message}</StyledSmall>
					)}
				</InputContainer>

				<SendBtnContainer>
					<StyledButton type="submit" value="Salvar e atualizar"/>
				</SendBtnContainer>
			
			</StyledForm>
		</>
	);
};

export default FormUserUpdateInfo;
