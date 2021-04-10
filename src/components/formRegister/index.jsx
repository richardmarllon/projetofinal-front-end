import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button} from "antd";




const FormRegister = () => {
  
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    firstName: yup.string().required("Campo obrigatório"),
    lastName: yup.string().required("Campo obrigatório"),
    date: yup.date().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório, 6 dígitos!"),
    type: yup.string().required('Campo obrigatório'),
    document: yup.string().required('Campo obrigatório')  
  });

  const { register, handleSubmit, formState: { errors } } = useForm({  
    resolver: yupResolver(schema)
  });

  

  const onSubmit = data => console.log(data);
  const handleLogin = () => console.log('history /login')
 
  return (
    <>
      <h3> Cadastre-se</h3>
      <form >
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
          {...register("date", { required: true })} 
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
        <br/>
        <br/>     

        <input
          required
          type='email'
          size="41"
          placeholder='email'       
          {...register("email", { required: true })} 
        />
         {errors.email && <p>{errors.email.message}</p>}
        <br/>
        <br/>

        <p>eu sou:</p>
        <select       
          {...register("type")}
        >
          <option value="Paciente" >Paciente</option>
          <option value="Medico">Médico</option>        
        </select>
        <br/>
        <br/>

        <input
          required
          type='text'
          size="41" 
          placeholder='CPF ou CRM'       
          {...register("document")} 
        />
         {errors.lastName && <p>{errors.lastName.message}</p>}
        <span><br/><br/></span>

        <Button onClick={handleSubmit(onSubmit)}>Enviar</Button>

        <p> Já tem conta? <span className="linkToLogin" onClick={handleLogin}> Entre aqui! </span></p>
      </form>
    </>
  );
}

export default FormRegister;