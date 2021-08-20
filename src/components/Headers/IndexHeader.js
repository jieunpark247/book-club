
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header-index section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Book Club</h1>
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              책 함께 읽기 "북 투게더"
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{  
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
        <h6 className="category category-absolute">
          made by genie's friends
          {/* made by{" "}
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png").default}
            /> */}
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
