
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import seaside from 'assets/img/seaside.jpg'

// core components

function ClubList() {
  return (
    <section class="py-3">
        <div class="container">
        <div class="row">
            <div class="col-lg-6">
            <h3 class="mb-5">북클럽 확인하기</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-sm-6">
            <div class="card card-plain card-blog">
                <div class="card-image border-radius-lg position-relative">
                {/* <a href="javascript:;"> */}
                    <img class="w-100 border-radius-lg move-on-hover shadow" src={require("assets/img/booklist/book1.jpg").default}/>
                {/* </a> */}
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
                    <img class="w-100 border-radius-lg move-on-hover shadow" src= {require("assets/img/booklist/book3.jpg").default}/>
                 </a> *
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
            <div class="col-lg-2 col-md-12 col-12">
            <div class="card card-blog card-background">
                <div class="full-background" style={{ backgroundImage:`url(${seaside})` }}></div> 
                <div class="card-body">
                <div class="content-left text-start my-auto py-4">
                     <a href="javascript:;"> 
                    <h3 class="card-title text-white">더 많은 북클럽을 보고싶다면?</h3>
                    <p class="card-description text-white">북클럽 가입 페이지에서 확인해주세요</p>
                    <a href="javascript:;" class="text-white icon-move-right">Read More
                        <i class="fas fa-arrow-right text-sm"></i>
                    </a>
                     </a> 
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}

export default ClubList;
