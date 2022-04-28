import React,{useState} from 'react'
// import '../FormApp.css'
import { useForm } from "react-hook-form";
import 'tachyons-border-radius/css/tachyons-border-radius.min.css'
import 'tachyons-border-widths/css/tachyons-border-widths.min.css'
import 'tachyons-borders/css/tachyons-borders.min.css'
import 'tachyons-border-colors/css/tachyons-border-colors.min.css'
import 'tachyons-display/css/tachyons-display.min.css'
import 'tachyons-font-weight/css/tachyons-font-weight.min.css'
import 'tachyons-hovers/css/tachyons-hovers.min.css'
import 'tachyons-letter-spacing/css/tachyons-letter-spacing.min.css'
import 'tachyons-links/css/tachyons-links.min.css'
import 'tachyons-skins/css/tachyons-skins.min.css'
import 'tachyons-spacing/css/tachyons-spacing.min.css'
import 'tachyons-text-transform/css/tachyons-text-transform.min.css'
import 'tachyons-type-scale/css/tachyons-type-scale.min.css'
import 'tachyons-max-widths/css/tachyons-max-widths.min.css'
import 'tachyons-widths/css/tachyons-widths.min.css'
import 'tachyons-utilities/css/tachyons-utilities.min.css'
import 'tachyons-flexbox/css/tachyons-flexbox.min.css'
import 'tachyons-text-align/css/tachyons-text-align.min.css'
import 'tachyons-position/css/tachyons-position.min.css'
import 'tachyons-coordinates/css/tachyons-coordinates.min.css'

function Form() {
  const [error,setError] = useState(true)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    console.log(data.email)
    handleRequest(data.email)
  }

  const handleRequest = async (email) =>{
    try{
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-VTEX-API-AppKey': 'vtexappkey-acctglobal-ATKTYU',
          'X-VTEX-API-AppToken': 'ORHUHNHGZQSPCXAINMSAGSVSNUWBFFWRQGJBYFFQOQAANVTVHQEPCRNWVOHNQGATTAYWNZKHHBMPRVERBBTOBHPYTNFJYSZHPGGNXWHIFWHAEXEAJPLPMMRLLADATAJP'
        }
      };
      const response = await fetch(`https://acctglobal.myvtex.com.br/api/checkout/pub/profiles?email=${email}`,options)
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
    <main className="form-container mw9 ph3 center">  
        <nav className="bb b--light-gray pv3">
            <strong className="form-nav__logo">Place your logo here</strong>
        </nav>
        <h1 className="form-title tc">Finalizar compra</h1>

        <h2 className="form-subtitle tc">Para finalizar a compra, informe seu e-mail</h2>
        <p className="form-text tc">Rápido. Fácil. Seguro</p>

        <form className="flex justify-center flex-column flex-row-ns pv4" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container w-full relative w-50-ns w-100 mb3 mb0-ns pr3"> 
          <input onKeyUp={handleError} {...register("email", {required: true, minLength: 10, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} type="email" placeholder="seu@email.com" className="pv3 w-100" />
          {errors.email && <span style={{color: 'red'}}>Insira um email válido</span>}
          {!errors.email && !error 
          
          ?
          <svg className="absolute w1 top-1 right-1" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.4911 18.2766L0.366101 10.1516C-0.122034 9.66351 -0.122034 8.87206 0.366101 8.38387L2.13383 6.6161C2.62196 6.12792 3.41346 6.12792 3.9016 6.6161L9.37499 12.0894L21.0984 0.366101C21.5865 -0.122034 22.378 -0.122034 22.8662 0.366101L24.6339 2.13387C25.122 2.62201 25.122 3.41346 24.6339 3.90165L10.2589 18.2767C9.77069 18.7648 8.97924 18.7648 8.4911 18.2766V18.2766Z" fill="#6CCC81"/>
          </svg>
          :
          ''
        }
          </div>
         

          <button style={{cursor: 'pointer'}} className="f6 link dim b bw0 ph3 pv3 dib white bg-dark-green w-20-ns w-100 h3">Continuar</button>
        </form>

        <div className="flex justify-center w-100">
        <section className="light-gray br2 mw6 w-100 ba ph3">
          <h3 className="f5 green">Usamos seu e-mail de forma 100% segura para:</h3>
          <p className="black">Identificar seu perfil</p>
          <p className="black">Notificar sobre o andamento do seu pedido</p>
          <p className="black">Gerenciar seu histórico de compras</p>
          <p className="black">Acelerar o preenchimento de suas informações</p>
        </section>
        </div>
    

        <footer className="mv5 flex justify-center bt b--light-gray">  
          <p className="form-footer__rights">All rights reserved</p>
        </footer>
    </main>
  )
}

export default Form