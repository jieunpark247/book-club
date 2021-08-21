
import React from "react";

import ProfilePageHeader from "../components/Headers/ProfilePageHeader";
import ProfilePageMain from "../components/Main/ProfilePageMain";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexFooter from "../components/Footers/IndexFooter.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>  
       <IndexNavbar />
       < ProfilePageHeader/> 
      <div className="main">
       < ProfilePageMain/>
       < IndexFooter/>
      </div>
    </>
  );
}

export default Index;
