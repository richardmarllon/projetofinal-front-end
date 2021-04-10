import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import formatCPF from "../../util/formartCPF";
import dateToTimestamp from '../../util/convertDateToTimestamp'
import { saluteAPI } from "../../services/api";
import {
    StyledForm,
    StyledButton, 
    StyledParErr,
    StyledType,
    StyledInput,
    StyledSelect,
    StyledH3,
    StyledPar,
    StyledSpan
  } from "./style";


const FormRegister = () => {
  
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    firstName: yup.string().required("Campo obrigatório"),
    lastName: yup.string().required("Campo obrigatório"),
    date: yup.date('Formato dia/mes/ano').required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório, 6 dígitos!"),
    userType: yup.string().required('Campo obrigatório'),
    document: yup.string().required('Campo obrigatório')  
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({  
    resolver: yupResolver(schema)
  });

  
  const onSubmit = (data) => {
    
    // validation userType          
    switch (data.userType) {
      case 'patient':
        let cpf = formatCPF(data.document)      
        if(!cpf){
          window.alert('CPF com erro, favor revisar!');
          return;
        }
        data = {...data, cpf}  
        break;    
      
      case 'physician':
        let crm = data.document;
        data = {...data, crm};
        break;

      default:
        break;
    }

    // format date for unix stamptime
    let birthDate = dateToTimestamp(data.date);
    data = {...data, birthDate};    

    //finally data readdle to post =)   

    const {firstName, lastName, password, userType, email, cpf, crm } = data;
    const sendData = {firstName, lastName, birthDate, password, email, userType, cpf,crm }
    setUserRegister(sendData);
  
  };

  const setUserRegister = (data) => {
    saluteAPI
      .post(`/users`, data)
      .then((response) => {
        // console.log(response);
        // history.push("/");
        reset();       
      })
      .catch((e) => {
        window.alert('Ops.. algo deu errado! ="(". \n Por favor, confirme seus dados e internet',e);
      });
  };
  
  
  const handleLogin = () => {
    console.log('history.push("/");')
    // history.push("/");
  }
 
  return (
    <>
         
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledH3> Cadastre-se</StyledH3>   
        <StyledInput
            required
            type='text'
            size="25"           
            placeholder='Primeiro nome'       
            {...register("firstName")} 
          />
           {errors.firstName && <StyledParErr >{errors.firstName.message}</StyledParErr>}
          

          <StyledInput
            required
            type='text'
            size="25"
            placeholder='Último nome'       
            {...register("lastName")} 
          />
           {errors.lastName && <StyledParErr >{errors.lastName.message}</StyledParErr>}
          

          <StyledInput 
            required
            type='date'
            placeholder='dd / mm / aaaa'                
            {...register("date")} 
          />
          {errors.date && <StyledParErr>{errors.date.message}</StyledParErr>}
          

          <StyledInput 
            required
            type='password'
            size="25"
            placeholder='Senha mínimo 6 digitos'                
            {...register("password", { required: true })} 
          />
           {errors.password && <StyledParErr >{errors.password.message}</StyledParErr>}
         
           
          <StyledInput
            required
            type='email'
            size="25"
            placeholder='email'       
            {...register("email", { required: true })} 
          />
           {errors.email && <StyledParErr inputColor="#EF7272">{errors.email.message}</StyledParErr>}
          

          <StyledType>eu sou:</StyledType>
          <StyledSelect            
            {...register("userType")}          >
            <option value="patient" >Paciente</option>
            <option value="physician">Médico</option>        
          </StyledSelect>          

          <StyledInput
            required
            type='text'
            size="25" 
            placeholder='CPF ou CRM'       
            {...register("document")} 
          />
           {errors.document && <StyledParErr >{errors.document.message}</StyledParErr>}
          
          <StyledButton  type="submit"/>           

          <StyledPar> Já tem conta? <StyledSpan onClick={handleLogin} inputColor="#EF7272"> Entre aqui! </StyledSpan></StyledPar>
      </StyledForm>
    </>
  );
}

export default FormRegister;