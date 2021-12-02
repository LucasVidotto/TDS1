import React from "react";
import { Link } from "react-router-dom";
import {
  Stack,

} from "@chakra-ui/react";
import "./header.css";


function Header() {

    return (
      <header className="header">
        <Stack className="header-wrapper">
       
          <Link to="/">
            
          </Link>
        </Stack>
      </header>
    );

}

export default Header;
