
import React from "react";

// 클럽 아이템 
function ClubAllItem(props) {
    const bookInfo = props.bookInfo;
    return (
        <div class="col-lg-3 col-md-8">
        <div class="card bg-gradient-white">
          <div class="card-body-detail">
            <div class = "text-center">
              <img class="w-50" src={ bookInfo.bookUrl }/>
            </div>
            <div class="author mt-3">
              <div class="name">
                <h6 class="mb-0 font-weight-bolder">천개의 파랑</h6>
                <div class="stats ">
                  <i class="far fa-clock"></i> { bookInfo.location }
                </div>
              </div>
            </div>
            <p class="mt-4 ">이 책을 울라불라 울라불라 불라불라 불라불라 불라불라 불라불라</p>
            {/* <div class="rating mt-3">
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
            </div> */}
            <a href="/detail-club" class="text-primary icon-move-right">
            Read more
            <i class="fas fa-arrow-right text-sm ms-1"></i>
          </a>
          </div>
        </div>
      </div>
    );
}

export default ClubAllItem;
