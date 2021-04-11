import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import formatCPF from "../../util/formartCPF";
import dateToTimestamp from '../../util/convertDateToTimestamp'
import { saluteAPI } from "../../services/api";
import {
    StyledForm,
    StyledButton, 
    StyledSmall,
    StyledType,
    StyledInput,
    StyledSelect,    
    StyledPar,
    StyledSpan
  } from "./style";
import { useState } from "react";


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

  const [selected, setSelect] = useState(false);
  
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
        // history.push("/");
        reset();       
      })
      .catch((e) => {
        window.alert(
          'Ops.. algo deu errado! =(. \n' + 
          'Por favor, confirme seus dados!\n'+
          'Provavelmente email já cadastrado.',e);
      });
  };
  
  
  const handleLogin = () => {
    console.log('history.push("/");')
    // history.push("/");
  }

  const handleUserType = (event) => {    
    const option = event.target.options.selectedIndex;
    // target.options... if 0 is patient then false to show crm. 
    option ? setSelect(true) : setSelect(false)   
  }
 
  return (
    <>
         
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h3> Cadastre-se</h3>   
        <StyledInput
            required
            type='text'
            size="25"           
            placeholder='Primeiro nome'       
            {...register("firstName")} 
          />
           {errors.firstName && <StyledSmall >{errors.firstName.message}</StyledSmall>}
          

          <StyledInput
            required
            type='text'
            size="25"
            placeholder='Último nome'       
            {...register("lastName")} 
          />
           {errors.lastName && <StyledSmall >{errors.lastName.message}</StyledSmall>}
          

          <StyledInput 
            required
            type='date'
            placeholder='dd / mm / aaaa'                
            {...register("date")} 
          />
          {errors.date && <StyledSmall>{errors.date.message}</StyledSmall>}
          

          <StyledInput 
            required
            type='password'
            size="25"
            placeholder='Senha mínimo 6 digitos'                
            {...register("password", { required: true })} 
          />
           {errors.password && <StyledSmall >{errors.password.message}</StyledSmall>}
         
           
          <StyledInput
            required
            type='email'
            size="25"
            placeholder='email'       
            {...register("email", { required: true })} 
          />
           {errors.email && <StyledSmall inputColor="#EF7272">{errors.email.message}</StyledSmall>}
          

          <StyledType>eu sou:</StyledType>
          <StyledSelect            
            {...register("userType")}
            onChange={handleUserType}          >
            <option value="patient" >Paciente</option>
            <option value="physician">Médico</option>        
          </StyledSelect>          

          <StyledInput
            required
            type='text'
            size="25" 
            placeholder='CPF'       
            {...register("cpf")} 
          />
           {errors.cpf && <StyledSmall >{errors.cpf.message}</StyledSmall>}
          
           {selected && 
            <>
              <StyledInput
               required
               type='text'
               size="25" 
               placeholder='CRM'       
               {...register("crm")} 
              />
              {errors.crm && <StyledSmall >{errors.crm.message}</StyledSmall>}
            </>
          }

          <StyledButton  type="submit"/>           

          <StyledPar> Já tem conta? <StyledSpan onClick={handleLogin} inputColor="#EF7272"> Entre aqui! </StyledSpan></StyledPar>
      </StyledForm>
    </>
  );
}

export default FormRegister;