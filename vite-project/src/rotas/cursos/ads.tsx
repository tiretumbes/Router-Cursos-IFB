import { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';


type Curso = {
  titulo: string,
  descricao:string
}

export default function ADS() {

  const {id} = useParams();
  const [curso,setCurso] = useState<Curso>();




  useEffect(()=>{

      const buscarCursos = async ()=> {
        try {
          const {data} = await axios.get<Curso>('https://escola-api-dhkn.onrender.com/cursos/'+id);
          setCurso(data);
          

        } catch (error) {
          alert("ERRO AO BUSCAR DADOS DO CURSO" + error)
        }
        
  }

  buscarCursos()


  }, [id])

  return (
    <div>
      <h2>{curso?.titulo}</h2>
      <h4>{curso?.descricao}</h4>
      
    </div>
  );
}