import {useState,useEffect} from "react";
import Conteudo from "./Conteudo";
import Mensagem from "./Mensagem";

export default function Container() {


    //vamos criar o estado inicial dos produtos, ou seja,
    //quais dados existem dentro do objeto produtos
    const [produtos, setProdutos] =useState([
        {
            id:"",
            nome:"",
            descricao:"",
            categoria:"",
            preco:"",
            msg:[]
        }
    ]);

    useEffect(()=>{

        fetch("http://10.26.49.26:4000/api/services/produto/listar")
        .then((response)=>response.json())
        .then((dados)=>{
            setProdutos(dados.output);
        })
        .catch((erro)=>console.error(`Erro ao carregar a api ->${erro}`))
        
    },[])






    return (
        <div className="container">
            <Mensagem/>
            <Conteudo dados = {produtos}/>
        </div>
    )
}