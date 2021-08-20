/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Container, Row, Col } from "reactstrap";

function SectionList() {
  return (
    <>
      <div id="images">
          <Container>
            <Row>
              <Col className="mr-auto gx-5" md="3" sm="5">
                <h4 className="images-title">천개의 파랑</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/booklist/book1.jpg").default}
                />
                <p className="text-center">천개의 파랑 책 읽기 클럽</p>
              </Col>

              <Col className="mr-auto gx-5" md="3" sm="5">
                <h4 className="images-title">죽여 마땅한 사람들</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/booklist/book2.jpg").default}
                />
                <p className="text-center">죽여 마땅한 사람들 책 읽기 클럽</p>
              </Col>

              <Col className="mr-auto gx-5" md="3" sm="5">
                <h4 className="images-title">우리가 빛의 속도로 갈 수 없다면</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/booklist/book3.jpg").default}
                />
                <p className="text-center">우리가 빛의 속도로 갈 수 없다면 책 읽기 클럽</p>
              </Col>


              <Col className="mr-auto gx-5" md="3" sm="5">
                <h4 className="images-title">천개의 파랑</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/booklist/book2.jpg").default}
                />
                <p className="text-center">천개의 파랑 책 읽기 클럽</p>
              </Col>


              <Col className="mr-auto gx-5" md="3" sm="5">
                <h4 className="images-title">천개의 파랑</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/booklist/book3.jpg").default}
                />
                <p className="text-center">천개의 파랑 책 읽기 클럽</p>
              </Col>


              <Col className="mr-auto gx-5" md="3" sm="5">
                <h4 className="images-title">천개의 파랑</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/booklist/book2.jpg").default}
                />
                <p className="text-center">천개의 파랑 책 읽기 클럽</p>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}

export default SectionList;
