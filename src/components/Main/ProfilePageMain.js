
import React from "react";

function ProfilePageHeader() {

  return (
    <section class="py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3 class="mb-5">신청한 북클럽</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2 col-sm-6">
            <div class="card card-plain card-blog">
              <div class="card-image border-radius-lg position-relative">
                <a href="javascript:;">
                  <img class="w-100 border-radius-lg move-on-hover shadow" src={require("assets/img/booklist/book1.jpg").default}/>
                </a>
              </div>
              <div class="card-body px-0">
                <h5>
                  <a href="javascript:;" class="text-dark font-weight-bold">천개의 파랑</a>
                </h5>
                <p>
                  천개의 파랑은 ...어쩌구 ...
                </p>
                <a href="javascript:;" class="text-info icon-move-right">Read More
                  <i class="fas fa-arrow-right text-sm"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6">
            <div class="card card-plain card-blog">
              <div class="card-image border-radius-lg position-relative">
                <a href="javascript:;">
                  <img class="w-100 border-radius-lg move-on-hover shadow" src={require("assets/img/booklist/book2.jpg").default}/>
                </a>
              </div>
              <div class="card-body px-0">
                <h5>
                  <a href="javascript:;" class="text-dark font-weight-bold">죽여마땅한 사람들</a>
                </h5>
                <p>
                  죽여마땅한 사람들은 어쩌구 저쩌구...
                </p>
                <a href="javascript:;" class="text-info icon-move-right">Read More
                  <i class="fas fa-arrow-right text-sm"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6">
            <div class="card card-plain card-blog">
              <div class="card-image border-radius-lg position-relative">
                <a href="javascript:;">
                  <img class="w-100 border-radius-lg move-on-hover shadow" src={require("assets/img/booklist/book3.jpg").default}/>
                </a>
              </div>
              <div class="card-body px-0">
                <h5>
                  <a href="javascript:;" class="text-dark font-weight-bold">우리가 빛의속도로 갈 수 없다면</a>
                </h5>
                <p>
                  우리가 빛의속도로 갈 수 없다면은 어쩌구 저쩌구...
                </p>
                <a href="javascript:;" class="text-info icon-move-right">Read More
                  <i class="fas fa-arrow-right text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePageHeader;
