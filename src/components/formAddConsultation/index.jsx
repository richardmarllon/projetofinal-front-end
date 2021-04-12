import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";

import dateToTimestamp from '../../util/convertDateToTimestamp'
import { saluteAPI } from "../../services/api";


import {    
    StyledButton, 
    StyledSmall,    
    StyledInput,
    StyledButtonAnt,
    StyledPar,    
    StyleBlockDiv,
    StyledTextarea,
    SytledHead,
    SytledContainer
  } from "./style";

import { useState } from "react";



const FormAddConsultation = () => {

  /* VER COMO SERÁ COLETADO OS DADOS DO médico / paciente 
    
    para o teste estou usando: 
      paciente userId = 1; 
      médico userId = 2;
  
  */

  // const {loggedUser} = useUsers;
  const  patientName = 'Suellen Camargo';
  const patientId = 1;

  const physicianName = 'Alanna Ajzental'
  const physicianId = 2;
  const medicalSpecialty = 'trauma surgeon'
    
  const schema = yup.object().shape({
    
    // overview: yup.string().required("Campo obrigatório!"),
    description: yup.string().required("Obrigatório descrição do exame!"),
    date: yup.date('Formato dia/mes/ano').required("Campo obrigatório!")   
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({  
    resolver: yupResolver(schema)
  });

  const [overview, setOverview] = useState("");

  const [exams, setExams] = useState([]);
  const [isLoadExams, setIsLoadExams] = useState(false);
  
  
  
  const onSubmit = (data) => {
         
    // format date for unix stamptime
    data.date = dateToTimestamp(data.date);
    data.userId = patientId;
    data.physicianId = physicianId;
    data.physicianName = physicianName;
    data.physicianSpecialty = medicalSpecialty;
    data.examFinished= false;
    setExams([...exams, data]);    
    setUserRegister(data); 

  };

  const setUserRegister = (data) => {
    console.log('Enviar pedido de exame', data);
    setIsLoadExams(true); 
    //  envia pedido do exame;
    saluteAPI
      .post(`exams?userId=${patientId}`, data)
      .then((response) => {        
        console.log('Enviado com sucesso', response)        
        reset();
      })
      .catch((e) => {
        window.alert(
          'Ops.. algo deu errado! =(.  \n' + 
          'Verifique se está conectado e tente novamente.\n' +
          'Se persistir entre em contato com equipe de TI.',e);
      });
   
  };
  
  
  const backToHome = () => {
    console.log('history.push("/homePhysician");')
    // history.push("/homePhysician");
  }

  const closeConsultation = () => {
    // verificar onde é salvo o laudo...
    console.log('salvando consulta',overview);
    console.log('Exames solicitados', exams);
    console.log('Fechado formuláro ....');    
    backToHome();
    
  }

  const writeOverview = (event) =>{     
      setOverview(event.value);
  }
  
  return (
    <SytledContainer>
      <SytledHead>Nova consulta</SytledHead>
      <StyledPar> Adicionando consulta ao paciente: {patientName}</StyledPar>
      <StyledPar> Médico(a) {physicianName}, especialidade: {medicalSpecialty}</StyledPar>
      
      <StyleBlockDiv>

        <StyledTextarea cols="50" rows="5" 
          value={overview} 
          onChange={writeOverview}
        />
      </StyleBlockDiv>

      <StyleBlockDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledPar> Adicionar solicitação de exames:</StyledPar>   
          <StyledInput
              required
              type='text'
              size="25"           
              placeholder='nome do exame'       
              {...register("description")} 
            />
             {errors.description && <StyledSmall >{errors.description.message}</StyledSmall>}

            <StyledInput 
              required
              type='date'
              placeholder='dd / mm / aaaa'                
              {...register("date")} 
            />
            {errors.date && <StyledSmall>{errors.date.message}</StyledSmall>}                  

            <StyledButton type="submit" value='adicionar'/>

        </form>
     
        <StyledPar>Lista de exames:</StyledPar>
        { isLoadExams && 
          exams.map((elm,idx) => 
          <div key={idx}>
              <StyledPar>{idx + 1} {elm.description} &emsp;dia: {moment(elm.date).format('DD/MM/YYYY')}</StyledPar>
          </div>       
          )
        }
      </StyleBlockDiv>

      <StyledButtonAnt onClick={closeConsultation}>Salvar/Atualizar</StyledButtonAnt>
    </SytledContainer>
  );
}

export default FormAddConsultation;