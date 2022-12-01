import React from "react"
import MainWrapper from "../MainWrapper"
import Layout from "./layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query singleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      articleContent {
        ... on DatoCmsHeading {
          id
          headingContent
        }
        ... on DatoCmsParagraph {
          id
          paragraphContent
        }
        ... on DatoCmsImage {
          id
          imageData {
            alt
            url
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      title
      author
      featuredimage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

// TODO:

const PostLayout = ({ data }) => {
  return (
    <Layout>
      <MainWrapper>
        <div>
          <h1>{data.datoCmsArticle.title}</h1>
          <p>{data.datoCmsArticle.author}</p>
          <GatsbyImage
            alt="post picture"
            image={data.datoCmsArticle.featuredimage.gatsbyImageData}
          />
          <div>
            {data.datoCmsArticle.articleContent.map(item => {
              const itemKey = Object.keys(item)[1]

              switch (itemKey) {
                case "paragraphContent":
                  return <p key={item.id}>{item[itemKey]}</p>
                case "headingContent":
                  return <h2 key={item.id}>{item[itemKey]}</h2>
                case "imageData":
                  return (
                    <GatsbyImage
                      image={item[itemKey].gatsbyImageData}
                      alt={`picture for article ${item.imageData.alt}`}
                      key={item.id}
                    />
                  )
                default: {
                  return null
                }
              }
            })}
          </div>
        </div>
      </MainWrapper>
    </Layout>
  )
}

export default PostLayout
