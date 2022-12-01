import React from "react";
import styled from "styled-components";
import { device } from "../../assets/styles/devices"

const PageContainer = styled.article`
  
  width: 100%;
  display: flex;
  background-color: #FFD523;
  
  padding: 12px 0;

  @media only screen and ${device.mobileS} {

    height: calc(100vh  - 218px);
    align-items: center;
    flex-direction: column-reverse;

  }

  @media only screen and ${device.mobileM} and (orientation: portrait){

    height: calc(100vh  - 220px);
    align-items: center;
    flex-direction: column-reverse;

  }

  @media only screen and ${device.tablet} and (orientation: portrait){

    height: calc(100vh  - 310px);
    align-items: center;
    flex-direction: column-reverse;

  }

  @media only screen and ${device.laptop} and (orientation: landscape){

    height: calc(100vh  - 310px);
    align-items: center;
    flex-direction: row;

  }

  @media only screen and ${device.laptopL} and (orientation: landscape){

    height: calc(100vh  - 310px);
    align-items: center;
    flex-direction: row;

  }

  @media only screen and ${device.desktop} and (orientation: landscape){

    height: calc(100vh  - 310px);
    align-items: center;
    flex-direction: row;

  }

  @media only screen and (max-width: 1023px) and (orientation: landscape) {
    height: 100vh;
    
  }
  
  @media only screen and ${device.laptop} and (orientation: portrait) {
    height: 100vh;
  }

  
`

const PageContent = ({className, children}) => {

  return  (
    <PageContainer className={className}>
      {children}
    </PageContainer>
  )
}

export default PageContent;