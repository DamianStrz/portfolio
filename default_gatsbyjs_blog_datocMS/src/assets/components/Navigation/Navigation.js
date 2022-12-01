import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Cormorant SC, serif;


  a {
    text-decoration: none;
    color: inherit;
  }
`
const Logo = styled.span`
  font-weight: 600;
  font-size: 32px;
  font-family: Pacifico, serif;

  margin-right: 8px;
  margin-left: 12px;
`
const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`

const NavigationItem = styled.li`
  font-weight: 500;
  font-size: 24px;
  margin-left: 30px;
`

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Logo>
        <Link to="/">Logo</Link>
      </Logo>
      <NavigationList>
        <NavigationItem>
          <Link to="/articles">Blog</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/about">O nas</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/gallery">Galeria</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/contact">Kontakt</Link>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
