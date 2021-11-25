import React from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Button,

} from "@chakra-ui/react";

function CallToAction() {

    return (
      <section className="block block-gradient">
        <Stack className="wrapper">
          <h2 className="title">Ainda não estou</h2>
          <p>Gostou ? Agora você precisa entrar na sua conta  para poder se candidatar.</p>
          <Link to="/cadastrar">
            <Button className="btn-default btn-dark">Criar conta</Button>
          </Link>
        </Stack>
      </section>
    );
  
}

export default CallToAction;
