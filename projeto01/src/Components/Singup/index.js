import React, {  Fragment,useState,useEffect } from "react";
import HeaderAction from "./HeaderAction";
import "./index.css";
import "../../App.css";
import axios from 'axios';


function SignUp() {
    const[estados, setEstados] = useState([]);
    const [campos, setCampos] = useState({
        txNome: '',
        txPhone: 0,
        txEmail: '',
        txGenero:'',
        
    });

    useEffect(() => {
      axios.get('http://localhost:3030/estados').then(response => {
          setEstados(response.data);
      })
      
    }, []);

    function handleInputChange(event){
      campos[event.target.name] = event.target.value;
      setCampos(campos);
    }


    function handleFormSubmit(event){
      event.preventDefault();
      axios.post('http://localhost:3032/cadastro', campos).then(response => {
          alert(response.data.dados.length + ' cadastros!');
      })
    }

    return (
      <Fragment>
        <HeaderAction />
        <section className="block">
          <div className="wrapper">
            <h2 className="title">Sobre você</h2>

            
            <form onSubmit={handleFormSubmit} className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Nome completo</label>
                
                <input type="text" name="txtNome" id="txtNome" className="form-input" placeholder="Insira seu nome" onChange={handleInputChange}/>
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input type="text" name="txtEmail" id="txtEmail" className="form-input" placeholder="Insira o seu e-mail" onChange={handleInputChange}/>
              </div>
              <div className="form-group">
                <label className="form-label">Celular</label>
                <input type="phone" name="txtPhone" id="txtPhone"className="form-input" placeholder="Insira o número com o DDD" onChange={handleInputChange}/>
              </div>
              <div className="form-group">
                <label className="form-label">Gênero</label>
                <select name="txtGenero" id="txtGenero" className="form-input"onChange={handleInputChange}>
                  <option value="0">Selecione uma opção</option>
                    {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.genero}</option>))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Nascimento</label>
                <input type="text" className="form-input" placeholder="Insira a data" />
              </div>
              <div className="form-group">
                <label className="form-label">Escolaridade</label>
                
              </div>
              <div className="form-group">
                <label className="form-label">CEP</label>
                <input type="text" className="form-input" placeholder="Insira seu CEP" />
              </div>
              <label className="form-checkbox">
                <input type="checkbox" />
                Sou uma pessoa com deficiência
              </label>
            </form>
          </div>
        </section>
        <section className="block">
          <div className="wrapper">
            <h2 className="title">Sua senha </h2>
            <p>A senha deve possuir no mínimo 6 caracteres</p>
            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Crie uma nova senha</label>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira uma nova senha" />
              </div>
              <div className="form-group form-icon">
                <label className="form-label">Repita a senha criada</label>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira a nova senha criada" />
              </div>
              <label className="form-checkbox">
                <input type="checkbox" />
                Concordo com os termos de uso
              </label>
              
              <input type="submit" value="Salvar" />
            </form>
          </div>
        </section>
      </Fragment>
    );
  }

export default SignUp;
