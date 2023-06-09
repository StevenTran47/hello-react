import styled from "styled-components";
// import { Link } from "react-router-dom";
import Header from "components/Header";
import {SideBar} from "components/SideBar"

const LayoutStyled = styled.div`
  background-color:  #CAEAE6;
  height: 100vh;
  .right {
    float: right;
    width: 80%;
  }
`;
const ContentStyled = styled.div`
  /* background-color: #f23412; */
  /* margin-top: 64px; */
  /* height: 100vh; */
`;
const SideBarStyled = styled.div`
  background-color: #aaf031;
  float: left;
  width: 15%;
  height: 100vh;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        {/* <Link to="/" >
          Dashboard
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/login">
          Login
        </Link> */}
        <SideBar></SideBar>
      </SideBarStyled>
      <div className="right">
        <Header />
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;