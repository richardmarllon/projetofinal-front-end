import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import formatCPF from "../../util/formartCPF";
import dateToTimestamp from '../../util/convertDateToTimestamp'
import { saluteAPI } from "../../services/api";


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
    // let cpf = "";

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
      <h3> Cadastre-se</h3>      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
            required
            type='text'
            size="16" 
            placeholder='Primeiro nome'       
            {...register("firstName")} 
          />
           {errors.firstName && <p>{errors.firstName.message}</p>}
          <span>&emsp;</span>

          <input
            required
            type='text'
            size="20"
            placeholder='Último nome'       
            {...register("lastName")} 
          />
           {errors.lastName && <p>{errors.lastName.message}</p>}
          <span><br/><br/></span>

          <input 
            required
            type='date'          
            placeholder='dd / mm / aaaa'                
            {...register("date")} 
          />
          {errors.date && <p>{errors.date.message}</p>}
          <span>&emsp;</span>

          <input 
            required
            type='password'
            size="20"
            placeholder='Senha mínimo 6 digitos'                
            {...register("password", { required: true })} 
          />
          {errors.password && <p>{errors.password.message}</p>}
          <span><br/><br/></span>     

          <input
            required
            type='email'
            size="41"
            placeholder='email'       
            {...register("email", { required: true })} 
          />
           {errors.email && <p>{errors.email.message}</p>}
           <span><br/><br/></span>         

          <p>eu sou:</p>
          <select       
            {...register("userType")}
          >
            <option value="patient" >Paciente</option>
            <option value="physician">Médico</option>        
          </select>
          <span><br/><br/></span>

          <input
            required
            type='text'
            size="41" 
            placeholder='CPF ou CRM'       
            {...register("document")} 
          />
           {errors.lastName && <p>{errors.lastName.message}</p>}
          <span><br/><br/></span>

          <input  type="submit"/> 
          {/* onClick={handleSubmit(onSubmit)}>Enviar</input> */}

          <p> Já tem conta? <span className="linkToLogin" onClick={handleLogin}> Entre aqui! </span></p>
      </form>
    </>
  );
}

export default FormRegister;