
import React from "react";
import { Container, Row, Col } from "reactstrap";


function SignIn() {
  return (
    <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
            <div class="card card-plain">
              <div class="card-header pb-0 text-left">
                <h4 class="font-weight-bolder">Sign In</h4>
                <p class="mb-0">Enter your email and password to sign in</p>
              </div>
              <div class="card-body">
                <form role="form">
                  <div class="mb-3">
                    <input type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="rememberMe"/>
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-2 text-sm mx-auto">
                  Don't have an account?
                </p>
                  <button type="button" class="btn-kakao"><img src={require("assets/img/kakao-login/kakao_login_medium_narrow.png").default} alt=""/></button>
              </div>
            </div>
          </div>
          
          <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
            <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
              <img src={require("assets/img/shapes/pattern-lines.svg").default} alt="pattern-lines" class="position-absolute opacity-4 start-0"/>
              <div class="position-relative">
                <img class="max-width-500 w-100 position-relative z-index-2" src={require("assets/img/illustrations/chat.png").default}/>
              </div>
              <h4 class="mt-5 text-white font-weight-bolder">"???????????? ???????????????"</h4>
              <p class="text-white">???????????? ????????? ???????????? ???????????? ??? ????????????.></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default SignIn;
