import React,{useEffect,useState} from 'react';
import HeaderAction from "./HeaderAction";
import "./index.css";
import "../../App.css";
import axios from 'axios';

import { 
    Stack,
    Input,
    Text,

 } from "@chakra-ui/react"

function Form(){
    const [estados, setEstados] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5050/estados').then(response => {
            setEstados(response.data);
        })
    }, []);

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:5051/cadastro', campos).then(response => {
            alert(response.data.dados.length + ' cadastros!');
        })
    }

    const [campos, setCampos] = useState({
        txtNome: '',
        txtIdade: 0,
        txtEmail: '',
        txtGenero: ""
    });
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }
    
    return (
        <div>
            <HeaderAction />
            <section className="block">
                <Stack className="wrapper">
                    <h2 className="title">Sobre você</h2>
                    <form onSubmit={handleFormSubmit} className="section-sign-in">
                        <Stack>
                            <legend>
                                <h2>Dados de Cadastro</h2>
                            </legend>

                            <Stack className="form-group form-icon">
                                <Text className="form-label">Nome Completo:
                                <Input type="text" name="txtNome" id="txtNome" className="form-input" placeholder="Your Name" onChange={handleInputChange} />
                                </Text>
                            </Stack>

                            <Stack className="form-group form-icon">
                                <Text className="form-label">Email:
                                <Input type="text" name="txtEmail" id="txtEmail" className="form-input" placeholder="Your Email" onChange={handleInputChange} />
                                </Text>
                            </Stack>
                            
                            
                            <Stack className="form-group form-icon">
                                <Text className="form-label">Idade:
                                    <Input type="number" name="txtIdade" id="txtIdade" className="form-input" placeholder="Your Years" onChange={handleInputChange}/>
                                </Text>
                            </Stack>
                            
                            <Stack className="form-group form-icon">
                                <Text className="form-label">Gênero:
                                    <select name="txtGenero" id="txtGenero" className="form-input"onChange={handleInputChange}>
                                        <option value="0">Selecione uma opção</option>
                                            {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.genero}</option>))}
                                    </select>
                                </Text>
                            </Stack>

                            <Stack>
                                <Text className="form-group form-icon">Nome de Usuário:
                                <Input type="text" name="txtLogin" id="txtLogin" className="form-input" placeholder="Your User Name" onChange={handleInputChange} />
                                </Text>
                            </Stack>

                            <Stack>
                                <Text className="form-group form-icon">Senha:
                                <Input type="password" name="txtPass" id="txtPass" className="form-input"placeholder="Your Password"onChange={handleInputChange} />
                                </Text>
                            </Stack>
                            <input type="submit" value="Salvar" />
                        </Stack>
                    </form>
                </Stack>
                
            </section>
            </div>
    )
}

export default Form;