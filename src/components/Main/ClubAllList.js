
import React from "react";

// reactstrap components
import ClubAllItem from "./ClubAllItem.js";

//테스트 데이터 axios로 받을 데이터 
let bookInfo = [
    {
        name: "천개의 파랑",
        bookEx : "이책은 어쩌구 저쩌구",
        bookUrl : require("assets/img/booklist/book1.jpg").default,
        location : "강남 | 2021년 9월 8일"
    },
    {
        name: "죽여마땅한 사람들",
        bookEx : "죽여마땅한 사람들..쀼",
        bookUrl : require("assets/img/booklist/book2.jpg").default,
        location : "홍대 | 2021년 9월 22일"
    },
    {
        name: "우리가 빛의속도로 갈 수 없다면",
        bookEx : "우리가 빛의속도로 갈 수 없다면",
        bookUrl : require("assets/img/booklist/book3.jpg").default,
        location : "수지 | 2021년 9월 5일"
    },
    {
        name: "우리가 빛의속도로 갈 수 없다면",
        bookEx : "우리가 빛의속도로 갈 수 없다면",
        bookUrl : require("assets/img/booklist/book3.jpg").default,
        location : "분당 | 2021년 9월 1일"
    },
    {
        name: "죽여마땅한 사람들",
        bookEx : "죽여마땅한 사람들..쀼",
        bookUrl : require("assets/img/booklist/book2.jpg").default,
        location : "성수 | 2021년 9월 2일"
    }
]


//클럽 리스트
function ClubAllList() {
    const clubAllItem = bookInfo.map((value,key) =>
        < ClubAllItem bookInfo= { value } />
    );

  return (
    <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h4 class="text-gradient text-primary mb-3">모든 클럽 보기</h4>
        </div>
      </div>
      <div class="row mt-4">
        { clubAllItem }
      </div>
    </div>
  </section>
  );
}

export default ClubAllList;
