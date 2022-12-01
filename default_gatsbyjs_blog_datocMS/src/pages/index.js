import React from "react"
import Button from "../assets/components/Button"
import styled from "styled-components"

import Layout from "../assets/components/Layout/layout"
import Seo from "../assets/components/seo"
import MainWrapper from "../assets/components/MainWrapper"
import { StaticImage } from "gatsby-plugin-image"

const ContentWrapper = styled.div`
  width: 60%;
  height: 100%;
  text-align: right;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  padding: 80px 60px 80px 0;

  h1 {
    font-size: 82px;
    font-weight: bold;
    text-transform: uppercase;

    margin: 0;
    width: 80%;

    line-height: 0.98;
  }

  p {
    margin: 20px 0 40px 0;
    width: 62%;

    font-size: 18px;
  }
`

const ImageWrapper = styled.div`
  width: 40%;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Start" />
    <MainWrapper>
      <ContentWrapper>
        <h1>Przykładowa strona główna</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus animi quaerat iste neque assumenda suscipit.
        </p>
        <Button>Przycisk</Button>
      </ContentWrapper>
      <ImageWrapper>
        <StaticImage
          src="../assets/images/homepage-img.jpg"
          alt="Obrazek kuchni"
          layout="constrained"
          formats={["auto", "png"]}
          placeholder="tracedSVG"
          style={{ width: "100%", height: "100vh" }}
        />
      </ImageWrapper>
    </MainWrapper>
  </Layout>
)

// export const query = graphql`
//   query {
//     file(name: { regex: "/home/" }) {
//       publicURL
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//   }
// `

export default IndexPage
