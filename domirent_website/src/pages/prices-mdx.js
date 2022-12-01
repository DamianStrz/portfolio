import * as React from "react";
import styled from "styled-components";

import Layout from "../components/Layout/Layout";
import Seo from "../components/seo";
import PageContent from "../components/PageContent/PageContent";

import { graphql } from "gatsby";
import { device } from "../assets/styles/devices";


const PricesContent = styled(PageContent)`
  
  display: flex;
  justify-content: center;
  
  overflow: scroll;
  scroll-margin-block-end: 0;


  ::-webkit-scrollbar {
    background-color: #FFD523;
    width: 18px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2C2E43;
  }

  ::-webkit-scrollbar-corner {
    background-color: #FFD523;
  }

  font-family: raleway, sans-serif;

  }
  
  @media only screen and ${device.mobileS} {

    ::-webkit-scrollbar {
      width: 4px;
      
    }
    
    flex-direction: column;
    justify-content: flex-start;
    
    
  }

  @media only screen and ${device.mobileM} {

    ::-webkit-scrollbar {
      width: 4px;
      
    }

    flex-direction: column;
    justify-content: flex-start
  }

  @media only screen and ${device.tablet} {

    ::-webkit-scrollbar {
      width: 6px;
      
    }

    flex-direction: column;
    justify-content: flex-start

  }

  @media only screen and ${device.laptop} {

    ::-webkit-scrollbar {
      width: 12px;

    }

    flex-direction: column;
    justify-content: flex-start

  }

  @media only screen and ${device.laptopL} {

    ::-webkit-scrollbar {
      width: 14px;

    }

    flex-direction: column;
    justify-content: flex-start

  }

  @media only screen and ${device.desktop} {

    ::-webkit-scrollbar {
      width: 16px;

    }

    flex-direction: column;
    justify-content: flex-start

  }

`;

const PricesBoard = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  
  padding-bottom: 8px;
  
  @media only screen and ${device.mobileS} {
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 96%;
    
  }

  @media only screen and ${device.mobileM} {

    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 96%;

  }

  @media only screen and ${device.tablet} {

    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 96%;

  }

  @media only screen and ${device.laptop} {

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 96%;

  }

  @media only screen and ${device.laptopL} {

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 98%;

  }

  @media only screen and ${device.desktop} {

    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;


  }
`;

const PricesTab = styled.div`
  
  width: 31%;
  height: 194px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  line-height: 2;
  
  border: 1px solid #2C2E43;
  border-radius: 12px;
  color: #2C2E43;
  background-color: #FFD523;


  @media only screen and ${device.mobileS} {
    width: 94%;
    height: 90px;
    
    flex-direction: row;
    justify-content: space-around;
    
    margin: 4px 0;

  }

  @media only screen and ${device.mobileM} {
    width: 94%;
    height: 84px;

    flex-direction: row;
    justify-content: space-around;

    margin: 4px 0;

  }

  @media only screen and ${device.tablet} {
    width: 94%;
    height: 100px;

    flex-direction: row;
    justify-content: space-around;

    margin: 6px 0;

  }

  @media only screen and ${device.laptop} {
    width: 30%;
    height: 160px;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    margin: 6px 0;
    

  }

  @media only screen and ${device.laptopL} {
    width: 30%;
    height: 170px;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    margin: 8px 0;
    
  }


  @media only screen and ${device.desktop} {
    width: 23%;
    height: 200px;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    margin: 8px 12px;
    

  }
  
  :hover {
    color: #2C2E43;
    background-color: #ffda33;
    
    box-shadow: inset 0 0 6px 2px #2C2E43;
    
    transition-duration: 0.3s;

    @media only screen and ${device.mobileS} {
      color: #2C2E43;
      background-color: #FFD523;
      box-shadow: none;
      transition-duration: unset;

    }

    @media only screen and ${device.mobileM} {
      color: #2C2E43;
      background-color: #FFD523;
      box-shadow: none;
      transition-duration: unset;

    }

    @media only screen and ${device.tablet} {
      color: #2C2E43;
      background-color: #FFD523;
      box-shadow: none;
      transition-duration: unset;

    }

    @media only screen and ${device.laptop} {
      color: #2C2E43;
      background-color: #ffda33;

      box-shadow: inset 0 0 6px 2px #2C2E43;

      transition-duration: 0.3s;


    }

    @media only screen and ${device.laptopL} {
      color: #2C2E43;
      background-color: #ffda33;

      box-shadow: inset 0 0 6px 2px #2C2E43;

      transition-duration: 0.3s;
      
    }

    @media only screen and ${device.desktop} {
      color: #2C2E43;
      background-color: #ffda33;

      box-shadow: inset 0 0 6px 2px #2C2E43;

      transition-duration: 0.4s;

    }
    
    h3 {

      @media only screen and ${device.mobileS} {
        font-size: 14px;
        transition-duration: unset;
      }

      @media only screen and ${device.mobileM} {
        font-size: 16px;
        transition-duration: unset;
      }

      @media only screen and ${device.tablet} {
        font-size: 22px;
        transition-duration: unset;
        
      }

      @media only screen and ${device.laptop} {
        font-size: 24px;
        transition-duration: 0.5s;

      }

      @media only screen and ${device.laptopL} {
        font-size: 28px;
        transition-duration: 0.5s;

      }

      @media only screen and ${device.desktop} {
        font-size: 32px;
        transition-duration: 0.6s;

      }
    }
    
  }
  
  h2, h3, p {
    margin: 0;
    text-align: center;
    cursor: default;
    
  }
  
  div.product-name {

    @media only screen and ${device.mobileS} {

      width: 66%;
      height: 56%;
      border-right: 1px solid #2C2E43;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      
      padding: 8px;
      line-height: 1.4;
    }

    @media only screen and ${device.mobileM} {

      width: 70%;
      height: 56%;
      border-right: 1px solid #2C2E43;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      padding: 8px;
      line-height: 1.4;
    }

    @media only screen and ${device.tablet} {

      width: 75%;
      height: 40%;
      border-right: 1px solid #2C2E43;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      padding: 8px;
      line-height: 1.4;
    }

    @media only screen and ${device.laptop} {

      width: 98%;
      height: 65%;
      
      border: none;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 8px;
      line-height: 1.4;
    }

    @media only screen and ${device.laptopL} {

      width: 98%;
      height: 60%;

      border: none;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 8px;
      line-height: 1.4;
    }

    @media only screen and ${device.desktop} {

      width: 98%;
      height: 60%;

      border: none;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 12px;
      line-height: 1.4;
    }
  }

  div.product-price {

    @media only screen and ${device.mobileS} {

      height: 56%;
      width: 34%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 8px;
      line-height: 1.4;
    }

    @media only screen and ${device.mobileM} {

      width: 30%;
      height: 56%;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 8px;
      line-height: 1.4;
    }

    @media only screen and ${device.tablet} {

      width: 25%;
      height: 40%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 8px;
      line-height: 1.4;
    }

    @media only screen and ${device.laptop} {

      width: 98%;
      height: 35%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 8px;
      line-height: 1.2;
    }

    @media only screen and ${device.laptopL} {

      width: 98%;
      height: 40%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 10px;
      line-height: 1.2;
    }


    @media only screen and ${device.desktop} {

      width: 98%;
      height: 40%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 12px;
      line-height: 1.2;
    }
    
  }
  
  h2 {

    @media only screen and ${device.mobileS} {
      text-align: start;
      
      font-size: 14px;
      
    }

    @media only screen and ${device.mobileM} {
      text-align: start;

      font-size: 16px;

    }

    @media only screen and ${device.tablet} {
      text-align: start;

      font-size: 22px;

      display: inline-block;
      width: 92%;

    }

    @media only screen and ${device.laptop} {
      text-align: center;

      font-size: 18px;
      
    }

    @media only screen and ${device.laptopL} {
      text-align: center;

      font-size: 20px;

    }

    @media only screen and ${device.desktop} {
      text-align: center;

      font-size: 24px;

    }
  }

  h3 {

    @media only screen and ${device.mobileS} {
      font-size: 14px;
      
      text-align: center;
      }

    @media only screen and ${device.mobileS} {
      font-size: 16px;

      text-align: center;
    }

    @media only screen and ${device.tablet} {
      font-size: 22px;

      text-align: center;
    }

    @media only screen and ${device.laptop} {
      font-size: 18px;

      text-align: center;
    }

    @media only screen and ${device.laptopL} {
      font-size: 20px;

      text-align: center;
      height: 60%;
    }

    @media only screen and ${device.desktop} {
      font-size: 22px;

      text-align: center;
      height: 60%;
    }
  }
  
  p, span {

    @media only screen and ${device.mobileS} {
      font-size: 13px;
      
      text-align: start;
      
    }

    @media only screen and ${device.mobileM} {
      font-size: 14px;

      text-align: start;

    }

    @media only screen and ${device.tablet} {
      font-size: 18px;

      text-align: start;

    }
    @media only screen and ${device.laptop} {
      font-size: 14px;

      text-align: center;

    }

    @media only screen and ${device.laptopL} {
      font-size: 16px;

      text-align: center;
      width: 94%;

    }

    @media only screen and ${device.desktop} {
      font-size: 18px;

      text-align: center;
      width: 94%;

    }
    
  }
  
  span {
    @media only screen and ${device.mobileS} {

      display: inline-block;
      text-align: center;
      width: 64%;
    }

    @media only screen and ${device.mobileM} {

      display: inline-block;
      text-align: center;
      width: 90%;
    }

    @media only screen and ${device.tablet} {

      display: inline-block;
      text-align: center;
      width: 90%;
    }

    @media only screen and ${device.laptop} {

      display: inline-block;
      text-align: center;
      width: 98%;
    }

    @media only screen and ${device.laptopL} {

      display: inline-block;
      text-align: center;
      width: 98%;
    }

    @media only screen and ${device.desktop} {

      display: inline-block;
      text-align: center;
      width: 98%;
    }
  }
`;

const Prices = ({ data }) => (
  <Layout>
    <Seo title="Cennik" />
    <PricesContent>
      <PricesBoard>
        {data.allMdx.nodes.map((item, index) => (
          <PricesTab key={index}>
            <div className="product-name">
              <h2>{item.frontmatter.name}</h2>
              {item.frontmatter.additionalInfo !== "n/d" ? <p>{item.frontmatter.additionalInfo}</p> : null}
            </div>
            <div className="product-price">
              <h3>{item.frontmatter.price}</h3>
              {item.frontmatter.additionalPrice !== "n/d" ? <span>{item.frontmatter.additionalPrice}</span> : null}
            </div>
          </PricesTab>
        ))}
      </PricesBoard>
    </PricesContent>

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


export default Prices;
