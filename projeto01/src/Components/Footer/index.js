import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className="footer-link">
              None
            </Link>
            <Link to="/" className="footer-link">
              None
            </Link>
          </Stack>
        </Stack>
      </footer>
    );
  
}

export default Footer;
