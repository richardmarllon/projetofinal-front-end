import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import { useState } from "react";
// import axios from "axios";
// import { Button} from "antd";
import {TextField} from "@material-ui/core";
import "antd/dist/antd.css";



const FormRegister = () => {

  // const schema = yup.object().shape({
  //   // email: yup.string().email("Email inválido").required("Campo obrigatório"),
  //   _name: yup.string().required("Campo obrigatório"),
  //   _surname: yup.string().required("Campo obrigatório"),
  //   _password: yup
  //     .string()
  //     .min(6, "Mínimo de 6 dígitos")
  //     .required("Campo obrigatório, 6 dígitos!")    
  // });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // {
  //   // resolver: yupResolver(schema),
  // });

 
  
  console.info("erros", errors)

  const handleForm = (data) => {
    console.info('handleForm:',data)
    reset();
  }
  
  return(
    <form onSubmit={handleSubmit(handleForm)}>
      <h1> Cadastre-se</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nome"          
          variant="outlined"         
          {...register("name", {required:"Obrigatório"})} 
          // inputRef={register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}       
        />        
        <TextField
          required
          id="outlined-disabled"
          label="Último nome"        
          variant="outlined"         
          {...register("surname", {required:"Obrigatório"})}
          // inputRef={register("surname")}
          error={!!errors.surname}         
          helperText={errors.surname?.message}
        />
        <TextField
          required
          id="date"
          label="Nascimento"
          type="date"          
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}         
          {...register("date", {required:"Obrigatório"})}
          // inputRef={register("date")}
          error={!!errors.date}
          helperText={errors.date?.message}
        />        
        <TextField
          required
          id="password"
          label="password"
          type="password"          
          variant="outlined"
          autoComplete="current-password"
          {...register("password", {required:"Obrigatório"})}
          // inputRef={register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />       
        <TextField
          id="button-confirm"
          type="submit"
        />
      </div>
    </form>
  );
}

export default FormRegister;