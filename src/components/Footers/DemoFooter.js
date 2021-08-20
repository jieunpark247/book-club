
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white text-center section section-gray" md="8">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.naver.com"
                  target="_blank" rel="noreferrer"
                >
                  genie's friends
                </a>
              </li>
              <li>
                <a
                  href="https://www.naver.com"
                  target="_blank" rel="noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                   href="https://www.naver.com"
                  target="_blank" rel="noreferrer"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by genie's friends
            </span>
          </div>
        </Row>
      </Container>
      
    </footer>
  );
}

export default DemoFooter;
