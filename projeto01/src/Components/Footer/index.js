import React from "react";

import "./footer.css";
import {
  Stack,


} from "@chakra-ui/react";

function Footer () {

    return (
      <footer className="footer">
        <Stack className="footer-wrapper">
          
          <span className="footer-copy">&copy;&nbsp;Lucas Vidotto2021</span>
          <Stack className="footer-navbar">
            <a href="/" className="footer-link">
              Termos de uso
            </a>
            <a href="/" className="footer-link">
              Política de privacidade
            </a>
          </Stack>
        </Stack>
      </footer>
    );
  
}

export default Footer;
