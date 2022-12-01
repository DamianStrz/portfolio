import * as React from "react"
import { Helmet } from "react-helmet"

import Seo from "../components/seo"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import CookiesPopup from "../components/Cookies/CookiesPopup"

const IndexPage = () => (
    <Layout>
      <Helmet>
          <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"/>
      </Helmet>
      <Seo title="Domirent" />
      <Hero/>
      <CookiesPopup/>
    </Layout>

)

export default IndexPage;
