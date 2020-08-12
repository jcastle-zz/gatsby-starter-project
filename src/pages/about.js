import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" /> {/* highlight-line */}
      <p>Such wow. Very React.</p>
    </div>
  )
}