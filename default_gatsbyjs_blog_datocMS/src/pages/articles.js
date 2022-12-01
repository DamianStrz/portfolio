import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"

import Layout from "../assets/components/Layout/layout"
import MainWrapper from "../assets/components/MainWrapper"
import Seo from "../assets/components/seo"
import ArticlePreview from "../assets/components/ArticlePreview/ArticlePreview"
import PageInfo from "../assets/components/PageInfo/PageInfo"

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-bottom: 12px;
  padding-right: 40px;
`

const pageData = {
  title: "articles",
  paragraph: "You can post your articles here",
}

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data

  return (
    <Layout>
      <Seo title="Strona wpisów" />
      <MainWrapper>
        <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
        <ArticlesWrapper>
          {nodes.map(({ title, author, featuredimage }) => (
            <ArticlePreview
              key={title}
              title={title}
              slug={slugify(title, { lower: true })}
              author={author}
              image={featuredimage.gatsbyImageData}
            />
          ))}
        </ArticlesWrapper>
      </MainWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        author
        featuredimage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default ArticlesPage
