import * as React from "react"
import styled from "styled-components";

import { device } from "../assets/styles/devices"
import aboutParagraphText from "../data/info/about-informations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb} from "@fortawesome/free-solid-svg-icons"


import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

import PageContent from "../components/PageContent/PageContent"
import { graphql } from "gatsby"

const AboutContent = styled(PageContent)`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: raleway, sans-serif;
`

const AboutTop = styled.header`

  width: 100%;
  height: 40%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 40px 0;
  
  color: #FFD523;
  background-color: #2C2E43;

  @media only screen and ${device.mobileS} {
    height: 12%;
  }

  @media only screen and ${device.mobileM} {
    height: 30%;
  }

  @media only screen and ${device.tablet} {
    height: 40%;
  }

  @media only screen and ${device.laptop} {
    height: 35%;
  }

  @media only screen and ${device.laptopL} {
    height: 35%;
  }

  @media only screen and ${device.desktop} {
    height: 35%;
  }


  h1 {
    
    margin: 0;
    text-transform: uppercase;

    @media only screen and ${device.mobileS} {
      font-size: 36px;
    
    }

    @media only screen and ${device.mobileM} {
      font-size: 38px;

    }

    @media only screen and ${device.tablet} {
      font-size: 56px;

    }

    @media only screen and ${device.laptop} {
      font-size: 48px;

    }

    @media only screen and ${device.laptopL} {
      font-size: 56px;

    }

    @media only screen and ${device.desktop} {
      font-size: 56px;

    }
  }
  
  p {
    font-size: 32px;
    margin: 0;

    @media only screen and ${device.mobileS} {
      font-size: 24px;

    }

    @media only screen and ${device.mobileM} {
      font-size: 26px;

    }

    @media only screen and ${device.tablet} {
      font-size: 34px;

    }

    @media only screen and ${device.laptop} {
      font-size: 28px;
      margin-top: 12px;

    }

    @media only screen and ${device.laptopL} {
      font-size: 34px;
      margin-top: 12px;

    }

    @media only screen and ${device.desktop} {
      font-size: 34px;
      margin-top: 12px;

    }
  }

`

const AboutBottom = styled.section`
  
  position: relative;
  
  width: 100%;
  height: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-line;
  
  background-color: #FFD523;
  color: #2C2E43;

  @media only screen and ${device.mobileS} {
    height: 80%;
  }

  @media only screen and ${device.mobileM} {
    height: 80%;
  }

  @media only screen and ${device.tablet} {
    height: 70%;
  }

  @media only screen and ${device.laptop} {
    height: 65%;
  }

  @media only screen and ${device.laptopL} {
    height: 65%;
  }

  @media only screen and ${device.desktop} {
    height: 65%;
  }
  
  div {

    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFD523;
    border-radius: 50%;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);

    @media only screen and ${device.mobileS} {
      width: 60px;
      height: 60px;
      font-size: 10px;
      top: -30px;

    }

    @media only screen and ${device.mobileM} {
      width: 60px;
      height: 60px;
      font-size: 12px;
      top: -30px;

    }

    @media only screen and ${device.tablet} {
      width: 70px;
      height: 70px;
      font-size: 14px;
      top: -35px;

    }

    @media only screen and ${device.laptop} {
      width: 70px;
      height: 70px;
      font-size: 14px;
      top: -35px;

    }

    @media only screen and ${device.laptopL} {
      width: 80px;
      height: 80px;
      font-size: 18px;
      top: -40px;

    }

    @media only screen and ${device.desktop} {
      width: 100px;
      height: 100px;
      font-size: 20px;
      top: -50px;

    }
  }

  p {
    width: 85%;
    text-align: center;
    line-height: 1.4;
    font-size: 20px;

    @media only screen and ${device.mobileS} {
      width: 90%;
      line-height: 1.2;
      font-size: 14px;
      text-align: justify;
      margin-top: 32px;

    }

    @media only screen and ${device.mobileM} {
      width: 90%;
      line-height: 1.2;
      font-size: 14px;
      text-align: justify;
    }

    @media only screen and ${device.tablet} {
      width: 92%;
      line-height: 1.2;
      font-size: 14px;
      text-align: justify;

    }

    @media only screen and ${device.laptop} {
      width: 90%;
      line-height: 1.2;
      font-size: 20px;
      text-align: justify;

    }

    @media only screen and ${device.laptopL} {
      width: 90%;
      line-height: 1.2;
      font-size: 24px;
      text-align: justify;

    }

    @media only screen and ${device.desktop} {
      width: 90%;
      line-height: 1.2;
      font-size: 28px;
      text-align: justify;

    }
    
  }

`

const About = () => (
  <Layout>
    <Seo title="O nas" />
    <AboutContent>
      <AboutTop>
        <h1>Domirent</h1>
        <p>Dominik Pakosz</p>
      </AboutTop>
      <AboutBottom>
        <div>
          <FontAwesomeIcon icon={faLightbulb} size="3x"/>
        </div>
        <p>{aboutParagraphText}</p>
      </AboutBottom>
    </AboutContent>
  </Layout>
)


export const query = graphql`
    {
        allMdx {
            nodes {
                frontmatter {
                    price
                    name
                    additionalInfo
                    additionalPrice
                }
            }
        }
    }
`

export default About;
