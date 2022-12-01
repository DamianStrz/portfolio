import React from "react";

import Navigation from "../Navigation/Navigation";
import GlobalStyle from "../../assets/styles/globalStyle";
import BottomTabs from "../BottomTabs/BottomTabs"

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Navigation />
      {children}
      <BottomTabs/>
    </>
  )
}

export default Layout;