
import React from "react";

// 클럽 아이템 
function ClubItem(props) {
    const bookInfo = props.bookInfo;
    console.log(bookInfo)
    return (
        <div class="col-lg-2 col-sm-6">
            <div class="card card-plain card-blog">
                <div class="card-image border-radius-lg position-relative">
                {/* <a href="javascript:;"> */}
                    <img class="w-100 border-radius-lg move-on-hover shadow" src={ bookInfo.bookUrl }/>
                {/* </a> */}
                </div>
                <div class="card-body px-0">
                <h5>
                    <a href="javascript:;" class="text-dark font-weight-bold">{ bookInfo.name }</a>
                </h5>
                <p>
                    { bookInfo.bookEx }
                </p>
                <a href="javascript:;" class="text-info icon-move-right">Read More
                    <i class="fas fa-arrow-right text-sm"></i>
                </a> 
                </div>
            </div>
        </div>
    );
}

export default ClubItem;
