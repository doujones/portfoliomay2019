import React from 'react';
import styled from 'styled-components'
import { setRem,setColor,media} from "../../styles";

const Footer = () => {
  return (
        <footer className="footer text-center">
        <div className="container">
        <p className="Copyright 2019 William Boswell"></p>
        </div>
        </footer>
      )
    };

export default styled(Footer)`
background: ${setColor.mainBlack};
padding: ${setRem(64)} 0;
${media.desktop`
  width:100vw;
  max-width:1170px;
  `};
  ${media.large`
    grid-template-columns:repeat(3,1fr);
  `};
  
`