import * as React from "react"

import Layout from "../assets/components/Layout/layout"
import Seo from "../assets/components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Błąd!" />
    <h1>Przykro nam. Taka strona nie istnieje...</h1>
    <p>Nie ma tutaj zawartości, której szukasz :(</p>
  </Layout>
)

export default NotFoundPage
