import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import PageContent from "../PageContent/PageContent";
import Seo from "../seo";

import { device } from "../../assets/styles/devices";

const sites = {
  home: "/",
  about: "/about",
  prices: "/prices-mdx",
  contact: "/contact"
}


const StartContentLeft = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 45%;
  height: 50%;
  color: #2C2E43;
  
  line-height: 1.4;
  font-family: raleway, sans-serif;
  
  
  padding-right: 30px;
  margin-left: 17px;

  @media only screen and ${device.mobileS} {
    width: 100%;
    padding-right: 0;
    margin-left: 0;
    align-items: center;
    justify-content: center;

    line-height: 1.2;
    
  }

  @media only screen and ${device.mobileM} {
    width: 100%;
    padding-right: 0;
    margin-left: 0;
    align-items: center;
    justify-content: center;

  }

  @media only screen and ${device.tablet} {
    width: 100%;
    padding-right: 0;
    margin-left: 0;
    align-items: center;
    justify-content: center;
    padding-bottom: 12px;

  }

  @media only screen and ${device.laptop} {
    width: 45%;
    padding-right: 0;
    margin-left: 0;
    align-items: flex-end;
    justify-content: center;

  }

  @media only screen and ${device.laptopL} {
    width: 40%;
    padding-right: 0;
    margin-left: 0;
    align-items: flex-end;
    justify-content: center;

  }

  @media only screen and ${device.desktop} {
    width: 45%;
    padding-right: 0;
    margin-left: 0;
    align-items: flex-end;
    justify-content: center;

  }
  
  
  
  h1 {
    font-weight: bold;

    @media only screen and ${device.mobileS} {
      font-size: 56px;
      margin: 0;
      
    }

    @media only screen and ${device.mobileM} {
      font-size: 58px;
      margin: 0;

    }

    @media only screen and ${device.tablet} {
      font-size: 78px;
      margin: 0;

    }

    @media only screen and ${device.laptop} {
      font-size: 76px;
      margin-right: 24px;

    }

    @media only screen and ${device.laptopL} {
      font-size: 86px;
      margin-right: 24px;

    }

    @media only screen and ${device.desktop} {
      font-size: 92px;
      margin-right: 42px;

    }
  }
  
  h2 {
    @media only screen and ${device.mobileS} {  
      font-size: 26px;
      margin: 0;
    }

    @media only screen and ${device.mobileM} {
      font-size: 28px;
      margin: 0;
    }

    @media only screen and ${device.tablet} {
      font-size: 36px;
      margin: 16px;
    }

    @media only screen and ${device.laptop} {
      font-size: 36px;
      margin: 0 24px 0 0;
      
    }

    @media only screen and ${device.laptopL} {
      font-size: 36px;
      margin: 0 24px 0 0;

    }

    @media only screen and ${device.desktop} {
      font-size: 42px;
      margin: 0 42px 0 0;

    }
  }
  
  p {

    @media only screen and ${device.mobileS} {
      font-size: 20px;
      margin: 8px 0;
      text-align: center;

    }

    @media only screen and ${device.mobileM} {
      font-size: 20px;
      margin: 8px 0;
      text-align: center;

    }

    @media only screen and ${device.tablet} {
      font-size: 28px;
      margin: 12px 0;
      text-align: center;
      max-width: 84%;

    }

    @media only screen and ${device.laptop} {
      font-size: 26px;
      margin-right: 24px;
      text-align: end;
      max-width: 100%;
    
    }

    @media only screen and ${device.laptopL} {
      font-size: 26px;
      margin-right: 24px;
      text-align: end;
      max-width: 100%;

    }

    @media only screen and ${device.desktop} {
      font-size: 28px;
      margin-right: 42px;
      text-align: end;
      max-width: 50%;

    }
  }
  
  a {
    padding: 14px 12px;
    
    text-decoration: none;
    color: inherit;
    display: inline-block;
    
    border: 1px solid #2C2E43;
    border-radius: 12px;

    @media only screen and ${device.mobileS} {
      margin: 0;
      background: #2C2E43;
      color: #FFD523;
      font-size: 24px;
      width: 84%;
      text-align: center;
    }

    @media only screen and ${device.mobileM} {
      margin: 0;
      background: #2C2E43;
      color: #FFD523;
      font-size: 24px;
      width: 84%;
      text-align: center;
    }

    @media only screen and ${device.tablet} {
      margin-top: 4px;
      background: #2C2E43;
      color: #FFD523;
      font-size: 36px;
      width: 84%;
      text-align: center;
    }

    @media only screen and ${device.laptop} {
      margin: 4px 24px 0 0;
      background: #FFD523;
      color: #2C2E43;
      font-size: 28px;
      width: 50%;
      text-align: center;
    }

    @media only screen and ${device.laptopL} {
      margin: 36px 24px 0 0;
      background: #FFD523;
      color: #2C2E43;
      font-size: 28px;
      width: 50%;
      text-align: center;
    }

    @media only screen and ${device.desktop} {
      margin: 36px 42px 0 0;
      background: #FFD523;
      color: #2C2E43;
      font-size: 36px;
      width: 52%;
      text-align: center;
    }
    
    &:hover {
      background: #2C2E43;
      color: #FFD523;
    }

`

const StartContentRight = styled.section`
  display: flex;
  

  @media only screen and ${device.mobileS} {
    width: 100%;
    height: 50%;
    padding-right: 0;
    margin: 0;
    align-items: center;
    justify-content: center;

  }

  @media only screen and ${device.mobileM} {
    width: 100%;
    height: 50%;
    padding-right: 0;
    margin: 16px 0;
    align-items: center;
    justify-content: center;

  }

  @media only screen and ${device.tablet} {
    width: 100%;
    height: 50%;
    padding-right: 0;
    margin: 0;
    align-items: center;
    justify-content: center;

  }

  @media only screen and ${device.laptop} {
    width: 55%;
    height: 100%;
    padding-right: 0;
    margin: 0;
    align-items: center;
    justify-content: center;

  }

  @media only screen and ${device.laptopL} {
    width: 60%;
    height: 100%;
    padding-right: 0;
    margin: 0;
    align-items: center;
    justify-content: center;

  }

  @media only screen and ${device.desktop} {
    width: 55%;
    height: 100%;
    padding-right: 0;
    margin: 0;
    align-items: center;
    justify-content: center;

  }

  @media only screen and (max-width: 1023px) and (orientation: landscape) {
    display: none;

  }
  
  div {
    width: 94%;

    @media only screen and ${device.mobileS} {
     height: 88%;
      
      border-radius: 15px;
      box-shadow: 0 0 12px #595260;
      margin: 6px 0;

      img {
        border-radius: 15px;
      }

    }

    @media only screen and ${device.mobileM} {
      height: 88%;

      border-radius: 15px;
      box-shadow: 0 0 12px #595260;
      margin: 6px 0;
      
      img {
        border-radius: 15px;
      }
      
   }

    @media only screen and ${device.tablet} {
      height: 95%;
      
      border-radius: 15px;
      box-shadow: 0 0 24px #595260;

      img {
        border-radius: 15px;
      }

    }

    @media only screen and ${device.laptop} {
      width: 94%;
      height: 84%;

      border-radius: 15px;
      box-shadow: 0 0 24px #595260;
      
      margin: 0;

      img {
        border-radius: 15px;
      }

    }

    @media only screen and ${device.laptopL} {
      width: 94%;
      height: 84%;

      border-radius: 15px;
      box-shadow: 0 0 24px #595260;

      margin: 0;

      img {
        border-radius: 15px;
      }

    }

    @media only screen and ${device.desktop} {
      width: 94%;
      height: 88%;

      border-radius: 15px;
      box-shadow: 0 0 32px #595260;

      margin: 0;

      img {
        border-radius: 15px;
      }

    }
    
`

const Hero = () => {

  return (
      <PageContent>
        <Seo title="Domirent" />
        <StartContentLeft>
          <h1>DOMIRENT</h1>
          <h2>Dominik Pakosz</h2>
          <p>Wypożyczalnia narzędzi i sprzętu budowlanego w Przysusze</p>
          <Link to={sites.prices}>Sprawdź</Link>
        </StartContentLeft>
        <StartContentRight>
          <StaticImage
            src="../../assets/background2.jpg"
            alt="hero"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </StartContentRight>
      </PageContent>
  )
}

export default Hero;