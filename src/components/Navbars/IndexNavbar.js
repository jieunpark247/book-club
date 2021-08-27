
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";


export default class IndexNavbar extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.state = {
        dropdownOpen: false,
        navbarCollapse: false, 
        setNavbarCollapse: false,
        navbarColor: "navbar-transparent",
        setNavbarColor: "navbar-transparent",
      };
    }

    componentDidMount() {
      //시작
      const updateNavbarColor = () => {
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          this.setState({setNavbarColor: ""});
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          this.setState({setNavbarColor: "navbar-transparent"});
        }
      };
    
      window.addEventListener("scroll", updateNavbarColor);
    
      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    }
  
    componentWillUnmount() {
     
    }
  
    handleStatusChange(status) {
   
    }
  

    toggleNavbarCollapse = () => {
      console.log("toggleNavbarCollapse");
      this.setState({setNavbarCollapse: !this.navbarCollapse});
      document.documentElement.classList.toggle("nav-open");
    };

    toggle() {
      console.log("toggle");
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    onMouseEnter() {
      console.log("onMouseEnter");
      this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
      console.log("onMouseLeave");
      this.setState({dropdownOpen: false});
    }

    render(){
      return (
        <Container className= "position-sticky z-index-sticky top-0">
          <Row>
            <Col xs={12}>
              <Navbar className= "navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4"  expand="lg">
                <Container fluid>
                  <div className="navbar-brand font-weight-bolder ms-sm-3">
                    <NavbarBrand
                      data-placement="bottom"
                      href="/index"
                      target="_blank"
                    >
                    Book Club
                    </NavbarBrand> 
                    </div>
                    <button
                      aria-expanded={this.state.navbarCollapse}
                      // className={classnames("navbar-toggler navbar-toggler", {
                      //   toggled: navbarCollapse,
                      // })}
                      className = "navbar-toggler shadow-none ms-2"
                      onClick={this.state.toggleNavbarCollapse}
                    >
                      <span class="navbar-toggler-icon mt-2">
                      <span class="navbar-toggler-bar bar1 "></span>
                      <span class="navbar-toggler-bar bar2"></span>
                      <span class="navbar-toggler-bar bar3"></span>
                    </span>
                    </button>
                
                  <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={this.state.navbarCollapse}
                  >
                    <Nav navbar>
                      <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              aria-expanded={false}
                              aria-haspopup={true}
                              caret
                              color="default"
                              data-toggle="dropdown"
                              href="#pablo"
                              nav
                              onClick={(e) => e.preventDefault()}
                              role="button"
                              onMouseOver={this.onMouseEnter} 
                              onMouseLeave={this.onMouseLeave} 
                              isOpen={this.state.dropdownOpen} 
                              toggle={this.toggle}
                            >
                              BookClub
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-danger font-weight-bolder" right>
                              <DropdownItem header tag="span">
                                북클럽
                              </DropdownItem>
                              <DropdownItem
                                href="/login"
                                onClick={(e) => e.preventDefault()}
                              >
                                북클럽 만들기
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem
                                href="/register"
                                onClick={(e) => e.preventDefault()}
                              >
                                북클럽 가입하기
                              </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              aria-expanded={false}
                              aria-haspopup={true}
                              caret
                              color="default"
                              data-toggle="dropdown"
                              href="#pablo"
                              nav
                              onClick={(e) => e.preventDefault()}
                              role="button"
                            >
                          My
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-danger" right>
                              <DropdownItem header tag="span">
                                setting
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem
                                href="/login"
                                onClick={(e) => e.preventDefault()}
                              >
                                Login
                              </DropdownItem>
                              <DropdownItem
                                href="/register"
                                onClick={(e) => e.preventDefault()}
                              >
                                Register
                              </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
          
            
                      <li class="nav-item my-auto ms-3 ms-lg-0">
                        <a href="/Login" class="btn btn-sm bg-gradient-primary btn-round mb-0 me-1 mt-2 mt-md-0">북클럽 만들기</a>
                      </li> 
                      {/* 고치기!!!!!!!!! */}

                  </Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      );
    }
}

