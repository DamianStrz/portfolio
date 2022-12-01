import * as React from "react";
import PropTypes from "prop-types";

import Navigation from "./Navigation/Navigation";

const Header = ({siteTitle}) => (
  <header>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
