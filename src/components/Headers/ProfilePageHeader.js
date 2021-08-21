
import React from "react";

// reactstrap components

// core components

function ProfilePageHeader() {

  return (
    <section class="py-sm-4 py-5 position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12 mx-auto">
            <div class="row py-lg-7 py-5">
              <div class="col-lg-3 col-md-5 position-relative my-auto">
                <img class="img border-radius-lg max-width-200 w-100 position-relative z-index-2" src={require("assets/img/bruce-mars.jpg").default} alt="bruce"/>
              </div>
              <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4">
                <h3 class="mb-2">My Profile</h3>
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h4 class="mb-0">박지은</h4>
                </div>
                <div class="row mb-4">
                  <div class="col-auto">
                    <span class="h6">3</span>
                    <span>등록한 북클럽</span>
                  </div>
                  <div class="col-auto">
                    <span class="h6">1</span>
                    <span>신청한 북클럽 </span>
                  </div>
                </div>
                <div class="col-auto">
                <p class="text-lg mb-0">별명 : 지니</p>
                <p class="text-lg mb-0">아이디 : jieunpark247@gmail.com</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePageHeader;
