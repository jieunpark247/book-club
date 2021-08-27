
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader";
import IndexFooter from "../components/Footers/IndexFooter.js";
import SectionList from "../components/Main/SectionList.js";
import ClubList from "../components/Main/ClubList.js";

function MainPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      < IndexNavbar/>
      < IndexHeader/>
      < SectionList/>
      <div className="main">
        < ClubList/>
        < IndexFooter/>
      </div>
    </>
  );
}

export default MainPage;
