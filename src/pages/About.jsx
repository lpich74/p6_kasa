import React from "react"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import '../styles/About.css'

function About() {
    return (
      <React.Fragment>
        <Banner isHomePage={false} />
        <section className="collapse-set">
          <Collapse isFiabilite={true} />
          <Collapse isRespect={true} />
          <Collapse isService={true} />
          <Collapse isSecurite={true} />
        </section>
      </React.Fragment>
    )
  }
  
  export default About
  