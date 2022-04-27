import React,{useState} from 'react'
import '../FormApp.css'
import { useForm } from "react-hook-form";


function Form() {
  const [error,setError] = useState(true)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    console.log(data.email)
    handleRequest(data.email)
  }

  const handleRequest = async (email) =>{
    try{
      const response = await fetch(`https://acctglobal.myvtex.com.br/api/checkout/pub/profiles?email=${email}`)
      const data = await response.json()
      console.log(data)
    }catch(err){
      console.log(err.message)
    }
   
  }

  const handleError = (e) =>{
    
    if(e.target.value !== '' && validateEmail(e.target.value)){
      console.log('O input está preenchido')
      setError(false)
      return
    }
    setError(true)
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <main className="form-container">  
        <nav className="form-nav">
            <strong className="form-nav__logo">Place your logo here</strong>
        </nav>
        <h1 className="form-title">Finalizar compra</h1>

        <h2 className="form-subtitle">Para finalizar a compra, informe seu e-mail</h2>
        <p className="form-text">Rápido. Fácil. Seguro</p>

        <form className="form-container__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container"> 
          <input onKeyUp={handleError} {...register("email", {required: true, minLength: 10, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} type="email" placeholder="seu@email.com" className="form-container__form-form-input" />
          {errors.email && <span style={{color: 'red'}}>Insira um email válido</span>}
          {!errors.email && !error 
          
          ?
          <svg className="input-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
          :
          ''
        }
          </div>
         

          <button className="form-container__form-button">Continuar</button>
        </form>

        <section className="form-box">
          <h3 className="form-box__title">Usamos seu e-mail de forma 100% segura para:</h3>
          <p className="form-box__description">Identificar seu perfil</p>
          <p className="form-box__description">Notificar sobre o andamento do seu pedido</p>
          <p className="form-box__description">Gerenciar seu histórico de compras</p>
          <p className="form-box__description">Acelerar o preenchimento de suas informações</p>
        </section>

        <footer className="form-footer">  
          <p className="form-footer__rights">All rights reserved</p>
        </footer>
    </main>
  )
}

export default Form