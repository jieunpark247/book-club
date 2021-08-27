
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function SectionList() {
  return (
    <section class="pt-3 pb-4" id="count-stats">
        <div class="container">
        <div class="row">
            <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
            <div class="row">
                <div class="col-md-4 position-relative">
                <div class="p-3 text-center">
                    <h1 class="text-gradient text-primary"><span id="state1" countTo="70">2</span>+</h1>
                    <h5 class="mt-3">북클럽 이란?</h5>
                    <p class="text-sm">자유롭게 북클럽을 가입하고 만들어보세요.</p>
                </div>
                <hr class="vertical dark"/>
                </div>
                <div class="col-md-4 position-relative">
                <div class="p-3 text-center">
                    <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">1</span>+</h1>
                    <h5 class="mt-3">북클럽 만들기</h5>
                    <p class="text-sm">자유롭게 북클럽을 만드 실 수 있습니다.<br/> 상단 버튼을 이용해주세요</p>
                </div>
                <hr class="vertical dark"/>
                </div>
                <div class="col-md-4">
                <div class="p-3 text-center">
                    <h1 class="text-gradient text-primary" id="state3" countTo="4">4</h1>
                    <h5 class="mt-3">북클럽 가입하기</h5>
                    <p class="text-sm">북클럽을 가입하고 싶다면? <br/> 하단에 내용을 보시고 선택해주세요</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}

export default SectionList;
