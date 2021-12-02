import React from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Button,
  FormLabel,
} from "@chakra-ui/react";

function CallToAction() {

    return (
      <section className="block block-gradient">
        <Stack className="wrapper">
          <FormLabel as="h2" className="title">Ainda não estou</FormLabel>
          <p>Gostou ? Agora você precisa entrar na sua conta  para poder se candidatar.</p>
          <Link to="/cadastrar">
            <Button className="btn-default btn-dark">Criar conta</Button>
          </Link>
          <Link to="/formulario">
            <Button className="btn-default btn-dark">Formulario</Button>
          </Link>
        </Stack>
      </section>
    );
  
}

export default CallToAction;
