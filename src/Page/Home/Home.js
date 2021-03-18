import React, { Fragment } from "react";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import Statistic from "./Statistics";
const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/Dashboard" />;
  }

  return (
    <Fragment>
      <Hero></Hero>
      {/* <Statistic /> */}
      <Features></Features>
      <Footer></Footer>
    </Fragment>
  );
};
Home.propTypes = {};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(Home);
