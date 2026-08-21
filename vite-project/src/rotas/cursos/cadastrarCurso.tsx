import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CadastrarCurso(){

    const[curso,setCurso] = useState(null);
    const[titulo,setTitulo] = useState('');
    const[descricao,setDescricao] = useState('');

    const api = 'https://escola-api-dhkn.onrender.com/cursos';





    const cadastrarCurso = (()=>{

        fetch(api,{

            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },

            body:JSON.stringify({
                titulo:titulo,
                descricao:descricao
            })
            

        }).then((resp)=>{
            alert("Curso cadastrado com sucesso!");
            setTitulo('');
            setDescricao('');
        }).then((resp)=> resp.json()).then((data)=>{
            setCurso(data);
        }).catch((err)=>{
            alert("Erro ao cadastrar curso: " + err);
        })



    })


return(
    <>

        <h1> Cadastrar Curso </h1>

        <input type="text" className="input-curso" placeholder="Digite o título do curso" value={titulo} onChange={(valor) => setTitulo(valor.target.value)} />
        <input type="text" className="input-curso" placeholder="Digite a descrição do curso" value={descricao} onChange={(valor)=> setDescricao(valor.target.value)}/>
        <button className="btn-curso" onClick={cadastrarCurso}>Cadastrar</button>    
    
    
    </>
)




}