import React, {  Fragment,useState,useEffect } from "react";
import HeaderAction from "./HeaderAction";
import "./index.css";
import "../../App.css";
import axios from 'axios';

import { 
  Stack,
  Input,
  Text,
  Heading,
  Select,

} from "@chakra-ui/react"

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
          <Stack className="wrapper">
            <h2 className="title">Sobre você</h2>

            
            <form onSubmit={handleFormSubmit} className="section-sign-in">
              <Stack className="form-group form-icon">
                <Text className="form-label">Nome completo</Text>
                
                <Input type="text" name="txtNome" id="txtNome" className="form-input" placeholder="Insira seu nome" onChange={handleInputChange}/>
              </Stack>
              <Stack className="form-group">
                <Text className="form-label">E-mail</Text>
                <Input type="text" name="txtEmail" id="txtEmail" className="form-input" placeholder="Insira o seu e-mail" onChange={handleInputChange}/>
              </Stack>
              <Stack className="form-group">
                <Text className="form-label">Celular</Text>
                <Input type="phone" name="txtPhone" id="txtPhone"className="form-input" placeholder="Insira o número com o DDD" onChange={handleInputChange}/>
              </Stack>
              <Stack className="form-group">
                <Text className="form-label">Gênero</Text>
                <Select name="txtGenero" id="txtGenero" className="form-input"onChange={handleInputChange}>
                  <option value="0">Selecione uma opção</option>
                    {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.genero}</option>))}
                </Select>
              </Stack>
              <Stack className="form-group">
                <Text className="form-label">Nascimento</Text>
                <Input type="text" className="form-input" placeholder="Insira a data" />
              </Stack>
              <Stack className="form-group">
                <Text className="form-label">Escolaridade</Text>
                
              </Stack>
              <Stack className="form-group">
                <Text className="form-label">CEP</Text>
                <Input type="text" className="form-input" placeholder="Insira seu CEP" />
              </Stack>
              <Text className="form-checkbox">
                <Input type="checkbox" />
                Sou uma pessoa com deficiência
              </Text>
            </form>
          </Stack>
        </section>
        <section className="block">
          <Stack className="wrapper">
            <Heading as="h2" className="title">Sua senha </Heading>
            <p>A senha deve possuir no mínimo 6 caracteres</p>
            <form className="section-sign-in">
              <Stack className="form-group form-icon">
                <Text className="form-label">Crie uma nova senha</Text>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <Input type="text" className="form-input form-icon-lock" placeholder="Insira uma nova senha" />
              </Stack>
              <Stack className="form-group form-icon">
                <Text className="form-label">Repita a senha criada</Text>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <Input type="text" className="form-input form-icon-lock" placeholder="Insira a nova senha criada" />
              </Stack>
              <Text className="form-checkbox">
                <Input type="checkbox" />
                Concordo com os termos de uso
              </Text>
              
              <Input type="submit" value="Salvar" />
            </form>
          </Stack>
        </section>
      </Fragment>
    );
  }

export default SignUp;
