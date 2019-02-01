import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Register" />
    <h1>Membership Registration</h1>
    <p>Our site is down for a few days for some upgrades. 3" lift, 33's, re-gearing, grab handles, etc.</p>
    <p>Check back soon!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
