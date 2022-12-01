import React from "react";
import styled from "styled-components"

import { device } from "../../assets/styles/devices"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faCheckDouble, faHardHat, faTools } from "@fortawesome/free-solid-svg-icons"

const BottomTabsContent = styled.footer`
  
  background-color: #2C2E43;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and ${device.mobileS} {
    
    height: 140px;
  
  }

  @media only screen and ${device.mobileM} {

    height: 140px;

  }

  @media only screen and ${device.tablet} {

    height: 200px;

  }

  @media only screen and ${device.laptop} {

    height: 200px;

  }

  @media only screen and ${device.laptopL} {

    height: 200px;

  }

  @media only screen and ${device.desktop} {

    height: 200px;

  }
  
`
const BottomTab = styled.div`
  width: 23%;
 
  color: #2C2E43;
  font-family: raleway, sans-serif;
  
  background-color: #FFD523;
  border-radius: 12px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   

  @media only screen and ${device.mobileS} {

    height: 120px;
    font-size: 12px;
    
    h2 {
      text-align: center;
      font-size: 12px;

      margin-bottom: 0;
    }
  }

  @media only screen and ${device.mobileM} {

    height: 120px;
    font-size: 12px;

    h2 {
      text-align: center;
      font-size: 12px;

      margin-bottom: 0;
    }
  }

  @media only screen and ${device.tablet} {

    height: 85%;
    font-size: 22px;

    h2 {
      text-align: center;
      font-size: 22px;
      
      margin-bottom: 0;
      
    }
  }

  @media only screen and ${device.laptop} {

    height: 85%;
    font-size: 22px;

    h2 {
      text-align: center;
      font-size: 22px;

      margin-bottom: 0;

    }
  }

  @media only screen and ${device.laptopL} {

    height: 85%;
    font-size: 22px;

    h2 {
      text-align: center;
      font-size: 22px;

      margin-bottom: 0;

    }
  }

  @media only screen and ${device.desktop} {

    height: 85%;
    font-size: 24px;

    h2 {
      text-align: center;
      font-size: 24px;

      margin-bottom: 0;

    }
  }
  
`

const BottomTabs = () => {

  return (
    <BottomTabsContent>
      <BottomTab>
        <FontAwesomeIcon icon={faTools} size="2x"/>
        <h2>SZEROKI WYBÓR</h2>
      </BottomTab>
      <BottomTab>
        <FontAwesomeIcon icon={faHardHat} size="2x"/>
        <h2>FACHOWE DORADZTWO</h2>
      </BottomTab>
      <BottomTab>
        <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>
        <h2>DOGODNE TERMINY</h2>
      </BottomTab>
      <BottomTab>
        <FontAwesomeIcon icon={faCheckDouble} size="2x"/>
        <h2>WYSOKA JAKOŚĆ</h2>
      </BottomTab>
    </BottomTabsContent>
  )
}

export default BottomTabs;