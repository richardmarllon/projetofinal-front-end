import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const FormRegister = () => {
  
  const schema = yup.object().shape({
     email: yup.string().email("Email inválido").required("Campo obrigatório"),
    // _firstName: yup.string().required("Campo obrigatório"),
    // _LastName: yup.string().required("Campo obrigatório"),
    // _date: yup.date().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório, 6 dígitos!")    
  });

  const { register, handleSubmit, formState: { errors } } = useForm({  
    resolver: yupResolver(schema)
  });

  console.log('[erros]',errors)

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        required
        type='email'        
        {...register("email", { required: true })} 
      />
       {errors.email && <p>{errors.email.message}</p>}
      <br/>
      <br/>
      
      <input 
        required
        type='password'                
        {...register("password", { required: true })} 
      />
      {errors.password && <p>{errors.password.message}</p>}
      <br/>
      <br/>
      <input type="submit" />
    </form>
  );
}

export default FormRegister;