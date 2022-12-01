import * as React from "react";
import styled from "styled-components";

import { device } from "../assets/styles/devices";

import Seo from "../components/seo";
import Layout from "../components/Layout/Layout";
import PageContent from "../components/PageContent/PageContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faHome, faMailBulk} from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

const ContactContent = styled(PageContent)`
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  background: #FFD523;

  font-family: raleway, sans-serif;

  @media only screen and ${device.mobileS} {
    justify-content: center;
  }

  @media only screen and ${device.mobileM} {
    justify-content: center;
  }

  @media only screen and ${device.tablet} {
    justify-content: center;
  }

  @media only screen and ${device.laptop} {
    justify-content: flex-start;
  }

  @media only screen and ${device.laptopL} {
    justify-content: flex-start;
  }

  @media only screen and ${device.desktop} {
    justify-content: flex-start;
  }
  
`;

const ContactTop = styled.section`
  
  width: 100%;
  height: 50%;
  position: relative;

  @media only screen and ${device.mobileS} {
    display: none;
  }

  @media only screen and ${device.mobileM} {
    display: none;
  }

  @media only screen and ${device.tablet} {
    display: none;
  }

  @media only screen and ${device.laptop} {
    display: block;
    height: 50%;
    
    div {
      height: 84%;
      width: 100%;
    }
  }

  @media only screen and ${device.laptopL} {
    display: block;
    height: 50%;
    
    margin-top: 6px;
  }

  @media only screen and ${device.desktop} {
    display: block;
    height: 50%;

    margin-top: 6px;
  }
  
  a {
    display: inline-block;
   
    border-radius: 50% 50% 0 50%;
    background: transparent;
    position: absolute;
 

    @media only screen and ${device.laptop} {
      width: 80px;
      height: 80px;
      top: 15.6%;
      left: 15.5%;
            
    }

    @media only screen and (min-width: 1366px) {
      width: 90px;
      height: 90px;
      top: 13.6%;
      left: 19%;
  }

    @media only screen and ${device.laptopL} {
      width: 98px;
      height: 98px;
      top: 18%;
      left: 18.8%;
      
    }
    
    @media only screen and ${device.desktop} {
      width: 122px;
      height: 122px;
      top: 11.2%;
      left: 19.2%;
    }
`;

const ContactBottom = styled.section`
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 40%;
  position: relative;
  top: -48px;

  @media only screen and ${device.mobileS} {
    position: static;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media only screen and ${device.mobileM} {
    position: static;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media only screen and ${device.tablet} {
    position: static;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media only screen and ${device.laptop} {
    position: relative;
    
    height: 46%;
    top: -82px;
    
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  @media only screen and ${device.laptopL} {
    position: relative;
    
    height: 42%;
    top: -96px;

    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  @media only screen and ${device.desktop} {
    position: relative;

    height: 44%;
    top: -96px;

    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  
`;

const ContactBottomLeft = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  
  background: #2C2E43;
  color: #FFD523;

  box-shadow: 0 0 4px #2C2E43;
  
  @media only screen and ${device.mobileS} {
    width:  90%;
    height: 40%;
    margin: 0;

    font-size: 10px;
  }

  @media only screen and ${device.mobileM} {
    width:  90%;
    height: 40%;
    margin: 0;

    font-size: 12px;
  }

  @media only screen and ${device.tablet} {
    width:  84%;
    height: 38%;
    margin: 0;

    font-size: 14px;
  }

  @media only screen and ${device.laptop} {
    width:  46%;
    height: 100%;

    font-size: 12px;
  }

  @media only screen and ${device.laptopL} {
    width:  42%;
    height: 100%;
    
    margin: 0;

    font-size: 16px;
  }

  @media only screen and ${device.desktop} {
    width:  40%;
    height: 100%;

    margin: 0;

    font-size: 16px;
  }
  
  
  h2, p {
    margin: 0;
    line-height: 1.2;
  }
  
  h2 {
    font-size: 21px;
    margin-bottom: 12px;
    
    @media only screen and ${device.mobileS} {
      font-size: 26px;
      margin-bottom: 8px;
    }

    @media only screen and ${device.mobileM} {
      font-size: 30px;
    }

    @media only screen and ${device.tablet} {
      font-size: 36px;
    }

    @media only screen and ${device.laptop} {
      font-size: 28px;
    }

    @media only screen and ${device.laptopL} {
      font-size: 34px;
    }

    @media only screen and ${device.desktop} {
      font-size: 36px;
    }
  }
  
  p {
    
    @media only screen and ${device.mobileS} {
      font-size: 14px;
      line-height: 1;
    }

    @media only screen and ${device.mobileM} {
      font-size: 20px;
      line-height: 1.2;
    }

    @media only screen and ${device.tablet} {
      font-size: 26px;
    }

    @media only screen and ${device.laptop} {
      font-size: 20px;
    }
    @media only screen and ${device.laptopL} {
      font-size: 24px;
    }

    @media only screen and ${device.desktop} {
      font-size: 26px;
    }

  }
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;

    @media only screen and ${device.mobileS} {
      flex-direction: column;
      justify-content: flex-start;
     
      margin-top: 0;
      line-height: 1;
    }

    @media only screen and ${device.mobileM} {
      flex-direction: column;
      justify-content: flex-start;
     
      margin-top: 0;
      line-height: 1.2;
    }

    @media only screen and ${device.tablet} {
      flex-direction: column;
      justify-content: flex-start;
    
      margin-top: 12px;
    }


    @media only screen and ${device.laptop} {
      flex-direction: column;
      justify-content: flex-start;
    
      margin-top: 12px;
    }

    @media only screen and ${device.laptopL} {
      flex-direction: column;
      justify-content: center;
      
      margin-top: 12px;
    }

    @media only screen and ${device.desktop} {
      flex-direction: column;
      justify-content: center;

      margin-top: 12px;
    }
    
  }
  
  a {
    text-decoration: none;
    color: inherit;
   
    &:visited {
      color: inherit;
    }

    &:hover {
      color: #B2B1B9;
    }

    @media only screen and ${device.mobileS} {
      font-size: 14px;
      
    }

    @media only screen and ${device.mobileM} {
      flex-direction: column;
      justify-content: flex-start;
      font-size: 20px;
    }

    @media only screen and ${device.tablet} {
      font-size: 26px;
    }

    @media only screen and ${device.laptop} {
      font-size: 20px;
    }

    @media only screen and ${device.laptopL} {
      font-size: 24px;
    }

    @media only screen and ${device.desktop} {
      font-size: 26px;
    }
    
  }

  @media only screen and (max-width: 1023px) and (orientation: landscape) {

    height: 46%;
    font-size: 12px;

    h1,h2,p, a {
      font-size: 20px;
    }

  }
`;

const ContactBottomRight = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 12px;

  box-shadow: 0 0 4px #2C2E43;
  
  background: #2C2E43;
  color: #FFD523;
  
  font-size: 12px;

  @media only screen and ${device.mobileS} {
    width:  90%;
    height: 40%;
    margin: 0;

    font-size: 10px;
  }

  @media only screen and ${device.mobileM} {
    width:  90%;
    height: 40%;
    margin: 0;

    font-size: 12px;
  }

  @media only screen and ${device.tablet} {
    width:  84%;
    height: 38%;
    margin: 0;

    font-size: 14px;
  }

  @media only screen and ${device.laptop} {
    width:  46%;
    height: 100%;
    margin: 0;

    font-size: 12px;
  }

  @media only screen and ${device.laptopL} {
    width:  42%;
    height: 100%;
    
    margin: 0;

    font-size: 16px;
  }

  @media only screen and ${device.desktop} {
    width:  40%;
    height: 100%;
    
    margin: 0;

    font-size: 16px;
  }

  h2, p {
    margin: 0;
    line-height: 1.2;
  }

  h2 {
    margin-bottom: 12px;

    @media only screen and ${device.mobileS} {
      font-size: 24px;
      margin-bottom: 8px;
    }

    @media only screen and ${device.mobileM} {
      font-size: 30px;
    }

    @media only screen and ${device.tablet} {
      font-size: 36px;
    }

    @media only screen and ${device.laptop} {
      font-size: 28px;
    }
    
    @media only screen and ${device.laptopL} {
      font-size: 34px;
    }
    
    @media only screen and ${device.desktop} {
      font-size: 36px;
    }
  }

  p {

    @media only screen and ${device.mobileS} {
      font-size: 14px;
      width: 84%;
      line-height: 1;

    }

    @media only screen and ${device.mobileM} {
      font-size: 20px;
      line-height: 1.2;
    }

    @media only screen and ${device.tablet} {
      font-size: 26px;
    }
    
    @media only screen and ${device.laptop} {
      font-size: 20px;
    }

    @media only screen and ${device.laptopL} {
      font-size: 24px;
    }

    @media only screen and ${device.desktop} {
      font-size: 26px;

    }
  }

  @media only screen and (max-width: 1023px) and (orientation: landscape) {

    height: 46%;
    font-size: 12px;

    h1,h2,p, a {
      font-size: 20px;
    }

  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  
  margin-bottom: 16px;

`;


const Contact = () => (
  <Layout>
    <Seo title="Domirent" />
    <ContactContent>
      <ContactTop>
        <StaticImage
          src="../assets/domirent-kontakt-baner.png"
          alt="banner"
          layout="constrained"
          placeholder="tracedSVG"
        />
        <a href="https://goo.gl/maps/XL5GHTmdqz5BHHsa7" target="_blank" rel="noopener noreferrer"> </a>
      </ContactTop>
      <ContactBottom>
        <ContactBottomLeft>
          <StyledIcon icon={faPhoneAlt} size="3x"/>
          <h2>Zadzwoń lub napisz</h2>
          <p>DOMIRENT Dominik Pakosz</p>
          <p>tel.: 697 890 002</p>
          <div>
            <p> <FontAwesomeIcon icon={faMailBulk} size="1x"/>&nbsp;domirent1@gmail.com&nbsp;</p>
            <a href="https://www.facebook.com/domirentprzysucha" target="_blank" rel="noopener noreferrer">
              lub na facebooku&nbsp;
              <FontAwesomeIcon icon={faFacebook} size="1x"/>
            </a>
          </div>
        </ContactBottomLeft>
        <ContactBottomRight>
          <StyledIcon icon={faHome} size="3x"/>
          <h2>Odwiedź nas</h2>
          <p>ul. Świętokrzyska 35e,</p>
          <p>26-400 Przysucha</p>
          <p>(budynek hurtowni materiałów budowlanych MIROBUD)</p>
        </ContactBottomRight>
      </ContactBottom>
    </ContactContent>

  </Layout>
)

export default Contact;
