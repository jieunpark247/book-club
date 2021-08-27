
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexFooter from "../components/Footers/IndexFooter.js";

function CreatePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      < IndexNavbar />
      <div className="main">
        < IndexFooter />
      </div>
    </>
  );
}

export default CreatePage;
