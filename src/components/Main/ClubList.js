
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import seaside from 'assets/img/seaside.jpg'
import ClubItem from "./ClubItem.js";

//테스트 데이터 axios로 받을 데이터 
let bookInfo = [
    {
        name: "천개의 파랑",
        bookEx : "이책은 어쩌구 저쩌구",
        bookUrl : require("assets/img/booklist/book1.jpg").default
    },
    {
        name: "죽여마땅한 사람들",
        bookEx : "죽여마땅한 사람들..쀼",
        bookUrl : require("assets/img/booklist/book2.jpg").default
    },
    {
        name: "우리가 빛의속도로 갈 수 없다면",
        bookEx : "우리가 빛의속도로 갈 수 없다면",
        bookUrl : require("assets/img/booklist/book3.jpg").default
    },
    {
        name: "우리가 빛의속도로 갈 수 없다면",
        bookEx : "우리가 빛의속도로 갈 수 없다면",
        bookUrl : require("assets/img/booklist/book3.jpg").default
    },
    {
        name: "죽여마땅한 사람들",
        bookEx : "죽여마땅한 사람들..쀼",
        bookUrl : require("assets/img/booklist/book2.jpg").default
    }
]

//클럽 리스트
function ClubList() {
    const clubItem = bookInfo.map((value,key) =>
        < ClubItem bookInfo= { value } />
    );

  return (
    <section class="py-3">
        <div class="container">
        <div class="row">
            <div class="col-lg-6">
            <h3 class="mb-5">북클럽 확인하기</h3>
            </div>
        </div>
        <div class="row">
        { clubItem }
            <div class="col-lg-2 col-md-12 col-12">
            <div class="card card-blog card-background">
                <div class="full-background" style={{ backgroundImage:`url(${seaside})` }}></div> 
                <div class="card-body">
                <div class="content-left text-start my-auto py-4">
                     <a href="/club"> 
                    <h3 class="card-title text-white">더 많은 북클럽을 보고싶다면?</h3>
                    <p class="card-description text-white">북클럽 가입 페이지에서 확인해주세요</p>
                    <a href="/club" class="text-white icon-move-right">Read More
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
