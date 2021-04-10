//colocar h1, p , os textinhos e a rota pra cadastro*** 
//react-router-dom  useHistory


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import { useState } from "react";
// import axios from "axios";
// import { Button} from "antd";
import {TextField} from "@material-ui/core";
import "antd/dist/antd.css";



const FormLogin = () => {  
  
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório, 6 dígitos!")    
  });

  const { register, handleSubmit, formState: { errors } } = useForm({  
    resolver: yupResolver(schema)
  });

  console.info("erros", errors);
  
  const handleForm = data => 
    console.log('handleForm:',data);

  return(
    <form onSubmit={handleSubmit(handleForm)}>
      <h1> Login </h1>
      <div>
        <TextField
          // required
          // id="outlined-required"
          label="email"
          type = "email"       
          variant="outlined"         
          {...register("email",{require:true})} 
          error={!!errors.email}         
          helperText={errors.email?.message}     
        />         
        <div></div>   
            
        <TextField
          required
          id="password"
          label="senha"
          type="password"          
          variant="outlined"
          autoComplete="current-password"
          {...register("password", {required:"Obrigatório"})}
          error={!!errors.password}
          helperText={errors.password?.message}
        /> 
        <div></div>
        
        <TextField
          id="button-confirm"
          type="submit"
        />
      </div>
    </form>
  );
}

export default FormLogin;
