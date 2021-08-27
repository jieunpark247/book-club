
import React from "react";
import { Container, Row, Col } from "reactstrap";


import SignIn from "../components/Main/SignIn";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexFooter from "../components/Footers/IndexFooter";

function SignInPage() {
  return (
    <>
    < IndexNavbar />
    <div className="main">
      < SignIn />
      < IndexFooter />
    </div>
    </>
  );
}

export default SignInPage;
