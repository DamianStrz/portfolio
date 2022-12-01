import React from "react"
import styled from "styled-components"

const PageFooter = styled.footer`

`

function Footer() {
  return (
    <PageFooter>
      © {new Date().getFullYear()} Firma Takaowaka | Design: Damian
    </PageFooter>
  )
}

export default Footer
