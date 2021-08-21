
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";
// import "/src/assets/css/nucleo-icons.css";
// import "/src/assets/css/nucleo-svg.css"
// import "/src/assets/css/nucleo-svg.css"
// import "/src/assets/css/soft-design-system.css?v=1.0.5"

function IndexFooter() {
  return (
    <footer class="footer pt-5 mt-5">
    <hr class="horizontal dark mb-5"/>
    <div class="container">
      <div class=" row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <h6 class="text-gradient text-primary font-weight-bolder">Book Club System</h6>
          </div>
          <div>
            <h6 class="mt-3 mb-2 opacity-8">Social</h6>
            <ul class="d-flex flex-row ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i class="fab fa-facebook text-lg opacity-8"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i class="fab fa-twitter text-lg opacity-8"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://dribbble.com/" target="_blank" rel="noreferrer">
                  <i class="fab fa-dribbble text-lg opacity-8"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://github.com/" target="_blank" rel="noreferrer">
                  <i class="fab fa-github text-lg opacity-8"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  <i class="fab fa-youtube text-lg opacity-8"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-gradient text-primary text-sm">Company</h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="https://gitlab.com/seyoungL/book-club-dashboard" target="_blank" rel="noreferrer">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-gradient text-primary text-sm">Resources</h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="https://gitlab.com/seyoungL/book-club-dashboard" target="_blank" rel="noreferrer">
                  genie's friends
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-gradient text-primary text-sm">Help & Support</h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="https://gitlab.com/seyoungL/book-club-dashboard" target="_blank" rel="noreferrer">
                  Contact Us
                </a>
              </li>

            </ul>
          </div>
        </div>
      
        <div class="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 class="text-gradient text-primary text-sm">Legal</h6>
              <ul class="flex-column ms-n3 nav">
                <li class="nav-item">
                  <a class="nav-link" href="https://gitlab.com/seyoungL/book-club-dashboard" target="_blank" rel="noreferrer">
                    Teams genie
                  </a>
                </li>

              </ul>
            </div>
          </div>

        <div class="col-12">
          <div class="text-center">
            <p class="my-4 text-sm">
              All rights reserved. Copyright © <script>
                document.write(new Date().getFullYear())
              </script> Soft UI Design System by <a href="https://gitlab.com/seyoungL/book-club-dashboard" target="_blank" rel="noreferrer">genie's friends</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default IndexFooter;
