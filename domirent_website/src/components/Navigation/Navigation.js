import React from "react"
import { Link } from "gatsby";
import styled from "styled-components";

import { device } from "../../assets/styles/devices"

const sites = {
  home: "/",
  about: "/about",
  prices: "/prices-mdx",
  contact: "/contact",
  classTest: "test"
}

const Menu = styled.ul`
  color: #2C2E43;
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px 0;
  margin: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  list-style: none;
  font-family: raleway, sans-serif;

  background-color: #FFD523;

  @media only screen and ${device.mobileS} {
    font-size: 12px;
    justify-content: space-evenly;
    align-items: center;

    li {
      height: 14px;
      
    }

  }

  @media only screen and ${device.mobileM} {
    font-size: 14px;
    justify-content: space-evenly;

    li {
      height: 16px;
    }

  }

  @media only screen and ${device.tablet} {
    font-size: 24px;
    height: 54px;
    justify-content: space-evenly;
    padding: 16px 0;

    li {
      height: 24px;
    }

  }

  @media only screen and ${device.laptop} {
    font-size: 20px;
    height: 54px;
    justify-content: flex-end;
    padding-right: 10px;

  }

  @media only screen and ${device.laptopL} {
    font-size: 26px;
    height: 54px;
    justify-content: flex-end;

  }

  @media only screen and ${device.desktop} {
    font-size: 28px;
    height: 54px;
    justify-content: flex-end;

  }
  
  
  a {
    text-decoration: none;
    color: inherit;
    padding: 20px;
    margin-right: 6px;

    @media only screen and ${device.mobileS} {
     padding: 14px;  
     margin-right: 0;

    }

    @media only screen and ${device.mobileM} {
      padding: 14px;
      margin-right: 0;


    }

    @media only screen and ${device.tablet} {
      padding: 22px;
      margin-right: 0;


    }

    @media only screen and ${device.laptop} {
      padding: 18px;
      

    }

    @media only screen and ${device.laptopL} {
      padding: 22px;

    }

    @media only screen and ${device.desktop} {
      padding: 20px;

    }
    
    &:hover {
      color: #B2B1B9;

      @media only screen and ${device.mobileS} {
        color: #2C2E43;

      }

      @media only screen and ${device.mobileM} {
        color: #2C2E43;
        
      }

      @media only screen and ${device.tablet} {
        color: #2C2E43;

      }

      @media only screen and ${device.laptop} {
        color: #B2B1B9;

      }

      @media only screen and ${device.laptopL} {
        color: #B2B1B9;

      }

      @media only screen and ${device.desktop} {
        color: #B2B1B9;

      }
    }
  }

  a.active {
    background-color: #2C2E43;
    color: #FFD523;
    border-radius: 8px;
    padding: 16px;

    @media only screen and ${device.mobileS} {
      padding: 14px;
      
    }

    @media only screen and ${device.mobileS} {
      padding: 14px;

    }

    @media only screen and ${device.mobileM} {
      padding: 14px;

    }

    @media only screen and ${device.tablet} {
      padding: 22px;

    }

    @media only screen and ${device.laptop} {
      padding: 18px;

    }

    @media only screen and ${device.laptopL} {
      padding: 22px;

    }

    @media only screen and ${device.desktop} {
      padding: 20px;

    }
  }
`

const Navigation = () => {

  return (
    <Menu>
      <li>
        <Link to={sites.home} activeClassName={"active"}>Start</Link> <br />
      </li>
      <li>
        <Link to={sites.about} activeClassName={"active"}>O nas</Link> <br />
      </li>
      <li>
        <Link to={sites.prices} activeClassName={"active"}>Cennik</Link> <br />
      </li>
      <li>
        <Link to={sites.contact} activeClassName={"active"}>Kontakt</Link> <br />
      </li>
    </Menu>
  )
};

export  default Navigation;