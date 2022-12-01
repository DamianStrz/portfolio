import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  background-size: cover;
`

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
`

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

const Preview = ({ title, excerpt, image, slug, author }) => {
  return (
    <PreviewWrapper to={`/articles/${slug}`}>
      <StyledImage image={image} alt={`picture for article ${title}`} />
      <PreviewInfoLabel>
        <h2>{title}</h2>
        <p>{author}</p>
      </PreviewInfoLabel>
    </PreviewWrapper>
  )
}

export default Preview
