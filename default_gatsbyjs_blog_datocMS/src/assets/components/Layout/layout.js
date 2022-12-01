/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "../header"
import GlobalStyles from "../../styles/globalStyles"
import Footer from "../Footer"

const LayoutHeight = styled.div`
  height: calc(100vh - 28px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutHeight>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {children}

      <Footer />
    </LayoutHeight>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
