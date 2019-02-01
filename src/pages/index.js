import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome!</h1>
    <p>
      Our membership site is temporarily down for upgrades. Please check back in
      a few days or wait for the email announcement.
    </p>
    <p>Thanks for your patience! ⭐</p>
    <div
      style={{
        maxWidth: `400px`,
        marginBottom: `1.45rem`,
      }}
    >
      <Image />
    </div>
    <a href="https://4-playersofcolorado.org">
      Visit our public site for more information about the club.
    </a>
  </Layout>
);

export default IndexPage
